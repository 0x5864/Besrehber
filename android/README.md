# Android Kabuğu

Bu klasör, BESRehber için native Android kabuğunu içerir.

Uygulama, web içeriğini Android `WebView` içinde açar.
Yerel dosyalar uygulamanın `assets` klasöründen yüklenir.

## Klasörler

- `app/src/main/java`: Android kodu
- `app/src/main/res`: Tema, ikon ve görünüm dosyaları
- `app/src/main/assets`: Web dosyalarının Android içindeki kopyası

## Web Dosyalarını Eşitle

Kök klasörde şu komutu çalıştır:

```bash
./scripts/sync-android-assets.sh
```

## Android Studio ile Aç

1. Android Studio içinde `android` klasörünü aç.
2. Gerekirse Studio'nun kendi JDK'sını seç.
3. Gradle eşitlemesi bitince uygulamayı çalıştır.

## Release Hazırlığı

Release imzası için `signing.properties.example` dosyasını kopyala:

```bash
cp signing.properties.example signing.properties
```

Sonra kendi anahtar bilgilerini yaz.

Desteklenen alanlar:

- `BESREHBER_UPLOAD_STORE_FILE`
- `BESREHBER_UPLOAD_STORE_PASSWORD`
- `BESREHBER_UPLOAD_KEY_ALIAS`
- `BESREHBER_UPLOAD_KEY_PASSWORD`

İstersen bu değerleri `signing.properties` yerine ortam değişkeni olarak da verebilirsin.

## Release Çıktısı

Android Studio ile:

1. `Build > Generate Signed Bundle / APK` seç.
2. `Android App Bundle` ya da `APK` seç.
3. `signing.properties` içindeki bilgilerle devam et.

Komut satırı ile wrapper geldikten sonra tipik akış:

```bash
./gradlew bundleRelease
./gradlew assembleRelease
```

Beklenen çıktılar:

- `app/build/outputs/bundle/release/`
- `app/build/outputs/apk/release/`

## Not

Bu ortamda Java ve Gradle tam kurulu olmadığı için burada APK üretilmedi.
Proje dosyaları buna rağmen Android Studio içinde açılacak şekilde hazırlandı.
Gradle wrapper da bu yüzden burada üretilmedi.
