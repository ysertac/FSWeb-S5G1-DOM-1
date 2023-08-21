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

let logoImg = document.getElementById("logo-img");
let ctaImg = document.getElementById("cta-img");
let middleImg = document.getElementById("middle-img");
let footer = document.getElementsByTagName("footer")[0];
let header = document.getElementsByTagName("header")[0];
let nav = header.getElementsByTagName("nav")[0];
let navAnchor = nav.getElementsByTagName("a");
let ctaText = document.getElementsByClassName("cta-text")[0];
let contentDiv = document.getElementsByClassName("text-content");
let contact = document.getElementsByClassName("contact")[0];

logoImg.setAttribute("src", "http://localhost:9000/img/logo.png");
ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png");
middleImg.setAttribute("src", "http://localhost:9000/img/accent.png");
for (let i = 0; i < navAnchor.length; i++) {
  navAnchor[i].classList = "italic";
}

navAnchor[0].textContent = "Servisler";
navAnchor[1].textContent = "Ürünler";
navAnchor[2].textContent = "Vizyon";
navAnchor[3].textContent = "Özellikler";
navAnchor[4].textContent = "Hakkımızda";
navAnchor[5].textContent = "İletişim";

ctaText.getElementsByTagName("h1")[0].textContent = "Bu DOM Mükemmel";
ctaText.getElementsByTagName("button")[0].textContent = "Başlayın";
contentDiv[0].getElementsByTagName("h4")[0].textContent = "Özellikler";
contentDiv[0].getElementsByTagName(
  "p"
)[0].textContent = `Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
contentDiv[1].getElementsByTagName("h4")[0].textContent = "Hakkında";
contentDiv[1].getElementsByTagName(
  "p"
)[0].textContent = `Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
contentDiv[2].getElementsByTagName("h4")[0].textContent = "Servisler";
contentDiv[2].getElementsByTagName(
  "p"
)[0].textContent = `Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
contentDiv[3].getElementsByTagName("h4")[0].textContent = "Ürünler";
contentDiv[3].getElementsByTagName(
  "p"
)[0].textContent = `Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;
contentDiv[4].getElementsByTagName("h4")[0].textContent = "Vizyon";
contentDiv[4].getElementsByTagName(
  "p"
)[0].textContent = `Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
scelerisque quis.`;

contact.getElementsByTagName("h4")[0].textContent = "İletişim";
contact.getElementsByTagName("p")[0].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
contact.getElementsByTagName("p")[1].textContent = "+90 (123) 456-7899";
contact.getElementsByTagName("p")[2].textContent =
  "satis@birsirketsitesi.com.tr";

footer.getElementsByTagName("a")[0].textContent =
  "Copyright Bir Şirket Sitesi 2022";

footer.getElementsByTagName("a")[0].classList = "bold";
