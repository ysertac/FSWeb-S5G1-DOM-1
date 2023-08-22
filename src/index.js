const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
//Değişken atama bölümü--------

let navLinks = document.querySelectorAll("nav a");
let images = document.querySelectorAll("img");
let cta = document.querySelector("section.cta .cta-text");
const propertyNamesMain = Object.keys(siteContent["ana-içerik"]);
const propertyNamesContact = Object.keys(siteContent["iletisim"]);
let topContentText = document.querySelectorAll(".top-content .text-content");
let botContentText = document.querySelectorAll(".bottom-content .text-content");
let contact = document.querySelector("section.contact");
let footer = document.querySelector("footer");

//İçerik ekleme bölümü--------

navLinks.forEach((value, key) => {
  value.textContent = siteContent.nav[`nav-item-${key + 1}`];
});

images[0].setAttribute("src", siteContent.images["logo-img"]);
images[1].setAttribute("src", siteContent.images["cta-img"]);
images[2].setAttribute("src", siteContent.images["accent-img"]);

cta.querySelector("h1").textContent = siteContent.cta.h1;
cta.querySelector("button").textContent = siteContent.cta.button;

topContentText.forEach((value, key) => {
  value.querySelector("h4").textContent =
    siteContent["ana-içerik"][`${propertyNamesMain[key * 2]}`];
  value.querySelector("p").textContent =
    siteContent["ana-içerik"][`${propertyNamesMain[key * 2 + 1]}`];
});

botContentText.forEach((value, key) => {
  value.querySelector("h4").textContent =
    siteContent["ana-içerik"][
      `${propertyNamesMain[(key + topContentText.length) * 2]}`
    ];
  value.querySelector("p").textContent =
    siteContent["ana-içerik"][
      `${propertyNamesMain[(key + topContentText.length) * 2 + 1]}`
    ];
});

contact.querySelector("h4").textContent = siteContent.iletisim["iletişim-h4"];
contact.querySelectorAll("p").forEach((value, key) => {
  value.textContent = siteContent.iletisim[`${propertyNamesContact[key + 1]}`];
});

footer.querySelector("a").textContent = siteContent.footer.copyright;

//Stil bölümü--------

navLinks.forEach((value) => {
  value.classList = "italic";
});

footer.querySelector("a").classList = "bold";
