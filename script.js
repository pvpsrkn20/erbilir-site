const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const current = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((item) => {
  const href = item.getAttribute("href");
  if (href === current) item.classList.add("active");
});

const translations = {
  en: {
    "Kurumsal bilgi işlem, altyapı ve yazılım çözümleri": "Corporate IT, infrastructure and software solutions",
    "Bilgi İşlem": "IT Services",
    "Ana Sayfa": "Home",
    "Hizmetler": "Services",
    "Çözümler": "Solutions",
    "Projeler": "Projects",
    "Hakkımızda": "About",
    "İletişim": "Contact",
    "Teklif Al": "Get Quote",
    "İşletmenizin tüm teknoloji operasyonu tek merkezden yönetilsin.": "Manage your entire technology operation from one reliable partner.",
    "Sunucu taşıma, kurulum, sanallaştırma, bulut backup, kamera sistemleri, Netsis ERP ve özel yazılım ihtiyaçlarında planlı, güvenli ve ölçülebilir çözümler sunuyoruz.": "We deliver planned, secure and measurable solutions for server migration, virtualization, cloud backup, Microsoft 365 mail migration, camera systems, Netsis ERP and custom software.",
    "Hizmetleri İncele": "Explore Services",
    "Keşif Planla": "Plan Assessment",
    "Teknik karmaşayı operasyonel düzene çeviren hizmetler.": "Services that turn technical complexity into operational order.",
    "Sunucu ve Bulut Sunucu": "Server and Cloud Server",
    "Bulut Backup ve Felaket Kurtarma": "Cloud Backup and Disaster Recovery",
    "Microsoft 365, Mail ve ERP": "Microsoft 365, Mail and ERP",
    "Teknoloji ekosistemi": "Technology ecosystem",
    "Kurumsal bilgi işlem, ERP ve altyapı çözümleri": "Corporate IT, ERP and infrastructure solutions",
    "Canlı destek": "Support",
    "Talebinizi yazın, info mailine düşsün.": "Send your request to our info mailbox.",
    "Mail Gönder": "Send Mail",
    "Direkt Mail": "Direct Mail"
  },
  de: {
    "Kurumsal bilgi işlem, altyapı ve yazılım çözümleri": "IT-, Infrastruktur- und Softwarelösungen für Unternehmen",
    "Bilgi İşlem": "IT-Service",
    "Ana Sayfa": "Startseite",
    "Hizmetler": "Leistungen",
    "Çözümler": "Lösungen",
    "Projeler": "Projekte",
    "Hakkımızda": "Über uns",
    "İletişim": "Kontakt",
    "Teklif Al": "Angebot",
    "İşletmenizin tüm teknoloji operasyonu tek merkezden yönetilsin.": "Steuern Sie Ihren gesamten IT-Betrieb über einen verlässlichen Partner.",
    "Sunucu taşıma, kurulum, sanallaştırma, bulut backup, kamera sistemleri, Netsis ERP ve özel yazılım ihtiyaçlarında planlı, güvenli ve ölçülebilir çözümler sunuyoruz.": "Wir liefern sichere und planbare Lösungen für Servermigration, Virtualisierung, Cloud-Backup, Microsoft 365 Mail-Migration, Kamerasysteme, Netsis ERP und Individualsoftware.",
    "Hizmetleri İncele": "Leistungen ansehen",
    "Keşif Planla": "Analyse planen",
    "Teknik karmaşayı operasyonel düzene çeviren hizmetler.": "Leistungen, die technische Komplexität in klare Abläufe verwandeln.",
    "Sunucu ve Bulut Sunucu": "Server und Cloud-Server",
    "Bulut Backup ve Felaket Kurtarma": "Cloud-Backup und Notfallwiederherstellung",
    "Microsoft 365, Mail ve ERP": "Microsoft 365, Mail und ERP",
    "Teknoloji ekosistemi": "Technologie-Ökosystem",
    "Kurumsal bilgi işlem, ERP ve altyapı çözümleri": "IT-, ERP- und Infrastrukturlösungen",
    "Canlı destek": "Support",
    "Talebinizi yazın, info mailine düşsün.": "Senden Sie Ihre Anfrage an unser Info-Postfach.",
    "Mail Gönder": "Mail senden",
    "Direkt Mail": "Direktmail"
  },
  ru: {
    "Kurumsal bilgi işlem, altyapı ve yazılım çözümleri": "Корпоративные IT, инфраструктурные и программные решения",
    "Bilgi İşlem": "IT-услуги",
    "Ana Sayfa": "Главная",
    "Hizmetler": "Услуги",
    "Çözümler": "Решения",
    "Projeler": "Проекты",
    "Hakkımızda": "О нас",
    "İletişim": "Контакты",
    "Teklif Al": "Запросить",
    "İşletmenizin tüm teknoloji operasyonu tek merkezden yönetilsin.": "Управляйте всей технологической операцией через одного надежного партнера.",
    "Sunucu taşıma, kurulum, sanallaştırma, bulut backup, kamera sistemleri, Netsis ERP ve özel yazılım ihtiyaçlarında planlı, güvenli ve ölçülebilir çözümler sunuyoruz.": "Мы выполняем миграцию серверов, виртуализацию, облачное резервное копирование, миграцию Microsoft 365, видеонаблюдение, Netsis ERP и разработку ПО.",
    "Hizmetleri İncele": "Смотреть услуги",
    "Keşif Planla": "Запланировать аудит",
    "Teknik karmaşayı operasyonel düzene çeviren hizmetler.": "Услуги, которые превращают техническую сложность в управляемый процесс.",
    "Sunucu ve Bulut Sunucu": "Серверы и облачные серверы",
    "Bulut Backup ve Felaket Kurtarma": "Облачное резервное копирование",
    "Microsoft 365, Mail ve ERP": "Microsoft 365, почта и ERP",
    "Teknoloji ekosistemi": "Технологическая экосистема",
    "Kurumsal bilgi işlem, ERP ve altyapı çözümleri": "Корпоративные IT, ERP и инфраструктура",
    "Canlı destek": "Поддержка",
    "Talebinizi yazın, info mailine düşsün.": "Отправьте запрос на наш info email.",
    "Mail Gönder": "Отправить",
    "Direkt Mail": "Email"
  },
  ar: {
    "Kurumsal bilgi işlem, altyapı ve yazılım çözümleri": "حلول تقنية معلومات وبنية تحتية وبرمجيات للشركات",
    "Bilgi İşlem": "خدمات تقنية",
    "Ana Sayfa": "الرئيسية",
    "Hizmetler": "الخدمات",
    "Çözümler": "الحلول",
    "Projeler": "المشاريع",
    "Hakkımızda": "من نحن",
    "İletişim": "اتصال",
    "Teklif Al": "طلب عرض",
    "İşletmenizin tüm teknoloji operasyonu tek merkezden yönetilsin.": "أدر عمليات التقنية في شركتك من شريك واحد موثوق.",
    "Sunucu taşıma, kurulum, sanallaştırma, bulut backup, kamera sistemleri, Netsis ERP ve özel yazılım ihtiyaçlarında planlı, güvenli ve ölçülebilir çözümler sunuyoruz.": "نقدم حلولاً آمنة ومنظمة لترحيل الخوادم، النسخ الاحتياطي السحابي، ترحيل بريد Microsoft 365، أنظمة الكاميرات، Netsis ERP والبرمجيات الخاصة.",
    "Hizmetleri İncele": "استعراض الخدمات",
    "Keşif Planla": "تخطيط المعاينة",
    "Teknik karmaşayı operasyonel düzene çeviren hizmetler.": "خدمات تحول التعقيد التقني إلى تشغيل منظم.",
    "Sunucu ve Bulut Sunucu": "الخوادم والسحابة",
    "Bulut Backup ve Felaket Kurtarma": "نسخ احتياطي سحابي واستعادة",
    "Microsoft 365, Mail ve ERP": "Microsoft 365 والبريد وERP",
    "Teknoloji ekosistemi": "منظومة التقنية",
    "Kurumsal bilgi işlem, ERP ve altyapı çözümleri": "حلول IT وERP والبنية التحتية",
    "Canlı destek": "الدعم",
    "Talebinizi yazın, info mailine düşsün.": "أرسل طلبك إلى بريد info.",
    "Mail Gönder": "إرسال",
    "Direkt Mail": "بريد مباشر"
  }
};

const languageSelect = document.createElement("select");
languageSelect.className = "language-select";
languageSelect.setAttribute("aria-label", "Dil seçimi");
languageSelect.innerHTML = `
  <option value="tr">TR</option>
  <option value="en">EN</option>
  <option value="de">DE</option>
  <option value="ru">RU</option>
  <option value="ar">AR</option>
`;

const navInner = document.querySelector(".nav-inner");
const navCta = document.querySelector(".nav-cta");
if (navInner) navInner.insertBefore(languageSelect, navCta || document.querySelector(".menu-toggle"));

const translatableSelector = "a, h1, h2, h3, p, span, small, strong, li, button";
const translatePage = (lang) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll(translatableSelector).forEach((node) => {
    if (node.matches("[data-year]")) return;
    if (node.children.length) return;
    if (!node.dataset.i18nSource) node.dataset.i18nSource = node.textContent.trim();
    const source = node.dataset.i18nSource;
    node.textContent = lang === "tr" ? source : translations[lang]?.[source] || source;
  });
  languageSelect.value = lang;
  localStorage.setItem("erbilir-language", lang);
};

languageSelect.addEventListener("change", () => translatePage(languageSelect.value));
translatePage(localStorage.getItem("erbilir-language") || "tr");

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("[data-contact-form]");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Erbilir teklif talebi - ${data.get("service") || "Genel"}`);
    const body = encodeURIComponent(
      `Ad Soyad: ${data.get("name")}\nTelefon: ${data.get("phone")}\nE-posta: ${data.get("email")}\nHizmet: ${data.get("service")}\n\nMesaj:\n${data.get("message")}`
    );
    window.location.href = `mailto:info@erbilir.com?subject=${subject}&body=${body}`;
  });
}

const supportEmail = "info@erbilir.com";
const supportWidget = document.createElement("div");
supportWidget.className = "support-widget";
supportWidget.innerHTML = `
  <div class="support-panel" id="support-panel" aria-hidden="true">
    <div class="support-head">
      <div>
        <strong>Canlı destek</strong>
        <span>Talebinizi yazın, info mailine düşsün.</span>
      </div>
      <button class="support-close" type="button" aria-label="Destek panelini kapat">×</button>
    </div>
    <form class="support-form">
      <input name="name" required placeholder="Ad Soyad / Firma">
      <input name="phone" placeholder="Telefon">
      <textarea name="message" required placeholder="Nasıl yardımcı olabiliriz?"></textarea>
      <div class="support-actions">
        <button class="btn" type="submit">Mail Gönder</button>
        <a class="btn secondary" href="mailto:${supportEmail}">Direkt Mail</a>
      </div>
    </form>
    <div class="support-meta">Yanıt adresi: ${supportEmail}</div>
  </div>
  <button class="support-toggle" type="button" aria-controls="support-panel" aria-expanded="false">
    <span class="support-toggle-icon" aria-hidden="true">?</span>
    <span class="support-toggle-text">Canlı destek</span>
  </button>
`;
document.body.appendChild(supportWidget);
translatePage(localStorage.getItem("erbilir-language") || "tr");

const supportToggle = supportWidget.querySelector(".support-toggle");
const supportPanel = supportWidget.querySelector(".support-panel");
const supportClose = supportWidget.querySelector(".support-close");
const supportForm = supportWidget.querySelector(".support-form");

const setSupportOpen = (open) => {
  supportWidget.classList.toggle("open", open);
  supportToggle.setAttribute("aria-expanded", String(open));
  supportPanel.setAttribute("aria-hidden", String(!open));
};

supportToggle.addEventListener("click", () => {
  setSupportOpen(!supportWidget.classList.contains("open"));
});

supportClose.addEventListener("click", () => setSupportOpen(false));

supportForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(supportForm);
  const subject = encodeURIComponent("Erbilir canlı destek talebi");
  const body = encodeURIComponent(
    `Ad Soyad / Firma: ${data.get("name")}\nTelefon: ${data.get("phone") || "-"}\n\nMesaj:\n${data.get("message")}`
  );
  window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
});
