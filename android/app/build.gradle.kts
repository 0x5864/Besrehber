import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import java.util.Properties

val signingProperties = Properties()
val signingPropertiesFile = rootProject.file("signing.properties")

if (signingPropertiesFile.exists()) {
  signingPropertiesFile.inputStream().use(signingProperties::load)
}

fun signingValue(key: String): String? {
  return signingProperties.getProperty(key)?.takeIf { it.isNotBlank() }
    ?: providers.environmentVariable(key).orNull?.takeIf { it.isNotBlank() }
}

plugins {
  id("com.android.application")
  id("org.jetbrains.kotlin.android")
}

android {
  namespace = "com.besrehber.app"
  compileSdk = 36

  defaultConfig {
    applicationId = "com.besrehber.app"
    minSdk = 26
    targetSdk = 36
    versionCode = 1
    versionName = "1.0.0"

    testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
  }

  val releaseStoreFile = signingValue("BESREHBER_UPLOAD_STORE_FILE")
  val releaseStorePassword = signingValue("BESREHBER_UPLOAD_STORE_PASSWORD")
  val releaseKeyAlias = signingValue("BESREHBER_UPLOAD_KEY_ALIAS")
  val releaseKeyPassword = signingValue("BESREHBER_UPLOAD_KEY_PASSWORD")
  val hasReleaseSigning =
    !releaseStoreFile.isNullOrBlank() &&
      !releaseStorePassword.isNullOrBlank() &&
      !releaseKeyAlias.isNullOrBlank() &&
      !releaseKeyPassword.isNullOrBlank()

  signingConfigs {
    if (hasReleaseSigning) {
      create("release") {
        storeFile = file(releaseStoreFile)
        storePassword = releaseStorePassword
        keyAlias = releaseKeyAlias
        keyPassword = releaseKeyPassword
      }
    }
  }

  buildTypes {
    release {
      isMinifyEnabled = false
      isShrinkResources = false
      if (hasReleaseSigning) {
        signingConfig = signingConfigs.getByName("release")
      }
      proguardFiles(
        getDefaultProguardFile("proguard-android-optimize.txt"),
        "proguard-rules.pro",
      )
    }
  }

  compileOptions {
    sourceCompatibility = JavaVersion.VERSION_17
    targetCompatibility = JavaVersion.VERSION_17
  }

  buildFeatures {
    buildConfig = true
  }
}

kotlin {
  compilerOptions {
    jvmTarget = JvmTarget.JVM_17
  }
}

dependencies {
  implementation("androidx.core:core-ktx:1.15.0")
  implementation("androidx.appcompat:appcompat:1.7.0")
  implementation("androidx.activity:activity-ktx:1.10.1")
  implementation("androidx.swiperefreshlayout:swiperefreshlayout:1.1.0")
  implementation("androidx.webkit:webkit:1.12.1")
  implementation("androidx.core:core-splashscreen:1.0.1")
  implementation("com.google.android.material:material:1.12.0")
}

afterEvaluate {
  if (!signingPropertiesFile.exists()) {
    logger.lifecycle(
      "Release signing icin android/signing.properties olusturabilir veya BESREHBER_UPLOAD_* ortam degiskenlerini kullanabilirsin.",
    )
  }
}
