/**
 * Sirket kartlari ve detay sayfalari icin ortak veri kaynagi.
 */
export const companies = [
  {
    slug: "allianz-hayat-ve-emeklilik",
    name: "Allianz Hayat ve Emeklilik AŞ",
    url: "https://www.allianz.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/ballianz.png",
    detailImageClass: "is-allianz-detail-smaller",
    planSourceUrl:
      "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari.html",
    sharedPlanNote: "%30 devlet katkısı",
    plans: [
      {
        title: "Bireysel Emeklilik Planı",
        description:
          "Devlet katkısı ve farklı avantajlarla bireysel emekliliğinizi başlatabilirsiniz.",
        middleNote: "En düşük aylık katkı payı: 1.500 TL",
        applyUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/bireysel-emeklilik-plani.html",
        detailUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/bireysel-emeklilik-plani.html",
      },
      {
        title: "18 Yaş Altına Bireysel Emeklilik",
        description:
          "18 yaşından küçükler için uzun vadeli birikim ve ayrıcalık sunar.",
        middleNote: "En düşük aylık katkı payı: 900 TL",
        applyUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/18-yas-altina-bireysel-emeklilik.html",
        detailUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/18-yas-altina-bireysel-emeklilik.html",
      },
      {
        title: "Premium Bireysel Emeklilik Planı",
        description:
          "Başlangıç fonu ile yüksek tutarda birikim hedefleyenler için tasarlanmıştır.",
        middleNote: "En düşük aylık katkı payı: 900 TL",
        applyUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/premium-bireysel-emeklilik-plani.html",
        detailUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/premium-bireysel-emeklilik-plani.html",
      },
      {
        title: "Safran Bireysel Emeklilik Planı",
        description:
          "Özel avantajlar ve danışmanlık desteğiyle premium plan yapısı sunar.",
        middleNote: "En düşük aylık katkı payı: 900 TL",
        applyUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/safran-bireysel-emeklilik-plani.html",
        detailUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/safran-bireysel-emeklilik-plani.html",
      },
      {
        title: "Mercan Bireysel Emeklilik Planı",
        description:
          "Özel tasarlanmış avantajlarla geleceğinize güçlü bir yatırım sunar.",
        middleNote: "En düşük aylık katkı payı: 2.600 TL",
        applyUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/mercan-bireysel-emeklilik-plani.html",
        detailUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-emeklilik/bireysel-emeklilik-planlari/mercan-bireysel-emeklilik-plani.html",
      },
    ],
    extraSections: [
      {
        title: "Sağlık Sigortaları",
        sourceUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari.html",
        items: [
          {
            title: "Tamamlayıcı Sağlık Sigortası",
            description:
              "SGK anlaşmalı özel sağlık kurumlarında ek ücret ödemeden hizmet almanızı sağlar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/tamamlayici-saglik-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/tamamlayici-saglik-sigortasi.html",
          },
          {
            title: "Modüler Sağlık Sigortası",
            description:
              "İhtiyaç ve bütçenize göre modüller seçerek kendi paketinizi oluşturmanızı sağlar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/moduler-saglik-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/moduler-saglik-sigortasi.html",
          },
          {
            title: "Dijital Doktorum Sigortası",
            description:
              "Doktor, psikolog ve diyetisyenlerle online görüşme ve acil durum desteği sunar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/dijital-doktorum-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/dijital-doktorum-sigortasi.html",
          },
          {
            title: "Yarınlara Umut Sigortası",
            description:
              "Kanser, kalp krizi ve benzeri kritik hastalıklara karşı toplu maddi destek sağlar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/yarinlara-umut-sigotasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/yarinlara-umut-sigotasi.html",
          },
          {
            title: "Moral Destek Sigortası",
            description:
              "Kanser teşhisi durumunda nakit destek sağlayan sağlık sigortası çözümüdür.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/moral-destek-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/moral-destek-sigortasi.html",
          },
          {
            title: "Yabancı Sağlık Sigortası",
            description:
              "Türkiye'de ikamet edecek yabancılar için asgari teminat yapısını karşılar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/yabanci-saglik-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/ozel-saglik-sigortalari/yabanci-saglik-sigortasi.html",
          },
        ],
      },
      {
        title: "Hayat Sigortaları",
        sourceUrl:
          "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari.html",
        items: [
          {
            title: "Yaşamaya Değer Sigortası USD",
            description:
              "USD cinsinden prim ödeme ve dövize endeksli sadakat ikramiyesi sunar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/yasamaya-deger-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/yasamaya-deger-sigortasi.html",
          },
          {
            title: "Yaşamaya Değer Sigortası TL",
            description:
              "TL prim ödeme imkanı ve yatırım sepetiyle orta-uzun vadeli hayat sigortası sunar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/yasamaya-deger-sigortasi-tl.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/yasamaya-deger-sigortasi-tl.html",
          },
          {
            title: "Her An Yanında Sigortası",
            description:
              "Vefat, maluliyet, kritik hastalık ve ameliyat teminatlarını bir arada sunar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/her-an-yaninda-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/her-an-yaninda-sigortasi.html",
          },
          {
            title: "Yıllık Hayat Sigortası",
            description:
              "Vefat, maluliyet ve kritik hastalıklara karşı yıllık yenilenebilir koruma sağlar.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/yillik-hayat-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/yillik-hayat-sigortasi.html",
          },
          {
            title: "Geri Ödeyen Sigortası",
            description:
              "Süre sonunda prim iadesi sağlayan ve sevdiklerinizi güvence altına alan hayat sigortasıdır.",
            applyUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/geri-odeyen-sigortasi.html",
            detailUrl:
              "https://www.allianz.com.tr/tr_TR/urunler/bireysel-hayat-sigortalari/geri-odeyen-sigortasi.html",
          },
        ],
      },
    ],
  },
  {
    slug: "anadolu-hayat-emeklilik",
    name: "Anadolu Hayat Emeklilik AŞ",
    url: "https://www.anadoluhayat.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/ahe-transparent.png",
    applyUrl:
      "https://www.anadoluhayat.com.tr/online-satis/basvuru/genc-emeklilik-plani",
    planSourceUrl: "https://www.anadoluhayat.com.tr/bireysel-emeklilik",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        badge: "Öne Çıkan",
        title: "Genç Emeklilik Planı",
        description: "18-25 yaş arasındaki gençler için.",
        middleNote: "En düşük aylık katkı payı: 1.000 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/genc-emeklilik-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/21-genc-emeklilik-plan-d@3x.png",
      },
      {
        badge: "Yeni",
        title: "Çocuğum için BES",
        description: "Çocuğum hayata bir adım önde başlasın diyenler için.",
        middleNote: "En düşük aylık katkı payı: 1.000 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/cocugum-icin-bes",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/52-cocuk-bes-d@3x.png",
      },
      {
        badge: "Öne Çıkan",
        title: "Geleceğe Yatırım Planı",
        description: "Geleceğini bugünden planlayanlar için.",
        middleNote: "En düşük aylık katkı payı: 1.750 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/gelecege-yatirim-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/26-gelecege-yat-r-m-plan-d.png",
      },
      {
        badge: "Öne Çıkan",
        title: "Ev Hanımları Emeklilik Planı",
        description:
          "Sosyal güvencesi olmayan veya geleceğine yatırım yapmak isteyen kadınlar için.",
        middleNote: "En düşük aylık katkı payı: 1.500 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/ev-hanimlari-emeklilik-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/25-ev-han-mlar-emeklilik-plan-d@3x.png",
      },
      {
        badge: "Yeni",
        title: "Bes Prime Emeklilik Planı",
        description: "Yüksek tutarlarda birikim hedefleyenler için.",
        middleNote: "En düşük aylık katkı payı: 13.000 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/bes-prime-emeklilik-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/30-usta-emeklilik-plan-d@3x.png",
      },
      {
        title: "Anında BES",
        description:
          "Sadece 5 dakikada dijital ortamdan kolayca ürün satın almak isteyenler için.",
        middleNote: "En düşük aylık katkı payı: 1.000 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/aninda-bes-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/21-aninda-bes-plan-d@3x.png",
      },
      {
        badge: "Katılım",
        title: "Geleceğe Yatırım Katılım Planı",
        description: "Faize duyarlı katılımcılar için.",
        middleNote: "En düşük aylık katkı payı: 1.750 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/gelecege-yatirim-katilim-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/26-gelecege-yat-r-m-plan-d.png",
      },
      {
        badge: "Katılım",
        title: "Ev Hanımları Katılım Planı",
        description:
          "Geleceğine yatırım yapmak isteyen kadın katılımcılar için.",
        middleNote: "En düşük aylık katkı payı: 1.500 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/ev-hanimlari-katilim-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/25-ev-han-mlar-emeklilik-plan-d@3x.png",
      },
      {
        badge: "Yeni",
        title: "Esnafa Özel Emeklilik Planı",
        description: "Esnaflar ve aileleri için.",
        middleNote: "En düşük aylık katkı payı: 1.100 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/esnafa-ozel-emeklilik-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/53-esnafa-ozel-d@3x.jpg",
      },
      {
        title: "Çiftçilere Özel Emeklilik Planı",
        description: "Çiftçiler ve aileleri için.",
        middleNote: "En düşük aylık katkı payı: 1.100 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/ciftcilere-ozel-emeklilik-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/23-ciftcilere-ozel-emeklilik-plan-d@3x.png",
      },
      {
        title: "Doktorlara Özel Grup Emeklilik Planı",
        description: "Doktorlar ve aileleri için.",
        middleNote: "En düşük aylık katkı payı: 1.900 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/doktorlara-ozel-grup-emeklilik",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/24-doktorlara-ozel-grup-emeklilik-plan-d@3x.png",
      },
      {
        title: "Türk Eczacıları Birliği Emeklilik Planı",
        description: "Türk Eczacıları Birliği üyeleri ve aileleri için.",
        middleNote: "En düşük aylık katkı payı: 1.500 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/turk-eczacilari-birligi-emeklilik-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/28-turk-eczac-lar-birligi-emeklilik-plan-d@3x.png",
      },
      {
        title: "TSK Mensupları Emeklilik Planı",
        description: "TSK mensupları ve aileleri için.",
        middleNote: "En düşük aylık katkı payı: 1.900 TL",
        detailUrl:
          "https://www.anadoluhayat.com.tr/bireysel-emeklilik/urunlerimiz/tsk-mensuplari-emeklilik-plani",
        imageSrc:
          "https://www.anadoluhayat.com.tr/Covers/desktop-pages/29-tsk-mensuplar-emeklilik-plan-d@3x.png",
      },
      {
        title: "Kurumlara Özel Planlarımız",
        description: "Çalışanlarının refahını gözeten kurumlara özel.",
      },
    ],
    extraSections: [
      {
        title: "Çocuk Sigortaları",
        sourceUrl: "https://www.anadoluhayat.com.tr/urunlerimiz",
        items: [
          {
            title: "Çocuğum için Eğitim Sigortası",
            description:
              "Çocuğumun eğitimi hiçbir koşulda kesintiye uğramasın diyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/online-satis/basvuru/cocugum-icin-egitim-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/cocugum-icin-egitim-sigortasi",
          },
          {
            title: "Çocuğum için Yatırım Sigortası",
            description:
              "Çocuğunun geleceğini bugünden planlayanlar için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/cocugum-icin-yatirim-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/cocugum-icin-yatirim-sigortasi",
          },
        ],
      },
      {
        title: "Kritik Hastalık Sigortaları",
        sourceUrl: "https://www.anadoluhayat.com.tr/urunlerimiz",
        items: [
          {
            title: "Kadına Özel Kritik Hastalık Sigortası",
            description:
              "Kadınlara özgü hastalıklarda toplu para güvencesi isteyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/online-satis/basvuru/kadina-ozel-kritik-hastalik-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kadina-ozel-kritik-hastalik-sigortasi",
          },
          {
            title: "Tam Kapsamlı Kritik Hastalık Sigortası",
            description:
              "Yaşam kaybı veya tam ve kalıcı sakatlık durumlarına karşı finansal güvence arayanlar için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/tam-kapsamli-kritik-hastalik-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/tam-kapsamli-kritik-hastalik-sigortasi",
          },
          {
            title: "Standart Kritik Hastalık Sigortası",
            description:
              "En sık rastlanan 5 kritik hastalığa özel teminat arayanlar için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/online-satis/basvuru/standart-kritik-hastalik-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/standart-kritik-hastalik-sigortasi",
          },
        ],
      },
      {
        title: "Hayat Sigortaları",
        sourceUrl: "https://www.anadoluhayat.com.tr/urunlerimiz",
        items: [
          {
            title: "Herkese Hayat Sigortası",
            description:
              "Yüksek vergi avantajı ile birikim yapmak isteyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/herkese-hayat-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/herkese-hayat-sigortasi",
          },
          {
            title: "Teminatlı Birikim Sigortası",
            description: "Hem teminat hem birikim isteyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/teminatli-birikim-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/teminatli-birikim-sigortasi",
          },
          {
            title: "Prim İadeli Hayat Sigortası",
            description:
              "Hem risklere karşı korunmak hem de sigorta süresi sonunda ödediği primleri geri almak isteyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/prim-iadeli-hayat-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/prim-iadeli-hayat-sigortasi",
          },
          {
            title: "Tam Kapsamlı Hayat Sigortası",
            description:
              "Yaşam kaybı veya tam ve kalıcı sakatlık durumlarına karşı finansal güvence arayanlar için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/online-satis/basvuru/tam-kapsamli-hayat-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/tam-kapsamli-hayat-sigortasi",
          },
          {
            title: "Gelir Sigortası",
            description: "Ömür boyu gelir güvencesi isteyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/gelir-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/gelir-sigortasi",
          },
          {
            title: "Planlı Gelir Sigortası",
            description: "Ömür boyu gelir güvencesi isteyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/planli-gelir-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/planli-gelir-sigortasi",
          },
          {
            title: "Kredi Hayat Sigortası",
            description:
              "Bireysel kredi borçları, yaşam kaybı durumunda aileme yük olmasın diyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kredi-baglantili-hayat-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kredi-baglantili-hayat-sigortasi",
          },
          {
            title: "Ticari Kredi Hayat Sigortası",
            description:
              "Ticari kredi borçları, yaşam kaybı durumunda geride kalanlara yük olmasın diyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/ticari-kredi-hayat-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/ticari-kredi-hayat-sigortasi",
          },
          {
            title: "Ticari Hayat Sigortası",
            description:
              "Yaşam kaybı durumunda borçlarının yakınlarına kalmasını istemeyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/ticari-hayat-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/ticari-hayat-sigortasi",
          },
          {
            title: "Kartıma Hayat Sigortası",
            description:
              "Yaşam kaybı durumunda, kredi kartı borçlarının sevdiklerine yük olmasını istemeyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kartima-hayat-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kartima-hayat-sigortasi",
          },
          {
            title: "İş'te Çiftçi Hayat Sigortası",
            description:
              "Türkiye İş Bankası İmece Kart sahibi kişiler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/iste-ciftci-hayat-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/iste-ciftci-hayat-sigortasi",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl: "https://www.anadoluhayat.com.tr/urunlerimiz",
        items: [
          {
            title: "Bireylere Yönelik Ferdi Kaza Sigortaları",
            description:
              "Kazalara karşı kendini ve sevdiklerini güvence altına almak isteyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/online-satis/basvuru/ferdi-kaza-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/ferdi-kaza-sigortasi",
          },
        ],
      },
      {
        title: "Finansal Destek Sigortaları",
        sourceUrl: "https://www.anadoluhayat.com.tr/urunlerimiz",
        items: [
          {
            title: "Kredi Destek Sigortası",
            description:
              "İşsizlik durumunda bireysel kredi borçlarım ödensin diyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kredi-destek-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kredi-destek-sigortasi",
          },
          {
            title: "Kredi Kartı Destek Sigortası",
            description:
              "İşsizlik durumunda kredi kartı borçlarım ödensin diyenler için.",
            applyUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kredi-karti-destek-sigortasi",
            detailUrl:
              "https://www.anadoluhayat.com.tr/urunlerimiz/kredi-karti-destek-sigortasi",
          },
        ],
      },
    ],
  },
  {
    slug: "agesa-hayat-ve-emeklilik",
    name: "AgeSa Hayat ve Emeklilik AŞ",
    url: "https://www.agesa.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/agesa.svg",
    homeImageClass: "is-agesa-home-smaller",
    detailImageClass: "is-agesa-detail-smaller",
    planSourceUrl: "https://www.agesa.com.tr/bireysel-emeklilik-bes-planlarimiz",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "Biriktiren Gelecek Planı",
        description:
          "Düzenli ödemelerle uzun vadeli birikim yapmak isteyenler için.",
        middleNote: "En düşük aylık katkı payı: 1.000 TL",
        detailUrl: "https://www.agesa.com.tr/bes/emeklilik-planlarimiz/biriktiren-gelecek",
      },
      {
        title: "Emekliliğe Yatırım Planı",
        description:
          "Akbank şubeleri ve Akbank Mobil üzerinden başlatılabilen emeklilik planı.",
        middleNote: "En düşük aylık katkı payı: 1.300 TL",
        detailUrl:
          "https://www.agesa.com.tr/bes/emeklilik-planlarimiz/emeklilige-yatirim-plani",
      },
      {
        title: "Biriktiren VIP Planı",
        description:
          "Başlangıç katkı payı ile avantajlı koşullarda daha hızlı birikim hedefleyenler için.",
        middleNote: "En düşük aylık katkı payı: 3.000 TL",
        detailUrl:
          "https://www.agesa.com.tr/bes/emeklilik-planlarimiz/biriktiren-vip-plani",
      },
      {
        title: "Prestijli Emekliliğe Yatırım Planı",
        description:
          "Başlangıç katkı payı ile prestijli ve yüksek tutarlı birikim hedefleyenler için.",
        middleNote: "En düşük aylık katkı payı: 3.000 TL",
        detailUrl:
          "https://www.agesa.com.tr/bes/emeklilik-planlarimiz/prestijli-emeklilige-yatirim-plani",
      },
      {
        title: "Emeklilik Gelir Planı",
        description:
          "Birikim döneminden gelir dönemine geçişi planlamak isteyenler için.",
        detailUrl:
          "https://www.agesa.com.tr/bes/emeklilik-planlarimiz/emeklilik-gelir-plani",
      },
    ],
    extraSections: [
      {
        title: "Hayat Sigortaları",
        sourceUrl: "https://www.agesa.com.tr/hayat-sigortalari",
        items: [
          {
            title: "Kredim Güvende Sigortası",
            description:
              "Kredi borcunuzun ailenize yük olmaması için güvence sunar.",
            detailUrl:
              "https://www.agesa.com.tr/hayat-sigortasi/kredim-guvende-sigortasi",
          },
          {
            title: "VIP Hayat Sigortası",
            description:
              "Yüksek teminat ve birikim hedefleyenler için hayat sigortası çözümüdür.",
            detailUrl:
              "https://www.agesa.com.tr/hayat-sigortasi/hayat-sigortalarimiz/vip-hayat-sigortasi",
          },
          {
            title: "Hayata Yatırım Sigortası",
            description:
              "Hayat sigortası korumasını birikim hedefiyle birleştirmek isteyenler için.",
            detailUrl: "https://www.agesa.com.tr/tr/hayata-yatirim-sigortasi",
          },
          {
            title: "Her İhtimalin Sigortası",
            description:
              "Beklenmedik risklere karşı kapsamlı koruma arayanlar için.",
            detailUrl: "https://www.agesa.com.tr/her-ihtimalin-sigortasi",
          },
        ],
      },
      {
        title: "Tamamlayıcı Sağlık Sigortası",
        sourceUrl: "https://www.agesa.com.tr/tamamlayici-saglik-sigortasi",
        items: [
          {
            title: "Tamamlayıcı Sağlık Sigortası",
            description:
              "Özel sağlık kurumlarında ek ücret yükünü azaltan sağlık güvencesi sunar.",
            detailUrl: "https://www.agesa.com.tr/tamamlayici-saglik-sigortasi",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl: "https://www.agesa.com.tr/ferdi-kaza-sigortalari",
        items: [
          {
            title: "Avantaj Plus Ferdi Kaza Sigortası",
            description:
              "Kaza sonucu oluşabilecek risklere karşı ek hizmetlerle koruma sağlar.",
            detailUrl:
              "https://www.agesa.com.tr/ferdi-kaza-sigortasi/ferdi-kaza-sigortalarimiz/avantaj-plus-ferdi-kaza-sigortasi",
          },
          {
            title: "Akbank Ferdi Kaza Sigortası",
            description:
              "Beklenmedik kazalara karşı finansal güvence arayanlar için hazırlanmıştır.",
            detailUrl:
              "https://www.agesa.com.tr/ferdi-kaza-sigortasi/ferdi-kaza-sigortalarimiz/akbank-ferdi-kaza-sigortasi",
          },
        ],
      },
    ],
  },
  {
    slug: "axa-hayat-ve-emeklilik",
    name: "Axa Hayat ve Emeklilik AŞ",
    url: "https://www.axahayatemeklilik.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/axa-download-transparent.png",
    imageClass: "is-double",
    planSourceUrl: "https://www.axahayatemeklilik.com.tr/emeklilik-planlari",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "Destek Emeklilik Planı",
        description:
          "18 yaş üstü katılımcılar için temel birikim ve düzenli tasarruf planıdır.",
        middleNote: "En düşük aylık katkı payı: 1.000 TL",
        applyUrl: "https://www.axahayatemeklilik.com.tr/kotasyon/bes/bilgiler",
        detailUrl:
          "https://www.axahayatemeklilik.com.tr/emeklilik-planlari/bireysel-emeklilik/destek-emeklilik-plani",
      },
      {
        title: "Artı Emeklilik Planı",
        description:
          "Daha yüksek katkı payıyla ek değer yaratmak isteyenler için tasarlanmıştır.",
        middleNote: "En düşük aylık katkı payı: 2.000 TL",
        applyUrl: "https://www.axahayatemeklilik.com.tr/kotasyon/bes/bilgiler",
        detailUrl:
          "https://www.axahayatemeklilik.com.tr/emeklilik-planlari/bireysel-emeklilik/arti-emeklilik-plani",
      },
      {
        title: "Özel Emeklilik Planı",
        description:
          "Yüksek katkı payı ile daha hızlı birikim oluşturmak isteyenler için.",
        middleNote: "En düşük aylık katkı payı: 5.000 TL",
        applyUrl: "https://www.axahayatemeklilik.com.tr/kotasyon/bes/bilgiler",
        detailUrl:
          "https://www.axahayatemeklilik.com.tr/emeklilik-planlari/ozel-emeklilik-plani",
      },
      {
        title: "18 Yaş Altı BES Planı",
        description:
          "Çocuklar için daha düşük katkı payıyla gelecek birikimi yapma imkanı sunar.",
        middleNote: "En düşük aylık katkı payı: 750 TL",
        applyUrl: "https://www.axahayatemeklilik.com.tr/kotasyon/bes/bilgiler",
        detailUrl:
          "https://www.axahayatemeklilik.com.tr/emeklilik-planlari/18-yas-alti-cocuklar-icin-bes",
      },
    ],
    extraSections: [
      {
        title: "Hayat Sigortaları",
        sourceUrl: "https://www.axahayatemeklilik.com.tr/hayat-sigortalari",
        items: [
          {
            title: "Yıllık Hayat Sigortası",
            description:
              "Beklenmedik risklere karşı sizin ve ailenizin yaşam standardını korumayı amaçlar.",
            detailUrl:
              "https://www.axahayatemeklilik.com.tr/hayat-sigortalari/yillik-hayat-sigortasi",
          },
          {
            title: "Uzun Süreli Hayat Sigortası",
            description:
              "2 yıldan 10 yıla kadar güvence sunan uzun vadeli hayat sigortasıdır.",
            detailUrl:
              "https://www.axahayatemeklilik.com.tr/hayat-sigortalari/uzun-sureli-hayat-sigortasi",
          },
          {
            title: "Kumbaralı Hayat Sigortası",
            description:
              "Hayat korumasını birikim odaklı yapı ile birleştirmek isteyenler için.",
            detailUrl:
              "https://www.axahayatemeklilik.com.tr/hayat-sigortalari/kumbarali-hayat-sigortasi",
          },
          {
            title: "Eğitim Sigortası",
            description:
              "Çocuğunuzun eğitim planlarını güvence altına almak isteyenler için.",
            detailUrl:
              "https://www.axahayatemeklilik.com.tr/hayat-sigortalari/egitim-sigortasi",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortası",
        sourceUrl: "https://www.axahayatemeklilik.com.tr/hayat-sigortalari/ferdi-kaza-sigortasi",
        items: [
          {
            title: "Ferdi Kaza Sigortası",
            description:
              "Kaza sonucu oluşabilecek vefat ve sakatlık risklerine karşı koruma sağlar.",
            detailUrl:
              "https://www.axahayatemeklilik.com.tr/hayat-sigortalari/ferdi-kaza-sigortasi",
          },
        ],
      },
    ],
  },
  {
    slug: "bereket-emeklilik-ve-hayat",
    name: "Bereket Emeklilik ve Hayat AŞ",
    url: "https://www.bereket.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/bereket-download-transparent.png",
    planSourceUrl: "https://www.bereket.com.tr/urunler/bireysel-emeklilik",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "Ekin Katılım Emeklilik Planı",
        description:
          "Küçük birikimlerle rahat bir emeklilik hedefleyen katılımcılar için.",
        middleNote: "En düşük aylık katkı payı: 200 TL",
        detailUrl:
          "https://www.bereket.com.tr/urunler/bireysel-emeklilik/bireysel-emeklilik-ekin-plan",
      },
      {
        title: "Hasat Katılım Emeklilik Planı",
        description:
          "Aylık 400 TL ve üzeri katkı payı ile birikim yapmak isteyenler için.",
        middleNote: "En düşük aylık katkı payı: 400 TL",
        detailUrl:
          "https://www.bereket.com.tr/urunler/bireysel-emeklilik/bireysel-emeklilik-hasat-plan",
      },
      {
        title: "Genç Hasat Katılım Bireysel Emeklilik Planı",
        description:
          "18 yaş altındaki çocuklar için erken yaşta birikim yapma imkanı sunar.",
        middleNote: "En düşük aylık katkı payı: 200 TL",
        detailUrl:
          "https://www.bereket.com.tr/urunler/bireysel-emeklilik/genc-hasat-katilim-bireysel-emeklilik-plani",
      },
    ],
    extraSections: [
      {
        title: "Hayat Sigortaları",
        sourceUrl: "https://www.bereket.com.tr/urunler/hayat-sigortalari",
        items: [
          {
            title: "Çiftçi Hayat Arkadaşı",
            description:
              "Çiftçilerin ailelerini toplu vefat teminatı ile güvence altına alan üründür.",
            detailUrl:
              "https://www.bereket.com.tr/urunler/hayat-sigortalari/ciftci-hayat-sigortasi",
          },
          {
            title: "Yıllık Hayat",
            description:
              "Beklenmedik risklere karşı sizin ve ailenizin yaşam standardını korumayı amaçlar.",
            detailUrl:
              "https://www.bereket.com.tr/urunler/hayat-sigortalari/yillik-hayat-sigortasi",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl: "https://www.bereket.com.tr/urunler/bereket-ferdi-kaza-sigortasi",
        items: [
          {
            title: "Bereket Ailem Ferdi Kaza Sigortası",
            description:
              "Kaza sonucu vefat ve sürekli sakatlık risklerine karşı güvence sağlar.",
            detailUrl:
              "https://www.bereket.com.tr/urunler/bereket-ferdi-kaza-sigortasi",
          },
        ],
      },
    ],
  },
  {
    slug: "bnp-paribas-cardif-emeklilik",
    name: "BNP Paribas Cardif Emeklilik AŞ",
    url: "https://www.bnpparibascardif.com.tr",
    tags: ["Emeklilik"],
    logoSrc: "../assets/logos/bnpce-transparent.png",
    homeImageClass: "is-bnp-home-smaller",
    imageClass: "is-scale-150",
    planSourceUrl: "https://www.bnpparibascardif.com.tr/urunler/bireysel-emeklilik",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "Dijital BES",
        description:
          "Online kanaldan hızlı başvuru ile BES'e hemen başlamak isteyenler için.",
        middleNote: "En dusuk aylik katki payi: 1.200 TL",
        applyUrl:
          "https://www.bnpparibascardif.com.tr/bireysel-emeklilik/online-satin-al-urunler-collection",
        detailUrl:
          "https://www.bnpparibascardif.com.tr/bireysel-emeklilik/bireysel-emeklilik-avantajlari",
      },
      {
        title: "Anahtar Emeklilik Planı",
        description:
          "Kucuk birikimlerle simdiden BES'e katilmak isteyenler için.",
        middleNote: "En dusuk aylik katki payi: 1.200 TL",
        applyUrl:
          "https://www.bnpparibascardif.com.tr/bireysel-emeklilik/online-satin-al-urunler-collection",
        detailUrl:
          "https://www.bnpparibascardif.com.tr/bireysel-emeklilik/bireysel-kurumsal-planlar",
      },
      {
        title: "Geleceğini BES'le",
        description:
          "18 yas alti cocuklar icin uzun sureli ve istikrarli birikim yapma imkani sunar.",
        middleNote: "En dusuk aylik katki payi: 1.200 TL",
        applyUrl:
          "https://www.bnpparibascardif.com.tr/bireysel-emeklilik/online-satin-al-urunler-collection",
        detailUrl:
          "https://www.bnpparibascardif.com.tr/bireysel-emeklilik/gelecegini-besle",
      },
      {
        title: "Otomatik Katılım Sistemi",
        description:
          "Calisanlari emeklilik donemleri icin birikim yapmaya tesvik eden sistemdir.",
        middleNote: "En dusuk aylik katki payi: 1.200 TL",
        detailUrl:
          "https://www.bnpparibascardif.com.tr/bireysel-emeklilik/otomatik-katilim-sistemi",
      },
    ],
    extraSections: [
      {
        title: "Hayat Sigortaları",
        sourceUrl: "https://www.bnpparibascardif.com.tr/urunler/hayat-sigortasi",
        items: [
          {
            title: "Hayatım Yolunda",
            description:
              "Sizi ve sevdiklerinizi hayatin risklerine karsi guvence altina alir.",
            detailUrl: "https://www.bnpparibascardif.com.tr/urunler/hayat-sigortasi",
          },
          {
            title: "Kazançlı Yarınlar",
            description:
              "Prim iadeli yapisiyla hem guvence hem uzun vadeli geri odeme avantajı sunar.",
            detailUrl: "https://www.bnpparibascardif.com.tr/urunler/hayat-sigortasi",
          },
          {
            title: "Hayatım Güvende",
            description:
              "Yasamsal risklerin yaratacagi finansal zorluklara karsi koruma saglar.",
            detailUrl: "https://www.bnpparibascardif.com.tr/urunler/hayat-sigortasi",
          },
          {
            title: "Geleceğim Güvende",
            description:
              "Vefat veya maluliyet gibi beklenmedik durumlarda yuksek teminat sunar.",
            detailUrl: "https://www.bnpparibascardif.com.tr/urunler/hayat-sigortasi",
          },
          {
            title: "Kadına Değer Hayat Sigortası",
            description:
              "Kadinlara zor zamanlarda finansal destek saglamaya odaklanir.",
            detailUrl: "https://www.bnpparibascardif.com.tr/urunler/hayat-sigortasi",
          },
          {
            title: "Eğitim Geleceğim",
            description:
              "Cocugunun egitim masraflarini uzun vadeli guvence altina almak isteyenler için.",
            detailUrl:
              "https://www.bnpparibascardif.com.tr/hayat-sigortasi/egitim-gelecegim",
          },
        ],
      },
      {
        title: "Koruma Sigortaları",
        sourceUrl: "https://www.bnpparibascardif.com.tr/urunler/koruma-sigortasi",
        items: [
          {
            title: "Çiftçim Güvenli Hayat Kredi Koruma Sigortası",
            description:
              "Tarim segmenti musterileri icin kredi geri odeme risklerine karsi guvence sunar.",
            detailUrl: "https://www.bnpparibascardif.com.tr/koruma-sigortasi",
          },
          {
            title: "Kredi Koruma Hayat Sigortası",
            description:
              "Yasam kaybi, daimi maluliyet ve tehlikeli hastalik durumunda kredi borcunuzu korur.",
            detailUrl: "https://www.bnpparibascardif.com.tr/urunler/koruma-sigortasi",
          },
          {
            title: "Kredi Kartı Koruma Yaşam",
            description:
              "Kredi karti borcunun geri odenmeme riskini kritik durumlara karsi guvence altina alir.",
            detailUrl: "https://www.bnpparibascardif.com.tr/urunler/koruma-sigortasi",
          },
          {
            title: "Uzun Süreli Ticari Kredi Koruma",
            description:
              "Sirket ortaklarini ve ticari kredi surecini finansal risklere karsi korur.",
            detailUrl: "https://www.bnpparibascardif.com.tr/urunler/koruma-sigortasi",
          },
          {
            title: "Kredi Kartı Koruma Hayat",
            description:
              "Kredi karti borcunu vefat, hastalik veya istemdisi issizlik gibi risklere karsi korur.",
            detailUrl:
              "https://www.bnpparibascardif.com.tr/koruma-sigortasi/kredi-karti-koruma-sigortasi",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl: "https://www.bnpparibascardif.com.tr/ferdi-kaza",
        items: [
          {
            title: "Güvenli Çantam",
            description:
              "Kendinizi ve kisisel bilgilerinizi hirsizlik ve dolandiricilik risklerine karsi korur.",
            detailUrl: "https://www.bnpparibascardif.com.tr/ferdi-kaza",
          },
          {
            title: "Kobi Güvencem",
            description:
              "Kaza sonucu vefat, surekli sakatlik ve tedavi masraflarina karsi is yerinizi guvence altina alir.",
            detailUrl: "https://www.bnpparibascardif.com.tr/ferdi-kaza",
          },
          {
            title: "Hayata Değer",
            description:
              "Kaza sonucu olusabilecek risklere karsi sizi ve sevdiklerinizi guvence altina alir.",
            detailUrl: "https://www.bnpparibascardif.com.tr/ferdi-kaza/hayata-deger",
          },
          {
            title: "Ailem Güvende",
            description:
              "Kaza nedeniyle olusabilecek yasam kaybi ve sakatlik risklerine karsi finansal guvence saglar.",
            detailUrl: "https://www.bnpparibascardif.com.tr/ferdi-kaza",
          },
          {
            title: "Güvenli Kimliğim",
            description:
              "Kimlik ve kisisel bilgi hirsizligi gibi risklere karsi ek koruma saglar.",
            detailUrl: "https://www.bnpparibascardif.com.tr/ferdi-kaza",
          },
        ],
      },
    ],
  },
  {
    slug: "hdi-fiba-emeklilik-ve-hayat",
    name: "HDI Fiba Emeklilik ve Hayat A.Ş.",
    url: "https://www.hdifibaemeklilik.com.tr/",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/hdi-download.png",
    planSourceUrl:
      "https://www.hdifibaemeklilik.com.tr/bireysel-emeklilik/bireysel-emeklilik-planlar%C4%B1m%C4%B1z",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "Gelecek Net Bireysel Emeklilik Planı",
        description:
          "18 yasindan kucuklere BES icin ozel tasarlanmis plan yapisidir.",
        middleNote: "En dusuk aylik katki payi: 500 TL",
        detailUrl:
          "https://www.hdifibaemeklilik.com.tr/bireysel-emeklilik/bireysel-emeklilik-planlar%C4%B1m%C4%B1z",
      },
      {
        title: "1009 Bireysel Emeklilik Planı",
        description:
          "Kucuk odemelerle gelecegi icin bugunden birikim yapmak isteyenler icin.",
        middleNote: "En dusuk aylik katki payi: 500 TL",
        detailUrl:
          "https://www.hdifibaemeklilik.com.tr/bireysel-emeklilik/bireysel-emeklilik-planlari/1009",
      },
      {
        title: "2040-1 Bireysel Emeklilik Planı",
        description:
          "Dusuk aylik odemelerle birikime baslamak ve %30 devlet katkisi avantajindan yararlanmak isteyenler için.",
        middleNote: "En dusuk aylik katki payi: 150 TL",
        detailUrl:
          "https://www.hdifibaemeklilik.com.tr/bireysel-emeklilik/bireysel-emeklilik-planlari/2040-1",
      },
      {
        title: "2040-2 Bireysel Emeklilik Planı",
        description:
          "Yonetim gider kesintisiz yapida orta olcekli birikim hedefleyenler için.",
        middleNote: "En dusuk aylik katki payi: 1.000 TL",
        detailUrl:
          "https://www.hdifibaemeklilik.com.tr/bireysel-emeklilik/bireysel-emeklilik-planlari/2040-2",
      },
      {
        title: "2040-3 Bireysel Emeklilik Planı",
        description:
          "Daha yuksek tutarlarla kesintisiz birikim yapmak isteyenler için.",
        middleNote: "En dusuk aylik katki payi: 2.500 TL",
        detailUrl:
          "https://www.hdifibaemeklilik.com.tr/bireysel-emeklilik/bireysel-emeklilik-planlari/2040-3",
      },
    ],
    extraSections: [
      {
        title: "Hayat Sigortaları",
        sourceUrl:
          "https://www.hdifibaemeklilik.com.tr/satin-al/hayat-sigortasi-urunlerimiz",
        items: [
          {
            title: "Kredi Hayat",
            description:
              "Kredi kullananlar icin vefat ve kaza sonucu maluliyet teminatlarini bir araya getirir.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/hayat-sigortasi/kredili/kredi",
          },
          {
            title: "Mutlak Eğitim Plus",
            description:
              "Cocugunun egitim giderlerini vefat ve kaza sonucu maluliyet risklerine karsi korur.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/hayat-sigortasi/egitim-sigortasi/mutlak-plus",
          },
          {
            title: "Yıllık Hayat",
            description:
              "Yillik sureli vefat teminatiyla temel hayat guvencesi arayanlar için.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/satin-al/hayat-sigortasi-urunlerimiz",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl:
          "https://www.hdifibaemeklilik.com.tr/satin-al/hayat-sigortasi-urunlerimiz",
        items: [
          {
            title: "Fibalı Ferdi Kaza",
            description:
              "Kaza sonucu vefat ve tedavi masraflarina karsi farkli teminat paketleri sunar.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/satin-al/hayat-sigortasi-urunlerimiz",
          },
          {
            title: "Yaşam Destek",
            description:
              "Kaza sonucu vefat teminati ile birlikte konut ve saglik asistans hizmetleri sunar.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/hayat-sigortasi/ferdi-kaza-sigortalari/yasam-destek",
          },
          {
            title: "Yaşam Destek Plus",
            description:
              "Yasam Destek paketine ek olarak kaza sonucu daimi maluliyet teminati da sunar.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/hayat-sigortasi/ferdi-kaza-sigortalari/yasam-destek",
          },
          {
            title: "Fibalı Yaşam",
            description:
              "Kaza sonucu maluliyet ve vefat teminatlarini asistans hizmetleriyle birlestirir.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/hayat-sigortasi/ferdi-kaza-sigortalari/fibali-yasam",
          },
          {
            title: "Fibalı Yaşam Plus",
            description:
              "Daha yuksek teminat ve ek asistans hizmetleri isteyenler için gelistirilmis pakettir.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/hayat-sigortasi/ferdi-kaza-sigortalari/fibali-yasam",
          },
          {
            title: "Fibalı Yaşam VIP",
            description:
              "VIP seviyede teminat ve seyahat, ambulans, check-up destekleri sunar.",
            detailUrl:
              "https://www.hdifibaemeklilik.com.tr/hayat-sigortasi/ferdi-kaza-sigortalari/fibali-yasam",
          },
        ],
      },
    ],
  },
  {
    slug: "garanti-emeklilik-ve-hayat",
    name: "Garanti Emeklilik ve Hayat AŞ",
    url: "https://www.garantibbvaemeklilik.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/gbbva-from-jpg-transparent.png",
    planSourceUrl: "https://www.garantibbvaemeklilik.com.tr/bireysel-emeklilik-planlarimiz",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "DijiBES Emeklilik Planı",
        description:
          "Dijital kanallar uzerinden hizli basvuru ile BES'e katilmak isteyenler icin.",
        middleNote: "En dusuk aylik katki payi: 1.000 TL",
        detailUrl: "https://www.garantibbvaemeklilik.com.tr/bes-dijibes-plan",
      },
      {
        title: "Kazançlı Plan",
        description:
          "Yuksek tutarli aylik katki ile birikimini buyutmek isteyenler icin.",
        middleNote: "En dusuk aylik katki payi: 13.110 TL",
        detailUrl: "https://www.garantibbvaemeklilik.com.tr/bes-kazancli-plan",
      },
      {
        title: "Avantajlı BES Planı",
        description:
          "Daha dusuk tutarlarla bugunden birikim yapmaya baslamak isteyenler icin.",
        middleNote: "En dusuk aylik katki payi: 1.315 TL",
        detailUrl: "https://www.garantibbvaemeklilik.com.tr/bes-pratik-plan",
      },
      {
        title: "Prestige Plan",
        description:
          "Daha dusuk kesintiyle prestijli bir emeklilik birikimi hedefleyenler için.",
        middleNote: "En dusuk aylik katki payi: 6.620 TL",
        detailUrl: "https://www.garantibbvaemeklilik.com.tr/bes-prestige-plan",
      },
      {
        title: "Select Plan",
        description:
          "Sifir kesinti avantaji ile daha cok birikim hedefleyenler icin.",
        middleNote: "En dusuk aylik katki payi: 13.110 TL",
        detailUrl: "https://www.garantibbvaemeklilik.com.tr/bes-select-plan",
      },
      {
        title: "Maksimum Devlet Katkılı BES Plus Planı",
        description:
          "Devlet katkisi ust limitinden daha fazla yararlanmak isteyenler icin tasarlanmistir.",
        middleNote: "En dusuk aylik katki payi: 33.030 TL",
        detailUrl:
          "https://www.garantibbvaemeklilik.com.tr/maksimum-devlet-katkili-bes-plus-plani",
      },
      {
        title: "Çocuklara Avantajlı BES Planı",
        description:
          "Cocuklar icin uzun vadeli birikim yapma avantaji sunar.",
        middleNote: "En dusuk aylik katki payi: 985 TL",
        detailUrl: "https://www.garantibbvaemeklilik.com.tr/cocuklara-bes-plani",
      },
    ],
    extraSections: [
      {
        title: "Hayat Sigortaları",
        sourceUrl: "https://www.garantibbvaemeklilik.com.tr/hayat-sigortasi-urunlerimiz",
        items: [
          {
            title: "Prim İadeli Hayat Sigortası",
            description:
              "Sure sonunda risk gerceklesmezse odediginiz primlerin tamamini geri alma imkani sunar.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/prim-iadeli-hayat-sigortasi",
          },
          {
            title: "Kazançlı Yaşam Sigortası",
            description:
              "Hayat guvencesini birikim odakli yapiyla birlestirmek isteyenler icin.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/kazancli-yasam-sigortasi",
          },
          {
            title: "Kritik Hastalıklar Sigortası",
            description:
              "Belirli kritik hastaliklara karsi finansal destek sunar.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/kritik-hastaliklar-hayat-sigortasi",
          },
          {
            title: "Ameliyat Sigortası",
            description:
              "Belirli ameliyat risklerine karsi guvence arayanlar icin.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/ameliyat-sigortasi",
          },
          {
            title: "Uzun Süreli Hayat Sigortası",
            description:
              "Daha uzun vadeli hayat guvencesi isteyenler icin tasarlanmistir.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/hayatim-garantide-hayat-sigortasi",
          },
          {
            title: "Eğitim Sigortası",
            description:
              "Cocugunuzun egitim planlarini korumaya yonelik sigorta cozumu sunar.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/egitim-sigortasi",
          },
        ],
      },
      {
        title: "Tamamlayıcı Sağlık Sigortası",
        sourceUrl:
          "https://www.garantibbvaemeklilik.com.tr/tamamlayici-saglik-sigortasi-planlari",
        items: [
          {
            title: "Tamamlayıcı Sağlık Sigortası",
            description:
              "Kendiniz veya sevdikleriniz icin saglik hizmetlerinde ek guvence sunar.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/tamamlayici-saglik-sigortasi-planlari",
          },
          {
            title: "Çocuklara Tamamlayıcı Sağlık Sigortası",
            description:
              "Cocuklar icin de gecerli plan secenekleriyle saglik guvencesi saglar.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/tamamlayici-saglik-sigortasi-planlari",
          },
          {
            title: "Grup Tamamlayıcı Sağlık Sigortası",
            description:
              "Toplu yapilar icin saglik sigortasi cozumleri sunar.",
            detailUrl:
              "https://www.garantibbvaemeklilik.com.tr/grup-tamamlayici-saglik-sigortasi-nedir",
          },
        ],
      },
    ],
  },
  {
    slug: "katilim-emeklilik-ve-hayat",
    name: "Katılım Emeklilik ve Hayat AŞ",
    url: "https://www.katilimemeklilik.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/ke-transparent.png",
    planSourceUrl:
      "https://www.katilimemeklilik.com.tr/urunler/tum-urunler/bireysel",
    sharedPlanNote: "%30 devlet katkısı",
    plans: [
      {
        title: "Erken BES Planı",
        description:
          "18 yaşın altındaki çocukların gelecek hayalleri için bugün adım atın.",
        middleNote: "En düşük aylık katkı payı: 800 TL",
        applyUrl: "https://marketim.katilimemeklilik.com.tr/urunler/market/erkenbes",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/erken-bes-plani",
      },
      {
        title: "Pratik Emeklilik Planı",
        description:
          "Bugün birikime başlayın, emeklilikte keyfini yaşayın.",
        middleNote: "En düşük aylık katkı payı: 800 TL",
        applyUrl:
          "https://marketim.katilimemeklilik.com.tr/urunler/market/pratikbes",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/pratik-emeklilik-plani",
      },
      {
        title: "Rahat Emeklilik Planı",
        description:
          "Azar azar biriktirin, emekliliğinizde bol bol harcayın.",
        middleNote: "En düşük aylık katkı payı: 1.000 TL",
        applyUrl:
          "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Rahat%20Emeklilik%20Plan%C4%B1",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/rahat-emeklilik-plani",
      },
      {
        title: "Faizsiz Emeklilik Gelir Planı",
        description: "Emekliliğinizi şimdi planlayın.",
        applyUrl:
          "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Faizsiz%20Emeklilik%20Gelir%20Plan%C4%B1",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/faizsiz-emeklilik-gelir-plani",
      },
      {
        title: "Değerli Birikim Planı",
        description:
          "Birikim yapmaya bugün başlayın, geleceğinize değer katın.",
        middleNote: "En düşük aylık katkı payı: 2.495 TL",
        applyUrl:
          "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=De%C4%9Ferli%20Birikim%20Plan%C4%B1",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/degerli-birikim-plani",
      },
      {
        title: "Özel Emeklilik Planı",
        description:
          "Gelecek planlarınız için yatırım yapın, kazanmaya bugün başlayın.",
        middleNote: "En düşük aylık katkı payı: 5.050 TL",
        applyUrl:
          "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=%C3%96zel%20Emeklilik%20Plan%C4%B1",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/ozel-emeklilik-plani",
      },
      {
        title: "Güzel Emeklilik Planı",
        description: "Bugünkü refah seviyenizi gelecekte de yakalayın.",
        middleNote: "En düşük aylık katkı payı: 11.950 TL",
        applyUrl:
          "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=G%C3%BCzel%20Emeklilik%20Plan%C4%B1",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/guzel-emeklilik-plani",
      },
      {
        title: "Hesaplı Emeklilik Planı",
        description:
          "Geleceğiniz için hesabınızı iyi yapın, ilk adımı bugün atın.",
        middleNote: "En düşük aylık katkı payı: 1.280 TL",
        applyUrl:
          "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Hesapl%C4%B1%20Emeklilik%20Plan%C4%B1",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/hesapli-emeklilik-plani",
      },
      {
        title: "Huzurlu Emeklilik Planı",
        description:
          "Huzurlu bir gelecek için birikim yapmaya bugün başlayın.",
        middleNote: "En düşük aylık katkı payı: 1.700 TL",
        applyUrl:
          "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Huzurlu%20Emeklilik%20Plan%C4%B1",
        detailUrl:
          "https://www.katilimemeklilik.com.tr/urunler/birikim/bireysel-emeklilik/planlar/huzurlu-emeklilik-plani",
      },
    ],
    extraSections: [
      {
        title: "Sağlık Sigortaları",
        sourceUrl:
          "https://www.katilimemeklilik.com.tr/urunler/tum-urunler/bireysel",
        items: [
          {
            title: "Tam Katılım Sağlık Sigortası",
            description: "Sağlığınıza tam destek Katılım Sağlık'tan!",
            applyUrl:
              "https://marketim.katilimemeklilik.com.tr/urunler/market/tsshizliteklif",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/saglik-sigortalari/tam-katilim-saglik-sigortasi",
          },
          {
            title: "Yurt Dışı Seyahat Sağlık Sigortası",
            description:
              "Seyahatlerinizde sürpriz risklere karşı güvendesiniz.",
            applyUrl:
              "https://marketim.katilimemeklilik.com.tr/urunler/market/seyahatsaglik",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/saglik-sigortalari/yurt-disi-seyahat-saglik-sigortasi",
          },
          {
            title: "4x4'lük Tamamlayıcı Sağlık Sigortası",
            description: "Sağlığınız için 4x4'lük sağlık sigortası!",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=4x4%E2%80%99l%C3%BCk%20Tamamlay%C4%B1c%C4%B1%20Sa%C4%9Fl%C4%B1k%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/saglik-sigortalari/4x4luk-tamamlayici-saglik-sigortasi",
          },
          {
            title: "Bireysel Özel Sağlık Sigortası",
            description: "Geniş kapsamlarıyla size özel sağlık sigortası.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Bireysel%20%C3%96zel%20Sa%C4%9Fl%C4%B1k%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/saglik-sigortalari/bireysel-ozel-saglik-sigortasi",
          },
          {
            title: "Gülümseten Tamamlayıcı Sağlık Sigortası",
            description: "Sağlıklı gülümsemenin keyfini sürün.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=G%C3%BCl%C3%BCmseten%20Tamamlay%C4%B1c%C4%B1%20Sa%C4%9Fl%C4%B1k%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/saglik-sigortalari/gulumseten-tamamlayici-saglik-sigortasi",
          },
          {
            title: "Acil Sağlık Sigortası",
            description: "Acil durumlarda Katılım Sağlık yanınızda!",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Acil%20Sa%C4%9Fl%C4%B1k%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/saglik-sigortalari/acil-saglik-sigortasi",
          },
          {
            title: "Misafirim Güvende Sağlık Sigortası",
            description:
              "Yabancı uyruklu kişilerin Türkiye'deki sağlık güvencesi.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Misafirim%20G%C3%BCvende%20Sa%C4%9Fl%C4%B1k%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/saglik-sigortalari/misafirim-guvende-saglik-sigortasi",
          },
          {
            title: "Komplikasyon Sigortası",
            description:
              "İhtimaller ne olursa olsun, sigortanız yanınızda!",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Komplikasyon%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/saglik-sigortalari/komplikasyon-sigortasi",
          },
        ],
      },
      {
        title: "Hayat Sigortaları",
        sourceUrl:
          "https://www.katilimemeklilik.com.tr/urunler/tum-urunler/bireysel",
        items: [
          {
            title: "Faizsiz Kredi Hayat Sigortası",
            description: "Kredi borcunuz kimseye yük olmasın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Faizsiz%20Kredi%20Hayat%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/faizsiz-kredi-hayat-sigortasi",
          },
          {
            title: "Kritik Hastalıklar Sigortası",
            description:
              "Kendinizi koruyun, sevdiklerinizi yalnız bırakmayın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Kritik%20Hastal%C4%B1klar%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/kritik-hastaliklar-sigortasi",
          },
          {
            title: "Kadınca Güven Kritik Hastalık Sigortası",
            description: "Zor zamanları güvence altına alın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Kad%C4%B1nca%20G%C3%BCven%20Kritik%20Hastal%C4%B1k%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/kadinca-guven-kritik-hastalik-sigortasi",
          },
          {
            title: "Eğitim Güvencesi",
            description: "Çocuğunuzun eğitimini riske atmayın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=E%C4%9Fitim%20G%C3%BCvencesi",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/egitim-guvencesi",
          },
          {
            title: "Okul Taksit Güvencesi",
            description:
              "Başınıza ne gelirse gelsin, çocuklarınızın eğitimlerine ara vermesin.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Okul%20Taksit%20G%C3%BCvencesi",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/okul-taksit-guvencesi",
          },
          {
            title: "Kapsamlı Hayat Güvencesi",
            description:
              "Hayatın getirebileceği risklere karşı tam koruma sağlayın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Kapsaml%C4%B1%20Hayat%20G%C3%BCvencesi",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/kapsamli-hayat-guvencesi",
          },
          {
            title: "Ticari Kredi Hayat Sigortası",
            description:
              "Katılım Emeklilik ile ticari kredi borçlarınızı güvence altına alın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Ticari%20Kredi%20Hayat%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/uzun-sureli-ticari-kredi-hayat-sigortasi",
          },
          {
            title: "Kredi Ödeme Güvencesi",
            description:
              "\"Kredi borçlarımı kim ödeyecek?\" diye düşünmeyin!",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Kredi%20%C3%96deme%20G%C3%BCvencesi",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/kredi-odeme-guvencesi",
          },
          {
            title: "Güvenceli Hayat Sigortası",
            description:
              "Kendinizi veya sevdiklerinizi güvence altına alın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=G%C3%BCvenceli%20Hayat%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/hayat-sigortalari/guvenceli-hayat-sigortasi",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl:
          "https://www.katilimemeklilik.com.tr/urunler/tum-urunler/bireysel",
        items: [
          {
            title: "Tam Destek Ferdi Kaza Sigortası",
            description: "Kazalar olmadan önce önlem alın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Tam%20Destek%20Ferdi%20Kaza%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/ferdi-kaza-sigortasi/tam-destek-ferdi-kaza-sigortasi",
          },
          {
            title: "Çiftçi Destek Ferdi Kaza Sigortası",
            description:
              "Çiftçilik yaparken kazalara karşı güvencede olun.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=%C3%87ift%C3%A7i%20Destek%20Ferdi%20Kaza%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/ferdi-kaza-sigortalari/ciftci-destek-ferdi-kaza-sigortasi",
          },
          {
            title: "İkinci Bahar Ferdi Kaza Sigortası",
            description: "Siz hep genç kalın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=%C4%B0kinci%20Bahar%20Ferdi%20Kaza%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/ferdi-kaza-sigortalari/ikinci-bahar-ferdi-kaza-sigortasi",
          },
          {
            title: "Krediye Bağlı Ferdi Kaza Sigortası",
            description: "Kredi borcunuz kazalarda yük olmasın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Krediye%20Ba%C4%9Fl%C4%B1%20Ferdi%20Kaza%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/ferdi-kaza-sigortalari/krediye-bagli-ferdi-kaza-sigortasi",
          },
          {
            title: "Huzurlu Yuvam Ferdi Kaza Sigortası",
            description:
              "Kazaları bize bırakın siz yuvanızda huzurla yaşayın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Huzurlu%20Yuvam%20Ferdi%20Kaza%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/ferdi-kaza-sigortalari/huzurlu-yuvam-ferdi-kaza-sigortasi",
          },
          {
            title: "Kapsamlı Ferdi Kaza Sigortası",
            description: "Kazalara karşı tam koruma sağlayın.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Kapsaml%C4%B1%20Ferdi%20Kaza%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/ferdi-kaza-sigortalari/kapsamli-ferdi-kaza-sigortasi",
          },
          {
            title: "Yolum Açık Ferdi Kaza Sigortası",
            description: "Yolunuza çıkan engelleri birlikte aşalım.",
            applyUrl:
              "https://www.katilimemeklilik.com.tr/basvurunuzu-alalim?form=Yolum%20A%C3%A7%C4%B1k%20Ferdi%20Kaza%20Sigortas%C4%B1",
            detailUrl:
              "https://www.katilimemeklilik.com.tr/urunler/sigorta/ferdi-kaza-sigortalari/yolum-acik-ferdi-kaza-sigortasi",
          },
        ],
      },
    ],
  },
  {
    slug: "metlife-emeklilik-ve-hayat",
    name: "Met Life Emeklilik ve Hayat AŞ",
    url: "https://www.metlife.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/metlife-download-transparent.png",
    imageClass: "is-metlife-smaller",
    planSourceUrl:
      "https://www.metlife.com.tr/bireysel-emeklilik/bireysel-planlarimiz/urunleri-karsilastir/",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "İlk BES'im",
        description:
          "Çocuklar için uzun vadeli birikim ve ek katkı avantajı sunan BES planıdır.",
        middleNote: "En düşük aylık katkı payı: 670 TL",
        applyUrl: "https://dijital-satis.metlife.com.tr/bireysel-emeklilik/ilkbesim-plan",
        detailUrl: "https://www.metlife.com.tr/bireysel-emeklilik/Ilk_BESim/",
      },
      {
        title: "Deniz Plan",
        description:
          "Emekliliğiniz için bugünden düzenli tasarruf yapmak isteyenler için tasarlanmıştır.",
        middleNote: "En düşük aylık katkı payı: 970 TL",
        detailUrl:
          "https://www.metlife.com.tr/bireysel-emeklilik/bireysel-planlarimiz/deniz-plan/",
      },
      {
        title: "Afilli Plan",
        description:
          "Daha yüksek aylık katkı payı ile birikimini büyütmek isteyenlere yöneliktir.",
        middleNote: "En düşük aylık katkı payı: 2.320 TL",
        detailUrl:
          "https://www.metlife.com.tr/bireysel-emeklilik/bireysel-planlarimiz/afili-plan/",
      },
      {
        title: "Alternatif Güvence Planı",
        description:
          "Faiz içermeyen yapıda BES birikimi yapmak isteyenler için hazırlanmıştır.",
        middleNote: "En düşük aylık katkı payı: 970 TL",
        detailUrl:
          "https://www.metlife.com.tr/bireysel-emeklilik/bireysel-planlarimiz/alternatif-guvence-plani/",
      },
      {
        title: "Pozitif Plan",
        description:
          "Dijital kanaldan daha erişilebilir katkı payı ile BES'e başlamak isteyenler için.",
        middleNote: "En düşük aylık katkı payı: 1.150 TL",
        applyUrl: "https://dijital-satis.metlife.com.tr/bireysel-emeklilik/pozitif-plan",
        detailUrl:
          "https://www.metlife.com.tr/bireysel-emeklilik/bireysel-planlarimiz/pozitif-plan/",
      },
      {
        title: "Emeklilik Plus Plan",
        description:
          "Yüksek tutarlı başlangıç veya aylık katkı ile premium birikim hedefleyenler için.",
        middleNote:
          "Başlangıç kapitali: 192.790 TL veya en düşük aylık katkı payı: 9.630 TL",
        applyUrl: "https://dijital-satis.metlife.com.tr/bireysel-emeklilik/emeklilik-plus",
        detailUrl:
          "https://www.metlife.com.tr/bireysel-emeklilik/bireysel-planlarimiz/emeklilik-plus-plan/",
      },
    ],
    extraSections: [
      {
        title: "Sağlık Sigortaları",
        sourceUrl: "https://www.metlife.com.tr/saglik-sigortasi/metlife-tamamlayici-saglik-sigortasi/",
        items: [
          {
            title: "MetLife Tamamlayıcı Sağlık Sigortası",
            description:
              "SGK anlaşmalı kurumlarda geniş kapsam ve asistans hizmetleriyle ek sağlık güvencesi sunar.",
            applyUrl:
              "https://www.metlife.com.tr/satin-al/tamamlayici-saglik/ailem-ve-ben/",
            detailUrl:
              "https://www.metlife.com.tr/saglik-sigortasi/metlife-tamamlayici-saglik-sigortasi/",
          },
        ],
      },
      {
        title: "Hayat Sigortaları",
        sourceUrl:
          "https://www.metlife.com.tr/hayat-sigortasi/bireysel-urunlerimiz/koruyucu-melegim-egitim-sigortasi",
        items: [
          {
            title: "Koruyucu Meleğim Hayat Sigortası",
            description:
              "Aile bireylerini yaşam kaybı ve beklenmedik risklere karşı korumaya odaklanır.",
            applyUrl: "https://dijital-satis.metlife.com.tr/ihtiyari-urun/koruyucu-melegim",
            detailUrl:
              "https://www.metlife.com.tr/hayat-sigortasi/bireysel-urunlerimiz/koruyucu-melegim-egitim-sigortasi",
          },
          {
            title: "İyi ki Varsın Hayat Sigortası",
            description:
              "Sevdikleriniz için yaşam kaybı ve maluliyet risklerine karşı finansal destek sağlar.",
            applyUrl: "https://dijital-satis.metlife.com.tr/ihtiyari-urun/iyi-ki-varsin",
            detailUrl:
              "https://www.metlife.com.tr/hayat-sigortasi/bireysel-urunlerimiz/iyi-ki-varsin-hayat-sigortasi",
          },
          {
            title: "Kredi Hayat Sigortası",
            description:
              "Kredi geri ödeme sürecinde vefat ve maluliyet risklerine karşı koruma sunar.",
            detailUrl:
              "https://www.metlife.com.tr/hayat-sigortasi/bireysel-urunlerimiz/kredi-hayat-sigortasi/",
          },
          {
            title: "Ameliyat Güvenceli Hayat Sigortası",
            description:
              "Hayat güvencesini belirli ameliyat risklerine yönelik ek desteklerle birleştirir.",
            detailUrl:
              "https://www.metlife.com.tr/hayat-sigortasi/bireysel-urunlerimiz/ameliyat-guvenceli-hayat-sigortasi/",
          },
          {
            title: "Kadına Özel Hayat Sigortası",
            description:
              "Kadınlara özel kritik hastalık teminatlarıyla güçlendirilmiş hayat sigortası çözümüdür.",
            detailUrl:
              "https://www.metlife.com.tr/hayat-sigortasi/bireysel-urunlerimiz/kadina-ozel-hayat-sigortasi/",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl:
          "https://www.metlife.com.tr/ferdi-kaza-sigortasi/bireysel-urunlerimiz/mutlu-gunler-ferdi-kaza-sigortasi_/",
        items: [
          {
            title: "Mutlu Günler Ferdi Kaza Sigortası",
            description:
              "Günlük yaşamdaki kaza risklerine karşı temel ferdi kaza güvencesi sunar.",
            applyUrl:
              "https://dijital-satis.metlife.com.tr/ihtiyari-urun/mutlu-gunler-ferdi-kaza",
            detailUrl:
              "https://www.metlife.com.tr/ferdi-kaza-sigortasi/bireysel-urunlerimiz/mutlu-gunler-ferdi-kaza-sigortasi_/",
          },
          {
            title: "Yıllarım Güvende Ferdi Kaza Sigortası",
            description:
              "İleri yaş dönemleri için ferdi kaza korumasını erişilebilir yapıda sunar.",
            detailUrl:
              "https://www.metlife.com.tr/ferdi-kaza-sigortasi/bireysel-urunlerimiz/yillarim-guvende-ferdi-kaza-sigortasi/",
          },
          {
            title: "Çek Karnesi Ferdi Kaza Sigortası",
            description:
              "İş hayatında beklenmedik kaza risklerine karşı ek güvence sağlar.",
            detailUrl:
              "https://www.metlife.com.tr/ferdi-kaza-sigortasi/bireysel-urunlerimiz/cek-karnesi-ferdi-kaza-sigortasi/",
          },
          {
            title: "Yaşamım Güvende Ferdi Kaza Sigortası",
            description:
              "Yaşam kaybı ve sakatlık risklerine karşı kapsamlı ferdi kaza desteği sunar.",
            applyUrl: "https://dijital-satis.metlife.com.tr/ihtiyari-urun/yasamim-guvende",
            detailUrl:
              "https://www.metlife.com.tr/ferdi-kaza-sigortasi/bireysel-urunlerimiz/yasamim-guvende-ferdi-kaza-sigortasi/",
          },
        ],
      },
    ],
  },
  {
    slug: "turkiye-hayat-ve-emeklilik",
    name: "Türkiye Hayat ve Emeklilik AŞ",
    url: "https://www.turkiyehayatemeklilik.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/the.png",
    homeImageClass: "is-the-home-smaller",
    detailImageClass: "is-the-detail-larger",
    planSourceUrl:
      "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "Dijital BES Planı",
        description:
          "Ara verme kesintisi olmadan dijital kanaldan birikim yapmak isteyenler için.",
        detailUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik/dijital-bes-plani",
      },
      {
        title: "Katılım Esaslı Dijital BES Planı",
        description:
          "Faizsiz fon seçenekleriyle dijital ortamdan BES başlatmak isteyenler için.",
        detailUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik/katilim-esasli-dijital-bes-plani",
      },
      {
        title: "18 Yaş Altı Birikim Bireysel Emeklilik Planı",
        description:
          "Çocukların geleceği için uzun vadeli ve istikrarlı birikim yapma imkanı sunar.",
        detailUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik/18-yas-alti-birikim-bireysel-emeklilik-plani",
      },
      {
        title: "Katılım Esaslı 18 Yaş Altı Birikim Bireysel Emeklilik Planı",
        description:
          "Faizsiz fon alternatifleriyle çocuklar adına birikim yapmak isteyenlere yöneliktir.",
        detailUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik/katilim-esasli-18-yas-alti-birikim-bireysel-emeklilik-plani",
      },
      {
        title: "Temel Birikim Emeklilik Planı",
        description:
          "Temel seviyede düzenli katkı ile yarınlara güçlü adımlar atmak isteyenler için.",
        middleNote: "En düşük aylık katkı payı: 1.300 TL",
        detailUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik/temel-birikim-emeklilik-plani",
      },
      {
        title: "Katılım Esaslı Temel Birikim Planı",
        description:
          "Faizsiz fonlarla temel seviyede düzenli emeklilik birikimi hedefleyenler için.",
        middleNote: "En düşük aylık katkı payı: 1.300 TL",
        detailUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik/katilim-esasli-temel-birikim-plani",
      },
      {
        title: "Sağlam Temel Plan",
        description:
          "Başlangıç katkısı ile daha güçlü bir emeklilik birikimi oluşturmak isteyenler için.",
        middleNote:
          "Başlangıç katkı payı: 25.000 TL • En düşük aylık katkı payı: 1.500 TL",
        detailUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik/saglam-temel-plan",
      },
      {
        title: "Katılım Esaslı Sağlam Temel Plan",
        description:
          "Faizsiz fon alternatifleriyle güçlü başlangıç yaparak birikim oluşturmak isteyenler için.",
        middleNote:
          "Başlangıç katkı payı: 25.000 TL • En düşük aylık katkı payı: 1.500 TL",
        detailUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/bireysel-emeklilik/katilim-esasli-saglam-temel-plan",
      },
    ],
    extraSections: [
      {
        title: "Hayat Sigortaları",
        sourceUrl:
          "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/hayat-sigortalari",
        items: [
          {
            title: "Dövize Endeksli Prim İadeli Hayat Sigortaları",
            description:
              "Prim iadesi avantajını dövize endeksli yapıyla birleştiren hayat sigortası çözümüdür.",
            detailUrl:
              "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/hayat-sigortalari/dovize-endeksli-prim-iadeli-hayat-sigortalari",
          },
          {
            title: "Eğitimin Gücü",
            description:
              "Çocuğun eğitim hayatını beklenmedik risklere karşı güvence altına alır.",
            detailUrl:
              "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/hayat-sigortalari/egitimin-gucu",
          },
          {
            title: "Artı Hayat Sigortası",
            description:
              "Belirsiz risklere karşı daha geniş koruma isteyenler için hayat güvencesi sunar.",
            detailUrl:
              "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/hayat-sigortalari/arti-hayat-sigortasi",
          },
          {
            title: "Eğitim Destek Sigortası",
            description:
              "Hayat risklerine karşı çocuğun geleceğini güvence altına almayı hedefler.",
            detailUrl:
              "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/hayat-sigortalari/egitim-destek-sigortasi",
          },
          {
            title: "İyi Günde Hayat Sigortası",
            description:
              "Zengin teminat yapısıyla sizin ve sevdiklerinizin geleceğini korur.",
            detailUrl:
              "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/hayat-sigortalari/iyi-gunde-hayat-sigortasi",
          },
          {
            title: "Hayat Sigortası",
            description:
              "Yaşam kaybı, maluliyet ve tehlikeli hastalık durumlarında önceden belirlenmiş teminat öder.",
            detailUrl:
              "https://www.turkiyehayatemeklilik.com.tr/urunlerimiz/hayat-sigortalari/hayat-sigortasi",
          },
        ],
      },
    ],
  },
  {
    slug: "qnb-saglik-hayat-sigorta-ve-emeklilik",
    name: "QNB Sağlık Hayat Sigorta ve Emeklilik A.Ş.",
    url: "https://www.qnbsigorta.com.tr",
    tags: ["Emeklilik", "Hayat", "Sigorta"],
    logoSrc: "../assets/logos/qnb-download.svg",
    imageClass: "is-scale-160",
    planSourceUrl: "https://www.qnbsigorta.com.tr/bireysel-emeklilik",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "QNB BES Bireysel Emeklilik Planı",
        description:
          "Daha düşük katkı payı ile düzenli BES birikimine başlamak isteyenler için uygundur.",
        middleNote: "En düşük aylık katkı payı: 1.000 TL",
        applyUrl:
          "https://www.qnbsigorta.com.tr/bireysel-emeklilik/qnb-bes-bireysel-emeklilik-plani",
        detailUrl:
          "https://www.qnbsigorta.com.tr/bireysel-emeklilik/qnb-bes-bireysel-emeklilik-plani",
      },
      {
        title: "Yeni Elit Bireysel Emeklilik Planı",
        description:
          "Daha yüksek katkı payı ile yönetim gider kesintisi ödemeden birikim hedefleyenlere yöneliktir.",
        middleNote: "En düşük aylık katkı payı: 5.000 TL",
        applyUrl:
          "https://www.qnbsigorta.com.tr/bireysel-emeklilik/yeni-elit-bireysel-emeklilik-plani",
        detailUrl:
          "https://www.qnbsigorta.com.tr/bireysel-emeklilik/yeni-elit-bireysel-emeklilik-plani",
      },
    ],
    extraSections: [
      {
        title: "Sağlık Sigortaları",
        sourceUrl: "https://www.qnbsigorta.com.tr/saglik-sigortasi",
        items: [
          {
            title: "Tam Destek Tamamlayıcı Sağlık Sigortası",
            description:
              "Yatarak tedavi ve gündelik hastane tazminatı ile güçlü, esnek ve erişilebilir sağlık güvencesi sunar.",
            applyUrl:
              "https://www.qnbsigorta.com.tr/saglik-sigortasi/tam-destek-tamamlayici-saglik-sigortasi",
            detailUrl:
              "https://www.qnbsigorta.com.tr/saglik-sigortasi/tam-destek-tamamlayici-saglik-sigortasi",
          },
          {
            title: "Tamamlayıcı Sağlık Sigortası",
            description:
              "SGK anlaşmalı kurumlarda yatarak ve ayakta tedavi plan seçenekleriyle ek sağlık koruması sağlar.",
            applyUrl:
              "https://www.qnbsigorta.com.tr/saglik-sigortasi/tamamlayici-saglik-sigortasi",
            detailUrl:
              "https://www.qnbsigorta.com.tr/saglik-sigortasi/tamamlayici-saglik-sigortasi",
          },
          {
            title: "Kritik Destek Tamamlayıcı Sağlık Sigortası",
            description:
              "Kritik hastalıkların tedavi sürecinde oluşturabileceği maddi yüke karşı ek destek sunar.",
            applyUrl:
              "https://www.qnbsigorta.com.tr/saglik-sigortasi/kritik-destek-tamamlayici-saglik-sigortasi",
            detailUrl:
              "https://www.qnbsigorta.com.tr/saglik-sigortasi/kritik-destek-tamamlayici-saglik-sigortasi",
          },
        ],
      },
      {
        title: "Hayat Sigortaları",
        sourceUrl: "https://www.qnbsigorta.com.tr/hayat-sigortasi",
        items: [
          {
            title: "Akıllı Hayat Sigortası Plus",
            description:
              "Süre sonunda ödenen primlerin %10 fazlasını ve dövize endeksli yapı avantajını sunar.",
            applyUrl:
              "https://www.qnbsigorta.com.tr/hayat-sigortasi/akilli-hayat-sigortasi-plus",
            detailUrl:
              "https://www.qnbsigorta.com.tr/hayat-sigortasi/akilli-hayat-sigortasi-plus",
          },
          {
            title: "Akıllı Hayat Sigortası",
            description:
              "Süre sonunda ödenen primleri iade eden ve dövize endeksli koruma sunan hayat sigortasıdır.",
            applyUrl:
              "https://www.qnbsigorta.com.tr/hayat-sigortasi/akilli-hayat-sigortasi",
            detailUrl:
              "https://www.qnbsigorta.com.tr/hayat-sigortasi/akilli-hayat-sigortasi",
          },
          {
            title: "Bütçeme Destek Hayat Sigortası",
            description:
              "1.250.000 TL'ye kadar teminatla sevdiklerinize maddi güvence ve bütçe desteği sunar.",
            applyUrl:
              "https://www.qnbsigorta.com.tr/hayat-sigortasi/butceme-destek-hayat-sigortasi",
            detailUrl:
              "https://www.qnbsigorta.com.tr/hayat-sigortasi/butceme-destek-hayat-sigortasi",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl: "https://www.qnbsigorta.com.tr/ferdi-kaza-sigortasi",
        items: [
          {
            title: "Gülen Yüzler Ferdi Kaza Sigortası",
            description:
              "Kaza risklerine karşı koruma sunarken ücretsiz diş sağlığı hizmetleri de sağlar.",
            middleNote: "Aylık prim tutarı: 300 TL",
            applyUrl:
              "https://www.qnbsigorta.com.tr/ferdi-kaza-sigortasi/gulen-yuzler-ferdi-kaza-sigortasi",
            detailUrl:
              "https://www.qnbsigorta.com.tr/ferdi-kaza-sigortasi/gulen-yuzler-ferdi-kaza-sigortasi",
          },
          {
            title: "Bütçeme Destek Ferdi Kaza Sigortası",
            description:
              "2.000.000 TL'ye kadar maddi güvence ile günlük yaşam kazalarına karşı koruma sunar.",
            applyUrl:
              "https://www.qnbsigorta.com.tr/ferdi-kaza-sigortasi/butceme-destek-ferdi-kaza-sigortasi",
            detailUrl:
              "https://www.qnbsigorta.com.tr/ferdi-kaza-sigortasi/butceme-destek-ferdi-kaza-sigortasi",
          },
          {
            title: "E-İyilik Sağlık Ferdi Kaza Sigortası",
            description:
              "Kaza güvencesini online sağlık hizmetleri ile bir araya getiren tek paket çözümdür.",
            applyUrl:
              "https://www.qnbsigorta.com.tr/ferdi-kaza-sigortasi/e-iyilik-saglik-ferdi-kaza-sigortasi",
            detailUrl:
              "https://www.qnbsigorta.com.tr/ferdi-kaza-sigortasi/e-iyilik-saglik-ferdi-kaza-sigortasi",
          },
        ],
      },
    ],
  },
  {
    slug: "viennalife-emeklilik-ve-hayat",
    name: "Viennalife Emeklilik ve Hayat A.Ş.",
    url: "https://www.viennalife.com.tr/",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/viennalife.svg",
    detailImageClass: "is-viennalife-detail-smaller",
    planSourceUrl: "https://www.viennalife.com.tr/urunler/bes",
    plans: [
      {
        title: "İkinci Bahar Sigortası",
        description:
          "Emeklilik döneminde ek gelir ve finansal güvenceyi sürdürmek isteyenler için hazırlanmıştır.",
        applyUrl: "https://www.viennalife.com.tr/urunler/bes",
        detailUrl: "https://www.viennalife.com.tr/urunler/bes",
      },
    ],
    extraSections: [
      {
        title: "Prim İadeli Ürünler",
        sourceUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
        items: [
          {
            title: "ROP 80+20 Hayat Sigortası",
            description:
              "Risk gerçekleşmezse primlerin büyük kısmını iade eden ve yüksek teminat sunan hayat ürünüdür.",
            applyUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
            detailUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
          },
          {
            title: "ROP 80+20 Karma Hayat Sigortası",
            description:
              "TL prim ve döviz teminat yapısını prim iadesi avantajı ile birleştirir.",
            applyUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
            detailUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
          },
          {
            title: "ROP 60+20 Beş Yıllık Karma Hayat Sigortası",
            description:
              "Beş yıllık sürede prim iadesi ve yaşam kaybı teminatını birlikte sunan çözümdür.",
            applyUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
            detailUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
          },
          {
            title: "Reci-Pİ Hayat Sigortası",
            description:
              "Türk Eczacıları Birliği üyeleri için hazırlanmış özel prim iadeli hayat ürünüdür.",
            applyUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
            detailUrl: "https://viennalife.com.tr/urunler/prim-iadeli-urunler",
          },
        ],
      },
      {
        title: "Birikim Ürünleri",
        sourceUrl: "https://www.viennalife.com.tr/urunler/birikim-urunleri",
        items: [
          {
            title: "Dövize Endeksli Ödüllü Birikim Hayat Sigortası",
            description:
              "Tasarrufları yüksek getiri araçlarında değerlendirirken sevdiklerinize koruma da sunar.",
            applyUrl: "https://www.viennalife.com.tr/urunler/birikim-urunleri",
            detailUrl: "https://www.viennalife.com.tr/urunler/birikim-urunleri",
          },
          {
            title: "Ödüllü Eğitim Hayat Sigortası",
            description:
              "Çocukların geleceği için birikim yaparken kâr paylı ödül yapısı sağlar.",
            applyUrl: "https://www.viennalife.com.tr/urunler/birikim-urunleri",
            detailUrl: "https://www.viennalife.com.tr/urunler/birikim-urunleri",
          },
          {
            title: "Karma Dövize Endeksli Ödüllü Birikim Hayat Sigortası",
            description:
              "Primlerin büyük kısmını değerlendirerek birikim ve hayat korumasını aynı üründe toplar.",
            applyUrl: "https://www.viennalife.com.tr/urunler/birikim-urunleri",
            detailUrl: "https://www.viennalife.com.tr/urunler/birikim-urunleri",
          },
        ],
      },
      {
        title: "Koruma Ürünleri",
        sourceUrl: "https://www.viennalife.com.tr/urunler/koruma-urunleri",
        items: [
          {
            title: "Turuncu Elma Hayat Sigortası",
            description:
              "Tercihlere göre şekillenen tam koruma yapısıyla size ve sevdiklerinize güvence sunar.",
            applyUrl: "https://www.viennalife.com.tr/urunler/koruma-urunleri",
            detailUrl: "https://www.viennalife.com.tr/urunler/koruma-urunleri",
          },
        ],
      },
      {
        title: "Tek Primliler",
        sourceUrl: "https://www.viennalife.com.tr/urunler/tek-primliler",
        items: [
          {
            title: "Tek Prim Ödemeli Ödüllü Hayat Sigortası",
            description:
              "Tek seferlik prim ödemesi ile sevdiklerinize koruma ve kazanç fırsatı sunar.",
            applyUrl: "https://www.viennalife.com.tr/urunler/tek-primliler",
            detailUrl: "https://www.viennalife.com.tr/urunler/tek-primliler",
          },
          {
            title: "5 Yıllık Tek Prim Ödemeli Ödüllü Hayat Sigortası",
            description:
              "Beş yıllık vadede tek primli yapı ile güvence ve ödül avantajını bir araya getirir.",
            applyUrl: "https://www.viennalife.com.tr/urunler/tek-primliler",
            detailUrl: "https://www.viennalife.com.tr/urunler/tek-primliler",
          },
          {
            title: "Kuponlu Tek Prim Ödemeli Hayat Sigortası",
            description:
              "Tek primli hayat korumasını dönemsel kupon geliri yaklaşımıyla destekler.",
            applyUrl: "https://www.viennalife.com.tr/urunler/tek-primliler",
            detailUrl: "https://www.viennalife.com.tr/urunler/tek-primliler",
          },
        ],
      },
      {
        title: "Kredi Bağlantılı Ürünler",
        sourceUrl: "https://viennalife.com.tr/urunler/kredi-baglantili-urunler",
        items: [
          {
            title: "Kredi Hayat Sigortası",
            description:
              "Kredi maliyetini azaltmaya yardımcı olan ve kredi sürecine uygun hayat koruması sunar.",
            applyUrl: "https://viennalife.com.tr/urunler/kredi-baglantili-urunler",
            detailUrl: "https://viennalife.com.tr/urunler/kredi-baglantili-urunler",
          },
        ],
      },
    ],
  },
  {
    slug: "zurich-yasam-ve-emeklilik",
    name: "Zurich Yaşam ve Emeklilik A.Ş",
    url: "https://www.zurichyasam.com.tr",
    tags: ["Emeklilik", "Hayat"],
    logoSrc: "../assets/logos/zye-transparent.png",
    imageClass: "is-expanded-strong",
    planSourceUrl: "https://www.zurichyasam.com.tr/html/index.html",
    sharedPlanNote: "%20 devlet katkısı",
    plans: [
      {
        title: "Emekliliğim Güvende Emeklilik Planı",
        description:
          "Her yaşa uygun yapıda düzenli katkı ile birikim yapmak isteyenlere yönelik temel BES planıdır.",
        applyUrl:
          "https://www.zurichyasam.com.tr/html/bireysel-emeklilik-sistemi/emekliligim-guvende-emeklilik-plani.html",
        detailUrl:
          "https://www.zurichyasam.com.tr/html/bireysel-emeklilik-sistemi/emekliligim-guvende-emeklilik-plani.html",
      },
      {
        title: "Emekliliğim Güvende VIP Emeklilik Planı",
        description:
          "Başlangıç kapitali ile daha hızlı birikim oluşturmak isteyenlere yönelik VIP BES çözümüdür.",
        middleNote: "En az başlangıç kapitali: 90.000 TL",
        applyUrl:
          "https://www.zurichyasam.com.tr/html/bireysel-emeklilik-sistemi/emekliligim-guvende-vip-emeklilik-plani.html",
        detailUrl:
          "https://www.zurichyasam.com.tr/html/bireysel-emeklilik-sistemi/emekliligim-guvende-vip-emeklilik-plani.html",
      },
    ],
    extraSections: [
      {
        title: "Hayat Sigortaları",
        sourceUrl:
          "https://www.zurichyasam.com.tr/html/bireysel/hayat/uzun-sureli-hayat-sigortasi/index.html",
        items: [
          {
            title: "Uzun Süreli Hayat Sigortası",
            description:
              "Poliçe süresi boyunca aynı teminatı sunan, TL ve dövize endeksli seçenekleri olan hayat ürünüdür.",
            applyUrl:
              "https://www.zurichyasam.com.tr/html/bireysel/hayat/uzun-sureli-hayat-sigortasi/index.html",
            detailUrl:
              "https://www.zurichyasam.com.tr/html/bireysel/hayat/uzun-sureli-hayat-sigortasi/index.html",
          },
          {
            title: "Azalan Bakiyeli Uzun Süreli Hayat Sigortası",
            description:
              "Yıllık tazminat tutarı seçilerek uzun vadeli güvence sağlayan hayat sigortası türüdür.",
            applyUrl:
              "https://www.zurichyasam.com.tr/html/bireysel/hayat/azalan-bakiyeli-hayat-sigortasi/index.html",
            detailUrl:
              "https://www.zurichyasam.com.tr/html/bireysel/hayat/azalan-bakiyeli-hayat-sigortasi/index.html",
          },
        ],
      },
      {
        title: "Sağlık Sigortaları",
        sourceUrl:
          "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-tamamlayici-saglik-sigortasi.html",
        items: [
          {
            title: "Desteğin Bizden Tamamlayıcı Sağlık Sigortası",
            description:
              "SGK anlaşmalı kurumlarda yatarak ve ayakta tedavi seçenekleriyle aile boyu sağlık güvencesi sunar.",
            applyUrl:
              "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-tamamlayici-saglik-sigortasi.html",
            detailUrl:
              "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-tamamlayici-saglik-sigortasi.html",
          },
          {
            title: "Desteğin Bizden Ekstra Tamamlayıcı Sağlık Sigortası",
            description:
              "Geniş anlaşmalı kurum ağı ile ekstra kapsam arayanlar için TSS çözümüdür.",
            applyUrl:
              "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-ekstra-tamamlayici-saglik-sigortasi.html",
            detailUrl:
              "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-ekstra-tamamlayici-saglik-sigortasi.html",
          },
          {
            title: "Desteğin Bizden VIP Tamamlayıcı Sağlık Sigortası",
            description:
              "Daha geniş kullanım beklentisi olanlar için VIP kapsamlı tamamlayıcı sağlık ürünüdür.",
            applyUrl:
              "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-vip-tamamlayici-saglik-sigortasi.html",
            detailUrl:
              "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-vip-tamamlayici-saglik-sigortasi.html",
          },
          {
            title: "Desteğin Bizden Ekonomik Tamamlayıcı Sağlık Sigortası",
            description:
              "Daha uygun bütçe ile tamamlayıcı sağlık koruması almak isteyenlere yöneliktir.",
            applyUrl:
              "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-ekonomik-tamamlayici-saglik-sigortasi.html",
            detailUrl:
              "https://www.zurichyasam.com.tr/html/tamamlayici-saglik-sigortasi/destegin-bizden-ekonomik-tamamlayici-saglik-sigortasi.html",
          },
        ],
      },
      {
        title: "Ferdi Kaza Sigortaları",
        sourceUrl:
          "https://www.zurichyasam.com.tr/html/ferdi-kaza-sigortasi/ferdi-kaza-sigortasi.html",
        items: [
          {
            title: "Ferdi Kaza Sigortası",
            description:
              "Kaza sonucu vefat, maluliyet ve tedavi masraflarına karşı 1 yıllık güvence sunar.",
            applyUrl:
              "https://www.zurichyasam.com.tr/html/ferdi-kaza-sigortasi/ferdi-kaza-sigortasi.html",
            detailUrl:
              "https://www.zurichyasam.com.tr/html/ferdi-kaza-sigortasi/ferdi-kaza-sigortasi.html",
          },
        ],
      },
    ],
  },
];

/**
 * Slug ile detay sayfasi linki uretir.
 * @param {string} slug
 * @returns {string}
 */
export function getCompanyDetailPath(slug) {
  return `./sirket.html?slug=${encodeURIComponent(slug)}`;
}

/**
 * Slug ile tek bir sirket bulur.
 * @param {string|null} slug
 * @returns {typeof companies[number] | undefined}
 */
export function getCompanyBySlug(slug) {
  return companies.find((company) => company.slug === slug);
}
