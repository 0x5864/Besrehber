package com.besrehber.app

import android.content.ActivityNotFoundException
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.os.Message
import android.view.MenuItem
import android.view.View
import android.webkit.DownloadListener
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebSettings
import android.webkit.WebView
import android.widget.ProgressBar
import androidx.activity.addCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout
import androidx.webkit.WebViewAssetLoader
import com.google.android.material.appbar.MaterialToolbar

class MainActivity : AppCompatActivity() {

  private lateinit var progressBar: ProgressBar
  private lateinit var swipeRefreshLayout: SwipeRefreshLayout
  private lateinit var topAppBar: MaterialToolbar
  private lateinit var webView: WebView
  private lateinit var assetLoader: WebViewAssetLoader

  override fun onCreate(savedInstanceState: Bundle?) {
    installSplashScreen()
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    progressBar = findViewById(R.id.page_load_progress)
    swipeRefreshLayout = findViewById(R.id.swipe_refresh)
    topAppBar = findViewById(R.id.top_app_bar)
    webView = findViewById(R.id.web_view)
    assetLoader = buildAssetLoader()

    configureTopAppBar()
    configurePullToRefresh()
    configureWebView()

    if (savedInstanceState == null) {
      webView.loadUrl(APP_ENTRY_URL)
    } else {
      webView.restoreState(savedInstanceState)
    }

    onBackPressedDispatcher.addCallback(this) {
      if (webView.canGoBack()) {
        webView.goBack()
      } else {
        finish()
      }
    }
  }

  override fun onSaveInstanceState(outState: Bundle) {
    super.onSaveInstanceState(outState)
    webView.saveState(outState)
  }

  override fun onDestroy() {
    webView.destroy()
    super.onDestroy()
  }

  private fun buildAssetLoader(): WebViewAssetLoader {
    return WebViewAssetLoader.Builder()
      .addPathHandler("/site/", WebViewAssetLoader.AssetsPathHandler(this))
      .build()
  }

  private fun configureTopAppBar() {
    setSupportActionBar(topAppBar)
    supportActionBar?.setDisplayShowTitleEnabled(true)
    topAppBar.setOnMenuItemClickListener(::handleMenuItemClick)
  }

  private fun configurePullToRefresh() {
    swipeRefreshLayout.setColorSchemeResources(
      R.color.bes_primary,
      R.color.bes_primary_dark,
    )
    swipeRefreshLayout.setProgressBackgroundColorSchemeResource(R.color.bes_surface)
    swipeRefreshLayout.setOnRefreshListener {
      webView.reload()
    }
    swipeRefreshLayout.setOnChildScrollUpCallback { _, _ ->
      webView.scrollY > 0
    }
  }

  private fun handleMenuItemClick(menuItem: MenuItem): Boolean {
    return when (menuItem.itemId) {
      R.id.action_refresh -> {
        swipeRefreshLayout.isRefreshing = true
        webView.reload()
        true
      }

      R.id.action_open_in_browser -> {
        openCurrentPageInBrowser()
        true
      }

      R.id.action_share -> {
        shareCurrentPage()
        true
      }

      else -> false
    }
  }

  private fun configureWebView() {
    WebView.setWebContentsDebuggingEnabled(BuildConfig.DEBUG)

    with(webView.settings) {
      javaScriptEnabled = true
      domStorageEnabled = true
      databaseEnabled = true
      allowContentAccess = true
      allowFileAccess = false
      cacheMode = WebSettings.LOAD_DEFAULT
      mixedContentMode = WebSettings.MIXED_CONTENT_NEVER_ALLOW
      loadWithOverviewMode = true
      useWideViewPort = true
      builtInZoomControls = false
      displayZoomControls = false
      setSupportZoom(false)
      setSupportMultipleWindows(true)
      userAgentString = "$userAgentString BESRehberAndroid/1.0"
      mediaPlaybackRequiresUserGesture = true
    }

    webView.isVerticalScrollBarEnabled = false
    webView.isHorizontalScrollBarEnabled = false
    webView.webViewClient = BesRehberWebViewClient(assetLoader)
    webView.webChromeClient = object : WebChromeClient() {
      override fun onProgressChanged(view: WebView?, newProgress: Int) {
        progressBar.progress = newProgress
        val isFinished = newProgress >= 100
        progressBar.visibility = if (isFinished) View.GONE else View.VISIBLE
        if (isFinished) {
          swipeRefreshLayout.isRefreshing = false
        }
      }

      override fun onCreateWindow(
        view: WebView?,
        isDialog: Boolean,
        isUserGesture: Boolean,
        resultMsg: Message?,
      ): Boolean {
        val transport = resultMsg?.obj as? WebView.WebViewTransport ?: return false
        val bridgeWebView = WebView(this@MainActivity)

        bridgeWebView.webViewClient = object : android.webkit.WebViewClient() {
          override fun shouldOverrideUrlLoading(
            view: WebView,
            request: WebResourceRequest,
          ): Boolean {
            if (isLocalSiteUri(request.url)) {
              webView.loadUrl(request.url.toString())
            } else {
              openExternalUri(request.url)
            }

            view.destroy()
            return true
          }
        }

        transport.webView = bridgeWebView
        resultMsg.sendToTarget()
        return true
      }
    }
    webView.setDownloadListener(DownloadListener { url, _, _, _, _ ->
      openExternalUri(Uri.parse(url))
    })
  }

  private fun openExternalUri(uri: Uri) {
    val intent = Intent(Intent.ACTION_VIEW, uri).apply {
      addCategory(Intent.CATEGORY_BROWSABLE)
    }

    try {
      startActivity(intent)
    } catch (_: ActivityNotFoundException) {
      // Desteklenen bir uygulama yoksa istegi sessizce yoksay.
    }
  }

  private fun openCurrentPageInBrowser() {
    resolveExternalPageUrl { resolvedUrl ->
      openExternalUri(Uri.parse(resolvedUrl))
    }
  }

  private fun shareCurrentPage() {
    resolveExternalPageUrl { resolvedUrl ->
      val shareTitle = webView.title?.takeIf { it.isNotBlank() } ?: getString(R.string.app_name)
      val shareText = getString(R.string.share_text, shareTitle, resolvedUrl)
      val shareIntent = Intent(Intent.ACTION_SEND).apply {
        type = "text/plain"
        putExtra(Intent.EXTRA_SUBJECT, shareTitle)
        putExtra(Intent.EXTRA_TEXT, shareText)
      }

      startActivity(Intent.createChooser(shareIntent, getString(R.string.share_chooser_title)))
    }
  }

  private fun resolveExternalPageUrl(onResolved: (String) -> Unit) {
    val currentUrl = webView.url.orEmpty()
    if (currentUrl.startsWith("http") && !currentUrl.contains(WEBVIEW_HOST)) {
      onResolved(currentUrl)
      return
    }

    webView.evaluateJavascript(RESOLVE_EXTERNAL_URL_SCRIPT) { rawValue ->
      val resolvedValue = rawValue
        ?.removePrefix("\"")
        ?.removeSuffix("\"")
        ?.replace("\\u003C", "<")
        ?.replace("\\/", "/")
        ?.takeIf { it.isNotBlank() && it != "null" }

      onResolved(resolvedValue ?: PROJECT_REPOSITORY_URL)
    }
  }

  private inner class BesRehberWebViewClient(
    private val loader: WebViewAssetLoader,
  ) : android.webkit.WebViewClient() {

    override fun shouldInterceptRequest(
      view: WebView,
      request: WebResourceRequest,
    ): WebResourceResponse? {
      return loader.shouldInterceptRequest(request.url)
    }

    override fun shouldOverrideUrlLoading(
      view: WebView,
      request: WebResourceRequest,
    ): Boolean {
      val requestUrl = request.url

      if (isLocalSiteUri(requestUrl)) {
        return false
      }

      if (requestUrl.scheme == "http" || requestUrl.scheme == "https") {
        openExternalUri(requestUrl)
        return true
      }

      if (requestUrl.scheme == "mailto" || requestUrl.scheme == "tel") {
        openExternalUri(requestUrl)
        return true
      }

      return super.shouldOverrideUrlLoading(view, request)
    }

    override fun onPageStarted(view: WebView, url: String?, favicon: android.graphics.Bitmap?) {
      super.onPageStarted(view, url, favicon)
      progressBar.visibility = View.VISIBLE
    }

    override fun onPageFinished(view: WebView, url: String?) {
      super.onPageFinished(view, url)
      progressBar.visibility = View.GONE
      swipeRefreshLayout.isRefreshing = false
    }

    override fun onReceivedError(
      view: WebView,
      request: WebResourceRequest,
      error: android.webkit.WebResourceError,
    ) {
      super.onReceivedError(view, request, error)
      swipeRefreshLayout.isRefreshing = false

      if (request.isForMainFrame && !isLocalSiteUri(request.url)) {
        view.loadUrl(APP_ENTRY_URL)
      }
    }
  }

  private fun isLocalSiteUri(uri: Uri): Boolean {
    return uri.scheme == "https" &&
      uri.authority == WEBVIEW_HOST &&
      uri.path?.startsWith("/site/") == true
  }

  companion object {
    private const val WEBVIEW_HOST = "appassets.androidplatform.net"
    private const val PROJECT_REPOSITORY_URL = "https://github.com/0x5864/Besrehber"
    private const val APP_ENTRY_URL =
      "https://$WEBVIEW_HOST/site/web/index.html#anasayfa"
    private const val RESOLVE_EXTERNAL_URL_SCRIPT =
      """
      (() => {
        if (window.location.pathname.includes('fonlar.html')) {
          return 'https://www.tefas.gov.tr/';
        }

        const companyUrl = document.querySelector('#company-logo-link')?.href;
        if (companyUrl && companyUrl.startsWith('http')) {
          return companyUrl;
        }

        const current = window.location.href || '';
        if (current.startsWith('http') && !current.includes('appassets.androidplatform.net')) {
          return current;
        }

        return '';
      })();
      """
  }
}
