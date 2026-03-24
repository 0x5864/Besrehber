# BESRehber

BESRehber, bireysel emeklilik ve sigorta şirketlerini kutulu bir rehber yapısında sunan statik bir web projesidir.

Bu proje, şirket logolarını ana sayfada bir dizin gibi gösterir. Her şirket kartı kendi detay sayfasına gider. Detay sayfalarında emeklilik planları ve sigorta ürünleri kutular halinde listelenir.

## İçerik

- Şirket logoları ile ana sayfa dizini
- Her şirket için ayrı detay sayfası
- Emeklilik planları ve sigorta ürün kutuları
- Resmi site, başvuru ve inceleme bağlantıları

## Proje Yapısı

- `web/index.html`: Ana sayfa
- `web/sirket.html`: Ortak şirket detay sayfası
- `companies.js`: Şirket ve ürün verileri
- `detail.js`: Şirket detay sayfası işleyişi
- `main.js`: Ana sayfa işleyişi
- `styles.css`: Tüm stil dosyası
- `assets/`: Logo ve görsel dosyaları
- `android/`: Native Android kabuğu

## Özellikler

- Kutulu ana sayfa şirket dizini
- Şirket bazlı ayrı detay sayfaları
- `Başvur` ve `İncele` bağlantıları
- Resmi sitelerden derlenen ürün kutuları
- Tek stil dosyası ile sade yönetim

## Yerelde Açma

Projeyi bir statik sunucu ile açabilirsiniz.

Basit bir örnek:

```bash
python3 -m http.server 4174
```

Ardından şu adresi açın:

```text
http://127.0.0.1:4174/web/#anasayfa

## Android Uygulaması

Native Android kabuğu `android/` klasöründedir.

Web dosyalarını Android içine kopyalamak için şu komutu çalıştırın:

```bash
./scripts/sync-android-assets.sh
```

Daha sonra `android/` klasörünü Android Studio ile açın.
```

## Geliştirme Notu

- Şirket verileri `companies.js` içinde tutulur.
- Yeni şirket eklerken aynı veri yapısı kullanılmalıdır.
- Logo boyutları ana sayfa ve detay sayfasında ayrı ayrı ayarlanabilir.

## Ekran Görüntüsü

İstersen bu bölüme daha sonra proje ekran görüntüsü eklenebilir.

## GitHub

Proje deposu:

[https://github.com/0x5864/Besrehber](https://github.com/0x5864/Besrehber)
