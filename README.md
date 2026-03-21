# BESRehber

BESRehber, bireysel emeklilik ve sigorta şirketlerini kutulu bir rehber yapısında sunan statik bir web projesidir.

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

## Yerelde Açma

Projeyi bir statik sunucu ile açabilirsiniz.

Basit bir örnek:

```bash
python3 -m http.server 4174
```

Ardından şu adresi açın:

```text
http://127.0.0.1:4174/web/#anasayfa
```

## GitHub

Proje deposu:

[https://github.com/0x5864/Besrehber](https://github.com/0x5864/Besrehber)
