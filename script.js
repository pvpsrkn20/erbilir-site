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

const extraTranslations = {
  en: {
    "Erbilir Bilgi İşlem": "Erbilir IT Services",
    "Site": "Site",
    "Kurumsal": "Company",
    "Çözüm Alanları": "Solution Areas",
    "İletişime Geç": "Contact Us",
    "Altyapı": "Infrastructure",
    "Veri koruma": "Data protection",
    "Modern iş yeri": "Modern workplace",
    "Operasyon standardı": "Operational standard",
    "Sadece kurulum değil, sürdürülebilir teknoloji yönetimi.": "Not just installation, sustainable technology management.",
    "Mevcut sistem analizi ve risk haritası": "Current system analysis and risk map",
    "Kesintiyi azaltan taşıma ve devreye alma planı": "Migration and go-live plan that reduces downtime",
    "Yedekleme testi, izleme ve dokümantasyon": "Backup testing, monitoring and documentation",
    "ERP, kamera, ağ ve yazılım entegrasyonları": "ERP, camera, network and software integrations",
    "Kurumsal BT ihtiyaçlarınız için tek muhatap.": "One point of contact for corporate IT needs.",
    "Sunucudan kameraya, yedekten ERP raporuna kadar farklı tedarikçiler arasında kaybolmadan ilerleyin. Erbilir planlar, kurar, devreye alır ve takip eder.": "Move forward without getting lost between vendors, from servers and cameras to backups and ERP reports. Erbilir plans, installs, launches and follows up.",
    "Öne çıkan çözüm alanları": "Featured solution areas",
    "İşletmenin gerçek ihtiyacına göre sade, güçlü ve yönetilebilir teknoloji mimarisi.": "Simple, strong and manageable technology architecture based on the real needs of the business.",
    "Sunucu Taşıma": "Server Migration",
    "Veri kaybı ve uzun kesinti riskini azaltan kontrollü geçiş.": "Controlled migration that reduces data loss and long downtime risk.",
    "Microsoft 365 Mail Geçişi": "Microsoft 365 Mail Migration",
    "Alan adı, kullanıcı, posta kutusu, arşiv ve güvenlik ayarlarıyla kontrollü e-posta geçiş süreci.": "A controlled email migration process with domain, users, mailboxes, archives and security settings.",
    "Bulut Backup": "Cloud Backup",
    "Sunucu, dosya ve Microsoft 365 verileri için yerel ve bulut yedekleme mimarisi.": "Local and cloud backup architecture for servers, files and Microsoft 365 data.",
    "Projelerde kurumsal altyapı, bulut, yedekleme, ağ ve e-posta dünyasında yaygın kullanılan platformlarla çalışırız.": "We work with widely used platforms in enterprise infrastructure, cloud, backup, network and email environments.",
    "Altyapınızın gerçek durumunu birlikte çıkaralım.": "Let's map the real state of your infrastructure.",
    "Sunucu, yedek, ağ, ERP ve kamera sistemlerinizi değerlendirip uygulanabilir bir yol haritası hazırlayalım.": "Let's assess your servers, backups, network, ERP and camera systems and prepare a practical roadmap.",

    "Ana Sayfa / Çözümler": "Home / Solutions",
    "Altyapı, bulut, mail, backup ve güvenliği tek mimaride toplayan çözümler.": "Solutions that bring infrastructure, cloud, mail, backup and security into one architecture.",
    "Erbilir, işletmenin günlük çalışmasını taşıyan kritik sistemleri parça parça değil, birlikte ele alır. Sunucu, Microsoft 365, bulut backup, firewall, kamera, ERP ve özel yazılım süreçlerinde ölçülebilir bir yol haritası çıkarır.": "Erbilir handles the critical systems that keep daily operations running as one architecture, not as isolated parts. We create a measurable roadmap for servers, Microsoft 365, cloud backup, firewall, cameras, ERP and custom software.",
    "Çözüm yaklaşımı": "Solution approach",
    "Teknik ürün listesi değil, çalışan işletme altyapısı.": "Not a technical product list, a working business infrastructure.",
    "Yurt dışındaki kurumsal MSP yaklaşımında olduğu gibi önce iş sürekliliği, veri güvenliği, kullanıcı deneyimi ve yönetilebilirlik hedeflerini netleştiririz. Sonra donanım, bulut, yedekleme ve yazılım kararlarını bu hedefe göre bağlarız.": "Like mature managed service providers abroad, we first clarify business continuity, data security, user experience and manageability goals. Then we align hardware, cloud, backup and software decisions to those goals.",
    "sunucu, mail ve yedek": "server, mail and backup",
    "mail geçişi ve güvenlik": "mail migration and security",
    "felaket kurtarma planı": "disaster recovery plan",
    "Çözüm portföyü": "Solution portfolio",
    "KOBİ ve kurumsal ekiplerin en çok ihtiyaç duyduğu altyapı, bulut, güvenlik ve yazılım başlıklarını tek teknik yönetim altında toplarız.": "We bring infrastructure, cloud, security and software needs for SMB and corporate teams under one technical management model.",
    "Altyapı yönetimi": "Infrastructure management",
    "KOBİ Teknoloji Omurgası": "SMB Technology Backbone",
    "Domain, dosya paylaşımı, güvenli ağ, kullanıcı yönetimi ve yedekleme yapısını tek plan altında toplarız.": "We bring domain, file sharing, secure network, user management and backup structure under one plan.",
    "Felaket Kurtarma": "Disaster Recovery",
    "Yerel yedek, bulut kopya, geri dönüş testi ve periyodik kontrol ile verinin gerçekten geri dönebilir olmasını sağlarız.": "We make sure data can actually be restored with local backup, cloud copy, restore testing and periodic checks.",
    "Güvenli erişim": "Secure access",
    "Firewall, VPN ve Kamera": "Firewall, VPN and Cameras",
    "IP kamera, NVR, firewall, VPN ve ağ segmentasyonunu birlikte tasarlayarak güvenli izleme ve erişim kurgusu oluştururuz.": "We design IP cameras, NVR, firewall, VPN and network segmentation together for secure monitoring and access.",
    "İş süreçleri": "Business processes",
    "Netsis ve ERP Entegrasyonu": "Netsis and ERP Integration",
    "Netsis raporları, veri aktarımı, özel ekranlar ve dış sistem bağlantılarıyla ERP verisini kullanılabilir hale getiririz.": "We make ERP data usable with Netsis reports, data transfer, custom screens and external system connections.",
    "Bulut geçişi": "Cloud migration",
    "Microsoft 365 ve Mail Taşıma": "Microsoft 365 and Mail Migration",
    "Alan adı, kullanıcı, posta kutusu, arşiv, güvenlik ve DNS adımlarıyla Microsoft 365 mail geçiş sürecini uçtan uca planlarız.": "We plan Microsoft 365 mail migration end to end, including domain, users, mailboxes, archives, security and DNS steps.",
    "Sürekli destek": "Continuous support",
    "Bakım ve İzleme": "Maintenance and Monitoring",
    "Periyodik kontrol, güncelleme, kullanıcı desteği ve kritik sorunlarda öncelikli müdahale ile sistemi canlı tutarız.": "We keep systems running with periodic checks, updates, user support and priority response for critical issues.",
    "Bulut, mail ve yedekleme tarafında güçlü kurgu.": "A strong setup for cloud, mail and backup.",
    "Microsoft 365 geçişi, bulut sunucu ve bulut backup süreçlerinde DNS, lisans, kullanıcı, veri ve güvenlik adımlarını birlikte planlarız.": "We plan DNS, licensing, users, data and security together for Microsoft 365 migration, cloud server and cloud backup projects.",
    "Bulut sunucu": "Cloud server",
    "Server, Cloud Server ve Sanallaştırma": "Server, Cloud Server and Virtualization",
    "Mevcut fiziksel sunucu, Hyper-V, VMware veya cloud server yapısını iş yüküne göre tasarlarız. Geçişlerde kesinti penceresi, geri dönüş planı ve yetki yapısı netleşir.": "We design physical server, Hyper-V, VMware or cloud server structures based on workload. Downtime windows, rollback plans and permissions are clarified for migrations.",
    "Windows Server ve domain geçişi": "Windows Server and domain migration",
    "VMware, Hyper-V ve cloud server": "VMware, Hyper-V and cloud server",
    "Dosya, uygulama ve kullanıcı taşıma": "File, application and user migration",
    "Veri Koruma ve Microsoft 365 Backup": "Data Protection and Microsoft 365 Backup",
    "Sunucu, NAS, dosya ve Microsoft 365 posta kutuları için katmanlı yedekleme yaklaşımı kurarız. Amaç sadece yedek almak değil, geri dönüşü test edilebilir hale getirmektir.": "We build layered backup for servers, NAS, files and Microsoft 365 mailboxes. The goal is not just to take backups, but to make restore testable.",
    "Yerel + bulut kopya": "Local + cloud copy",
    "Ransomware dayanımı": "Ransomware resilience",
    "Geri dönüş testi ve raporlama": "Restore testing and reporting",
    "Mail geçişi": "Mail migration",
    "Microsoft 365 Mail ve Modern İş Yeri": "Microsoft 365 Mail and Modern Workplace",
    "Alan adı, DNS, posta kutusu, arşiv, lisans, güvenlik politikası ve kullanıcı geçişlerini tek planla yürütürüz. Geçiş sonrası kullanıcı desteği ve dokümantasyon bırakırız.": "We manage domain, DNS, mailboxes, archives, licenses, security policies and user transitions under one plan. We leave user support and documentation after migration.",
    "Exchange Online geçişi": "Exchange Online migration",
    "DNS, SPF, DKIM, DMARC": "DNS, SPF, DKIM, DMARC",
    "Kullanıcı ve posta kutusu taşıma": "User and mailbox migration",
    "Güvenlik ve süreklilik": "Security and continuity",
    "Firewall, VPN, kamera ve ağ güvenliği aynı resimde değerlendirilir.": "Firewall, VPN, cameras and network security are evaluated together.",
    "FortiGate, Berqnet, VLAN, VPN, IP kamera, NVR ve kullanıcı bazlı erişim ihtiyaçlarını ayrı ayrı değil; işletmenin güvenli uzaktan erişim, kayıt, izleme ve operasyon akışına göre kurgularız.": "We design FortiGate, Berqnet, VLAN, VPN, IP camera, NVR and user-based access needs around secure remote access, recording, monitoring and operations.",
    "Ağ güvenliği": "Network security",
    "Firewall, VLAN, VPN, Wi-Fi ve kullanıcı politikaları.": "Firewall, VLAN, VPN, Wi-Fi and user policies.",
    "Kamera ve kayıt": "Camera and recording",
    "IP kamera, NVR, uzaktan izleme ve yetki yönetimi.": "IP camera, NVR, remote viewing and permission management.",
    "İzlenebilir destek": "Traceable support",
    "Bakım, kontrol listesi, güncelleme ve raporlama.": "Maintenance, checklists, updates and reporting.",
    "Çözüm mimarisi nasıl hazırlanır?": "How is the solution architecture prepared?",
    "Önce mevcut yapıyı ve iş akışını inceleriz. Sonra riskleri sınıflandırır, yatırım sırasını belirler ve işletmenin günlük operasyonunu aksatmayacak geçiş planı çıkarırız.": "We first review the current structure and workflows. Then we classify risks, prioritize investments and create a migration plan that does not disrupt daily operations.",
    "Keşif ve envanter": "Assessment and inventory",
    "Sunucu, ağ, yedek, mail, ERP, kamera ve kullanıcı bağımlılıkları çıkarılır.": "Server, network, backup, mail, ERP, camera and user dependencies are mapped.",
    "Risk ve öncelik": "Risk and priority",
    "Veri kaybı, kesinti, lisans, güvenlik ve performans riskleri sıralanır.": "Data loss, downtime, licensing, security and performance risks are prioritized.",
    "Mimari ve teklif": "Architecture and proposal",
    "Donanım, bulut, yazılım, yedekleme ve bakım modeli tek dokümanda netleşir.": "Hardware, cloud, software, backup and maintenance model are clarified in one document.",
    "Devreye alma": "Go-live",
    "Kurulum, geçiş, test, kullanıcı bilgilendirme ve teslim dokümanı hazırlanır.": "Installation, migration, testing, user briefing and handover documentation are prepared.",
    "Mail, sunucu, yedek ve güvenliği birlikte masaya yatıralım.": "Let's review mail, servers, backup and security together.",
    "Mevcut yapınızı inceleyip hangi adımın önce gelmesi gerektiğini net bir teknik planla çıkaralım.": "Let's review your current structure and define which step should come first with a clear technical plan.",
    "Çözüm Planla": "Plan a Solution",
    "Neden Erbilir?": "Why Erbilir?",
    "Kurulumdan sonra da yönetilebilir kalan sistemler.": "Systems that remain manageable after installation.",
    "İyi altyapı sadece devreye alındığı gün değil, aylar sonra da anlaşılır, yedeklenir, izlenir ve geliştirilebilir olmalıdır. Erbilir projelerinde teknik çıktı kadar operasyon devamlılığına da odaklanır.": "Good infrastructure should remain understandable, backed up, monitored and improvable months after go-live. Erbilir focuses on operational continuity as much as technical delivery.",
    "Net kapsam": "Clear scope",
    "İş başlamadan önce sorumluluk, takvim ve teslim çıktıları yazılı hale gelir.": "Responsibilities, timeline and deliverables are documented before work begins.",
    "Test edilmiş yedek": "Tested backup",
    "Backup kurgusu sadece alınan yedekle değil, geri dönüş senaryosuyla değerlendirilir.": "Backup design is evaluated not only by taken backups, but by restore scenarios.",
    "Dokümantasyon": "Documentation",
    "Sunucu, ağ, mail, kamera ve ERP tarafında yapılan işler teslim sonrası takip edilebilir kalır.": "Server, network, mail, camera and ERP work remains traceable after handover.",
    "Tek muhatap": "Single point of contact",
    "Bulut, donanım, güvenlik ve yazılım başlıkları aynı teknik yönetim altında toplanır.": "Cloud, hardware, security and software topics are managed under one technical ownership.",

    "Ana Sayfa / Projeler": "Home / Projects",
    "Planlı geçiş, ölçülebilir sonuç, sürdürülebilir destek.": "Planned migration, measurable results, sustainable support.",
    "Her projede önce iş sürekliliği, veri güvenliği ve kullanıcı etkisini dikkate alırız. Kurulumdan sonra sistemin izlenebilir ve yönetilebilir kalmasını sağlarız.": "In every project, we first consider business continuity, data security and user impact. After deployment, we keep the system monitorable and manageable.",
    "Geçiş projesi": "Migration project",
    "Sunucu Yenileme ve Sanallaştırma": "Server Renewal and Virtualization",
    "Backup Mimari Kurulumu": "Backup Architecture Setup",
    "Kamera Sistemi Modernizasyonu": "Camera System Modernization",
    "Netsis Raporlama": "Netsis Reporting",
    "Özel İş Takip Yazılımı": "Custom Business Tracking Software",
    "Network Güvenliği": "Network Security",
    "Proje yönetim yaklaşımı": "Project management approach",
    "Teknik işi görünür hale getiren net aşamalarla ilerleriz.": "We proceed with clear phases that make technical work visible.",
    "1. Analiz": "1. Analysis",
    "2. Planlama": "2. Planning",
    "3. Devreye Alma": "3. Go-live",

    "Ana Sayfa / Hizmetler": "Home / Services",
    "İşletmeler için uçtan uca bilgi işlem hizmetleri.": "End-to-end IT services for businesses.",
    "Sunucu Kurulum, Taşıma ve Bulut Sunucu": "Server Setup, Migration and Cloud Server",
    "Yedekleme, Bulut Backup ve Microsoft 365": "Backup, Cloud Backup and Microsoft 365",
    "Network ve Güvenlik": "Network and Security",
    "Kamera ve Güvenlik Sistemleri": "Camera and Security Systems",
    "Netsis ERP ve Özel Yazılım": "Netsis ERP and Custom Software",
    "Hangi sistemden başlayacağınızı bilmiyorsanız keşifle başlayalım.": "If you are not sure where to start, let's begin with an assessment.",
    "Keşif Talep Et": "Request Assessment"
  }
};

extraTranslations.de = {};
extraTranslations.ru = {};
extraTranslations.ar = {};
Object.keys(extraTranslations.en).forEach((key) => {
  extraTranslations.de[key] = extraTranslations.de[key] || extraTranslations.en[key];
  extraTranslations.ru[key] = extraTranslations.ru[key] || extraTranslations.en[key];
  extraTranslations.ar[key] = extraTranslations.ar[key] || extraTranslations.en[key];
});
Object.assign(translations.en, extraTranslations.en);
Object.assign(translations.de, extraTranslations.de);
Object.assign(translations.ru, extraTranslations.ru);
Object.assign(translations.ar, extraTranslations.ar);

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
