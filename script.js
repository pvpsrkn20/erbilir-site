const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

const normalizePath = (value) => {
  if (!value || value === "/" || value === "index.html") return "/";
  return value
    .replace(location.origin, "")
    .replace(/^\//, "")
    .replace(/\.html$/, "")
    .replace(/\/$/, "");
};
const current = normalizePath(location.pathname);
document.querySelectorAll(".nav-links a").forEach((item) => {
  const href = normalizePath(item.getAttribute("href"));
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

const completeTranslations = {
  en: {
    "Dünyada kabul görmüş kurumsal platformlarla uyumlu altyapı.": "Infrastructure aligned with globally trusted enterprise platforms.",
    "Erbilir projelerinde marka bağımsız düşünür; işletmenin ihtiyacına göre sunucu, bulut, yedekleme, firewall, ağ, kamera ve ERP teknolojilerini aynı mimaride birleştirir.": "Erbilir designs vendor-neutral projects and combines server, cloud, backup, firewall, network, camera and ERP technologies in one architecture according to business needs.",
    "Çözüm Detayları": "Solution Details",
    "Bulut ve mail": "Cloud and mail",
    "Bulut platformu": "Cloud platform",
    "Sanallaştırma": "Virtualization",
    "Sunucu altyapısı": "Server infrastructure",
    "Hiper bütünleşik": "Hyperconverged",
    "NAS ve backup": "NAS and backup",
    "Ağ ve kamera": "Network and camera",
    "ERP ve güvenlik": "ERP and security",
    "Exchange Online, kullanıcı geçişi, güvenlik kayıtları ve posta kutusu yönetimi.": "Exchange Online, user migration, security records and mailbox management.",
    "Cloud server, güvenli erişim, yedekleme ve hibrit altyapı senaryoları.": "Cloud server, secure access, backup and hybrid infrastructure scenarios.",
    "Sunucu konsolidasyonu, kaynak planlama, kontrollü geçiş ve bakım.": "Server consolidation, resource planning, controlled migration and maintenance.",
    "Fiziksel sunucu, storage, donanım yenileme ve kapasite planlama.": "Physical servers, storage, hardware renewal and capacity planning.",
    "Yüksek erişilebilirlik, yedekleme ve merkezi yönetim odaklı altyapılar.": "High-availability infrastructure focused on backup and central management.",
    "Yerel yedek, offsite kopya, dosya paylaşımı ve geri dönüş senaryoları.": "Local backup, offsite copies, file sharing and restore scenarios.",
    "Sunucu, dosya ve Microsoft 365 için katmanlı yedekleme yaklaşımı.": "Layered backup for servers, files and Microsoft 365.",
    "VPN, VLAN, kullanıcı politikaları ve güvenli uzaktan erişim kurgusu.": "VPN, VLAN, user policies and secure remote access design.",
    "Switch, Wi-Fi, IP kamera, NVR ve güvenli izleme altyapısı.": "Switching, Wi-Fi, IP cameras, NVR and secure monitoring infrastructure.",
    "ERP raporlama, özel entegrasyon ve uç nokta güvenliği ihtiyaçları.": "ERP reporting, custom integration and endpoint security needs.",
    "KOBİ ve kurumsal ekiplerin en çok ihtiyaç duyduğu altyapı, bulut, güvenlik, ERP ve yazılım başlıklarını ölçülebilir çıktılarla tek teknik yönetim altında toplarız.": "We bring the infrastructure, cloud, security, ERP and software needs of SMB and corporate teams under one technical management model with measurable deliverables.",
    "Domain, dosya paylaşımı, kullanıcı yetkileri, güvenli ağ, yedekleme ve temel sunucu servisleri birlikte ele alınır. Amaç işletmenin günlük çalışmasını taşıyan omurgayı sade, belgeli ve yönetilebilir hale getirmektir.": "Domain, file sharing, user permissions, secure network, backup and core server services are handled together. The goal is to make the backbone of daily operations simple, documented and manageable.",
    "Mevcut sistem envanteri ve risk haritası": "Current system inventory and risk map",
    "Sunucu, kullanıcı, yetki ve dosya yapısı düzeni": "Server, user, permission and file structure organization",
    "Bakım, izleme ve teslim dokümantasyonu": "Maintenance, monitoring and handover documentation",
    "Sunucu geçişi": "Server migration",
    "Fiziksel sunucu yenileme, Hyper-V, VMware veya cloud server geçişlerinde kesinti penceresi, geri dönüş planı ve kullanıcı etkisi önceden netleştirilir.": "For physical server renewal, Hyper-V, VMware or cloud server migrations, downtime windows, rollback plans and user impact are clarified in advance.",
    "Uygulama ve veri bağımlılığı analizi": "Application and data dependency analysis",
    "Cloud server veya lokal sunucu mimarisi": "Cloud server or local server architecture",
    "Test, canlı geçiş ve teslim planı": "Test, go-live and handover plan",
    "Veri güvenliği": "Data security",
    "Yedekleme yapısı sadece dosya kopyası olarak değil, geri dönüşü test edilebilir bir iş sürekliliği sistemi olarak tasarlanır.": "Backup is designed not as simple file copying, but as a business continuity system with testable restores.",
    "Yerel NAS ve offsite bulut kopya": "Local NAS and offsite cloud copy",
    "Microsoft 365 posta kutusu yedeği": "Microsoft 365 mailbox backup",
    "Periyodik geri dönüş testi ve rapor": "Periodic restore test and report",
    "Firewall, VPN ve Network Güvenliği": "Firewall, VPN and Network Security",
    "Firewall, VLAN, VPN, kablosuz ağ ve kullanıcı politikaları birlikte kurgulanır. Uzak erişim ve şube bağlantıları kontrollü hale getirilir.": "Firewall, VLAN, VPN, wireless network and user policies are designed together. Remote access and branch connections become controlled.",
    "FortiGate, Berqnet ve firewall politikaları": "FortiGate, Berqnet and firewall policies",
    "VPN, VLAN ve kullanıcı bazlı erişim": "VPN, VLAN and user-based access",
    "Wi-Fi, switch ve ağ segmentasyonu": "Wi-Fi, switches and network segmentation",
    "Alan adı, DNS, kullanıcılar, posta kutuları, arşiv ve güvenlik kayıtları tek geçiş planı içinde yürütülür. Kullanıcı tarafında kesinti ve veri kaybı riski azaltılır.": "Domain, DNS, users, mailboxes, archive and security records are managed in one migration plan. Downtime and data loss risk for users are reduced.",
    "Exchange Online geçiş planı": "Exchange Online migration plan",
    "SPF, DKIM, DMARC ve güvenlik ayarları": "SPF, DKIM, DMARC and security settings",
    "Kullanıcı desteği ve geçiş dokümanı": "User support and migration document",
    "Fiziksel güvenlik": "Physical security",
    "Kamera, NVR ve Güvenli İzleme": "Camera, NVR and Secure Monitoring",
    "Kamera sistemi IP kamera, NVR, kayıt süresi, ağ trafiği ve uzaktan izleme güvenliğiyle birlikte planlanır. Böylece sistem sadece görüntü değil, denetlenebilir kayıt üretir.": "Camera systems are planned together with IP cameras, NVR, retention time, network traffic and remote monitoring security. The system produces auditable records, not just video.",
    "Kamera noktası ve kayıt süresi planı": "Camera location and retention plan",
    "Güvenli uzaktan izleme": "Secure remote monitoring",
    "Yetki, şifre ve ağ izolasyonu": "Permissions, passwords and network isolation",
    "Özel yazılım": "Custom software",
    "İş Takip ve Operasyon Ekranları": "Business Tracking and Operations Screens",
    "Saha, servis, stok, üretim veya yönetim süreçlerinde Excel ve manuel takip yerine web tabanlı, rol bazlı ve raporlanabilir ekranlar geliştiririz.": "For field, service, stock, production or management processes, we build web-based, role-based and reportable screens instead of Excel and manual tracking.",
    "Süreç analizi ve ekran tasarımı": "Process analysis and screen design",
    "Kullanıcı rolleri ve raporlar": "User roles and reports",
    "ERP veya dış sistem entegrasyonu": "ERP or external system integration",
    "ERP süreçleri": "ERP processes",
    "Netsis ERP ve Raporlama": "Netsis ERP and Reporting",
    "Netsis tarafında rapor, veri aktarımı, özel ekran ve entegrasyon ihtiyaçlarını analiz ederek ERP verisini karar alınabilir hale getiririz.": "We analyze reporting, data transfer, custom screen and integration needs in Netsis and turn ERP data into decision-ready information.",
    "Satış, stok, cari ve finans raporları": "Sales, stock, account and finance reports",
    "SQL, veri aktarımı ve özel ekranlar": "SQL, data transfer and custom screens",
    "Kullanıcı bazlı çıktı ve yetki yapısı": "User-based outputs and permissions",
    "Ana Sayfa / Çözümler / Detaylar": "Home / Solutions / Details",
    "Her çözümün amacı, uygulama planı ve teslim çıktısı net olsun.": "Every solution should have a clear purpose, implementation plan and deliverable.",
    "İşletmeler teknoloji yatırımında sadece ürün değil, doğru sıralama, risk kontrolü ve teslim sonrası yönetilebilirlik ister. Bu sayfada temel çözüm başlıklarımızı neden gerekli oldukları ve nasıl uygulandıklarıyla özetledik.": "Businesses need not only products, but the right sequence, risk control and post-delivery manageability. This page summarizes why our core solutions are needed and how they are implemented.",
    "Detay başlıkları": "Detail topics",
    "KOBİ omurgası": "SMB backbone",
    "Server ve Cloud": "Server and Cloud",
    "Bulut Backup": "Cloud Backup",
    "Firewall ve VPN": "Firewall and VPN",
    "Microsoft 365": "Microsoft 365",
    "Kamera ve NVR": "Camera and NVR",
    "Özel Yazılım": "Custom Software",
    "Netsis ERP": "Netsis ERP",
    "Bakım ve Destek": "Maintenance and Support",
    "Neden gerekli?": "Why is it needed?",
    "Nasıl yapıyoruz?": "How do we do it?",
    "Teslim çıktısı": "Deliverable",
    "KOBİ Teknoloji Omurgası": "SMB Technology Backbone",
    "KOBİlerde sistemler zamanla parça parça büyür: dosya paylaşımı, kullanıcı yetkileri, yedekleme, modem, switch, kamera ve mail ayrı ayrı yönetilir. Bu yapı büyüdükçe kesinti ve veri kaybı riski artar.": "In SMBs, systems often grow piece by piece: file sharing, user permissions, backup, modem, switch, cameras and mail are managed separately. As this grows, downtime and data loss risk increase.",
    "Sunucu, ağ, kullanıcı, dosya, mail, kamera ve yedek yapısını envantere alırız.": "We inventory servers, network, users, files, mail, cameras and backups.",
    "Kritik servisleri, yetki yapısını ve veri risklerini sınıflandırırız.": "We classify critical services, permissions and data risks.",
    "Bakım, izleme, yedekleme ve dokümantasyon standardı oluştururuz.": "We create maintenance, monitoring, backup and documentation standards.",
    "Envanter listesi, risk haritası, önerilen mimari, bakım planı ve teslim dokümantasyonu.": "Inventory list, risk map, proposed architecture, maintenance plan and handover documentation.",
    "Server, Cloud Server ve Sanallaştırma": "Server, Cloud Server and Virtualization",
    "Eski fiziksel sunucular, plansız cloud geçişleri veya dağınık sanallaştırma yapıları performans, güvenlik ve süreklilik riski üretir. Doğru mimari uygulama ve veri bağımlılıklarına göre kurulmalıdır.": "Old physical servers, unplanned cloud moves or scattered virtualization create performance, security and continuity risks. The right architecture must be based on application and data dependencies.",
    "Mevcut sunucu, uygulama, kullanıcı ve veri bağımlılıklarını çıkarırız.": "We map current server, application, user and data dependencies.",
    "Hyper-V, VMware, cloud server veya hibrit mimari için uygun tasarımı belirleriz.": "We define the right design for Hyper-V, VMware, cloud server or hybrid architecture.",
    "Kesinti penceresi, geri dönüş planı, test ve canlı geçiş adımlarını hazırlarız.": "We prepare downtime windows, rollback plan, testing and go-live steps.",
    "Kurulu sunucu veya cloud mimarisi, taşıma planı, test sonucu, yetki yapısı ve sistem dokümanı.": "Deployed server or cloud architecture, migration plan, test result, permission structure and system document.",
    "Bulut Backup ve Felaket Kurtarma": "Cloud Backup and Disaster Recovery",
    "Yedek alınması tek başına yeterli değildir. Dosya, sunucu, NAS ve Microsoft 365 verisinin ne kadar sürede geri döneceği test edilmeden iş sürekliliği garanti edilemez.": "Taking backups alone is not enough. Business continuity cannot be guaranteed unless restore time for files, servers, NAS and Microsoft 365 data is tested.",
    "Kritik veri ve servisleri önem seviyesine göre ayırırız.": "We classify critical data and services by importance.",
    "Yerel yedek, offsite kopya, bulut backup ve Microsoft 365 backup senaryosunu kurarız.": "We set up local backup, offsite copy, cloud backup and Microsoft 365 backup scenarios.",
    "Geri dönüş testi, raporlama ve periyodik kontrol planı oluştururuz.": "We create restore testing, reporting and periodic control plans.",
    "Yedekleme mimarisi, geri dönüş testi, rapor, saklama politikası ve sorumluluk listesi.": "Backup architecture, restore test, report, retention policy and responsibility list.",
    "Güvenlik ve süreklilik": "Security and continuity",
    "Firewall, VPN ve Network": "Firewall, VPN and Network",
    "Ağ güvenliği sadece firewall cihazı değildir. Kullanıcı, şube, Wi-Fi, kamera, VPN ve sunucu erişimleri doğru ayrılmadığında içeriden veya dışarıdan risk büyür.": "Network security is not just a firewall device. Risk grows when users, branches, Wi-Fi, cameras, VPN and server access are not separated properly.",
    "Mevcut ağ topolojisi, internet çıkışı, kullanıcı grupları ve kritik servisleri inceleriz.": "We review current network topology, internet access, user groups and critical services.",
    "FortiGate, Berqnet, VLAN, VPN, Wi-Fi ve erişim politikalarını işletme ihtiyacına göre kurgularız.": "We design FortiGate, Berqnet, VLAN, VPN, Wi-Fi and access policies according to business needs.",
    "Şube, uzaktan çalışan ve kamera erişimlerini ayrı güvenlik seviyelerine ayırırız.": "We separate branch, remote worker and camera access into different security levels.",
    "Firewall politika listesi, VPN erişim planı, ağ segmentasyonu ve yönetim dokümanı.": "Firewall policy list, VPN access plan, network segmentation and management document.",
    "Eski mail sistemleri güvenlik, kota, arşiv, mobil kullanım ve süreklilik tarafında işletmeyi yavaşlatır. Microsoft 365 geçişi e-postayı daha güvenli ve merkezi hale getirir.": "Legacy mail systems slow the business down in security, quota, archive, mobile usage and continuity. Microsoft 365 migration makes email more secure and centralized.",
    "Alan adı, DNS, posta kutusu, arşiv ve kullanıcı listesini çıkarırız.": "We map the domain, DNS, mailboxes, archives and user list.",
    "SPF, DKIM, DMARC, lisans ve güvenlik ayarlarını planlarız.": "We plan SPF, DKIM, DMARC, licenses and security settings.",
    "Geçiş günü kullanıcı iletişimi, test ve destek sürecini yürütürüz.": "On migration day, we manage user communication, testing and support.",
    "Çalışan posta kutuları, DNS güvenlik kayıtları, kullanıcı geçiş listesi ve destek dokümanı.": "Working mailboxes, DNS security records, user migration list and support document.",
    "Kamera sistemi sadece görüntü almak için değil, kayıt saklama, yetkili izleme ve olay sonrası geri dönük inceleme için doğru planlanmalıdır.": "A camera system must be planned not only for live video, but also for retention, authorized viewing and post-incident review.",
    "Kamera noktaları, kör alanlar, kayıt süresi ve disk ihtiyacını belirleriz.": "We define camera locations, blind spots, retention time and disk needs.",
    "NVR, IP kamera, ağ ve güvenli uzaktan erişim yapısını birlikte tasarlarız.": "We design NVR, IP cameras, network and secure remote access together.",
    "Mobil izleme ve kullanıcı yetkilerini kontrollü şekilde devreye alırız.": "We deploy mobile monitoring and user permissions in a controlled way.",
    "Kamera yerleşim planı, kayıt politikası, kullanıcı yetkileri ve uzaktan erişim bilgileri.": "Camera layout, recording policy, user permissions and remote access details.",
    "Excel ve manuel takipler büyüyen işletmede veri kaybı, yetki karmaşması ve raporlama gecikmesi oluşturur.": "Excel and manual tracking create data loss, permission confusion and reporting delays as the business grows.",
    "Saha, servis, stok, üretim veya operasyon akışını analiz ederiz.": "We analyze field, service, stock, production or operations workflows.",
    "Rol bazlı ekranlar, kayıt formları ve rapor ihtiyaçlarını çıkarırız.": "We define role-based screens, entry forms and reporting needs.",
    "ERP veya dış sistem bağlantısı gerekiyorsa entegrasyon kurgusunu hazırlarız.": "If ERP or external system connection is needed, we prepare the integration design.",
    "Web tabanlı ekranlar, kullanıcı yetkileri, raporlar, test kaydı ve kullanım dokümanı.": "Web-based screens, user permissions, reports, test records and usage document.",
    "ERP verisi doğru raporlanmadığında satış, stok, cari ve finans kararları geç alınır. Netsis verisini okunabilir raporlara taşımak yönetim hızını artırır.": "When ERP data is not reported correctly, sales, stock, account and finance decisions are delayed. Turning Netsis data into readable reports speeds up management decisions.",
    "İstenen rapor, veri kaynağı ve kullanıcı rolünü netleştiririz.": "We clarify the requested report, data source and user role.",
    "Netsis tabloları, aktarım ihtiyaçları ve dış sistem bağlantılarını analiz ederiz.": "We analyze Netsis tables, transfer needs and external system connections.",
    "Rapor, özel ekran veya entegrasyon çıktısını test ederek teslim ederiz.": "We test and deliver the report, custom screen or integration output.",
    "Rapor seti, veri aktarım kurgusu, özel ekranlar ve kullanıcı bazlı çıktı düzeni.": "Report set, data transfer design, custom screens and user-based output structure.",
    "Bakım, İzleme ve Teknik Destek": "Maintenance, Monitoring and Technical Support",
    "Kurulumdan sonra izlenmeyen sistem zamanla tekrar dağılır. Bakım ve izleme, sorunları kullanıcı fark etmeden önce yakalamayı hedefler.": "Systems that are not monitored after deployment become scattered again over time. Maintenance and monitoring aim to catch issues before users notice them.",
    "Sunucu, yedek, güvenlik, mail ve ağ için kontrol listesi hazırlarız.": "We prepare checklists for servers, backup, security, mail and network.",
    "Periyodik bakım, güncelleme ve kapasite kontrolleri yaparız.": "We perform periodic maintenance, updates and capacity checks.",
    "Kritik sorunlarda öncelikli müdahale ve takip süreci yürütürüz.": "For critical issues, we run priority response and follow-up.",
    "Bakım raporu, risk notları, önerilen aksiyonlar ve takip edilen destek kayıtları.": "Maintenance report, risk notes, recommended actions and tracked support records.",
    "Hangi çözümün önce gelmesi gerektiğini birlikte netleştirelim.": "Let's clarify which solution should come first.",
    "Mevcut yapınızı değerlendirip yatırım sırasını, riskleri ve uygulanabilir geçiş planını çıkaralım.": "Let's assess your current environment and define the investment order, risks and practical migration plan.",
    "Anonim proje senaryoları": "Anonymous project scenarios",
    "Firma adı paylaşmadan, sahada sık gördüğümüz ihtiyaçları vaka mantığıyla ele alırız.": "Without sharing company names, we present common field needs as case scenarios.",
    "Üretim firması altyapı yenileme": "Manufacturing company infrastructure renewal",
    "Eski fiziksel sunucu, dosya paylaşımı ve kullanıcı yetkileri yeni sanallaştırılmış yapıya taşındı.": "Old physical server, file sharing and user permissions were moved to a new virtualized structure.",
    "Mail geçiş ve güvenlik": "Mail migration and security",
    "Alan adı DNS, posta kutuları, arşiv ve güvenlik kayıtları Microsoft 365 yapısına kontrollü aktarıldı.": "Domain DNS, mailboxes, archives and security records were migrated to Microsoft 365 in a controlled way.",
    "Backup ve kurtarma planı": "Backup and recovery plan",
    "Yerel NAS, bulut kopya ve geri dönüş testiyle veri koruma planı raporlanabilir hale getirildi.": "The data protection plan became reportable with local NAS, cloud copy and restore testing.",
    "Firewall ve kamera modernizasyonu": "Firewall and camera modernization",
    "VPN, VLAN, IP kamera, NVR ve uzaktan izleme güvenli erişim politikasıyla birlikte devreye alındı.": "VPN, VLAN, IP cameras, NVR and remote monitoring were deployed with a secure access policy.",
    "Sunucu ve altyapı": "Server and infrastructure",
    "Yedekleme ve bulut backup": "Backup and cloud backup",
    "Kamera sistemleri": "Camera systems",
    "Genel destek": "General support",
    "Ad Soyad / Firma": "Name / Company",
    "Telefon": "Phone",
    "E-posta": "Email",
    "İhtiyacınızı kısaca yazın": "Briefly describe your need",
    "Talep Gönder": "Send Request",
    "Menüyü aç": "Open menu",
    "Dil seçimi": "Language selection",
    "Teknoloji ekosistemi markaları": "Technology ecosystem brands"
  }
};

completeTranslations.de = {
  ...completeTranslations.en,
  "Dünyada kabul görmüş kurumsal platformlarla uyumlu altyapı.": "Infrastruktur, die mit weltweit anerkannten Unternehmensplattformen kompatibel ist.",
  "Erbilir projelerinde marka bağımsız düşünür; işletmenin ihtiyacına göre sunucu, bulut, yedekleme, firewall, ağ, kamera ve ERP teknolojilerini aynı mimaride birleştirir.": "Erbilir plant herstellerunabhängig und verbindet Server-, Cloud-, Backup-, Firewall-, Netzwerk-, Kamera- und ERP-Technologien je nach Bedarf in einer Architektur.",
  "Çözüm Detayları": "Lösungsdetails",
  "Bulut ve mail": "Cloud und Mail",
  "Bulut platformu": "Cloud-Plattform",
  "Sanallaştırma": "Virtualisierung",
  "Sunucu altyapısı": "Serverinfrastruktur",
  "Hiper bütünleşik": "Hyperkonvergent",
  "NAS ve backup": "NAS und Backup",
  "Veri koruma": "Datenschutz",
  "Ağ ve kamera": "Netzwerk und Kamera",
  "ERP ve güvenlik": "ERP und Sicherheit",
  "KOBİ ve kurumsal ekiplerin en çok ihtiyaç duyduğu altyapı, bulut, güvenlik, ERP ve yazılım başlıklarını ölçülebilir çıktılarla tek teknik yönetim altında toplarız.": "Wir bündeln Infrastruktur, Cloud, Sicherheit, ERP und Software für KMU und Unternehmen mit messbaren Ergebnissen unter einer technischen Verantwortung.",
  "Ana Sayfa / Çözümler / Detaylar": "Startseite / Lösungen / Details",
  "Her çözümün amacı, uygulama planı ve teslim çıktısı net olsun.": "Ziel, Umsetzungsplan und Ergebnis jeder Lösung sollen klar sein.",
  "Detay başlıkları": "Detailthemen",
  "KOBİ omurgası": "KMU-Rückgrat",
  "Server ve Cloud": "Server und Cloud",
  "Bulut Backup": "Cloud-Backup",
  "Firewall ve VPN": "Firewall und VPN",
  "Kamera ve NVR": "Kamera und NVR",
  "Özel Yazılım": "Individualsoftware",
  "Bakım ve Destek": "Wartung und Support",
  "Neden gerekli?": "Warum ist das nötig?",
  "Nasıl yapıyoruz?": "Wie setzen wir es um?",
  "Teslim çıktısı": "Lieferergebnis",
  "KOBİ Teknoloji Omurgası": "KMU-Technologie-Rückgrat",
  "Server, Cloud Server ve Sanallaştırma": "Server, Cloud-Server und Virtualisierung",
  "Bulut Backup ve Felaket Kurtarma": "Cloud-Backup und Notfallwiederherstellung",
  "Firewall, VPN ve Network": "Firewall, VPN und Netzwerk",
  "Kamera, NVR ve Güvenli İzleme": "Kamera, NVR und sichere Überwachung",
  "İş Takip ve Operasyon Ekranları": "Arbeitsverfolgung und Betriebsoberflächen",
  "Netsis ERP ve Raporlama": "Netsis ERP und Reporting",
  "Bakım, İzleme ve Teknik Destek": "Wartung, Monitoring und technischer Support",
  "Hangi çözümün önce gelmesi gerektiğini birlikte netleştirelim.": "Lassen Sie uns klären, welche Lösung zuerst kommen sollte.",
  "Anonim proje senaryoları": "Anonyme Projektszenarien",
  "Firma adı paylaşmadan, sahada sık gördüğümüz ihtiyaçları vaka mantığıyla ele alırız.": "Ohne Firmennamen zu nennen, behandeln wir häufige Anforderungen als Fallbeispiele.",
  "Üretim firması altyapı yenileme": "Infrastrukturerneuerung eines Produktionsbetriebs",
  "Mail geçiş ve güvenlik": "Mailmigration und Sicherheit",
  "Backup ve kurtarma planı": "Backup- und Wiederherstellungsplan",
  "Firewall ve kamera modernizasyonu": "Firewall- und Kameramodernisierung",
  "Sunucu ve altyapı": "Server und Infrastruktur",
  "Yedekleme ve bulut backup": "Backup und Cloud-Backup",
  "Kamera sistemleri": "Kamerasysteme",
  "Özel yazılım": "Individualsoftware",
  "Genel destek": "Allgemeiner Support",
  "Ad Soyad / Firma": "Name / Firma",
  "Telefon": "Telefon",
  "E-posta": "E-Mail",
  "İhtiyacınızı kısaca yazın": "Beschreiben Sie kurz Ihren Bedarf",
  "Talep Gönder": "Anfrage senden",
  "Menüyü aç": "Menü öffnen",
  "Dil seçimi": "Sprachauswahl",
  "Teknoloji ekosistemi markaları": "Marken im Technologie-Ökosystem"
};

completeTranslations.ru = {
  ...completeTranslations.en,
  "Dünyada kabul görmüş kurumsal platformlarla uyumlu altyapı.": "Инфраструктура, совместимая с признанными корпоративными платформами.",
  "Erbilir projelerinde marka bağımsız düşünür; işletmenin ihtiyacına göre sunucu, bulut, yedekleme, firewall, ağ, kamera ve ERP teknolojilerini aynı mimaride birleştirir.": "Erbilir проектирует независимо от брендов и объединяет серверы, облако, резервное копирование, firewall, сеть, камеры и ERP в одной архитектуре под задачи бизнеса.",
  "Çözüm Detayları": "Детали решений",
  "Bulut ve mail": "Облако и почта",
  "Bulut platformu": "Облачная платформа",
  "Sanallaştırma": "Виртуализация",
  "Sunucu altyapısı": "Серверная инфраструктура",
  "Hiper bütünleşik": "Гиперконвергентная",
  "NAS ve backup": "NAS и backup",
  "Veri koruma": "Защита данных",
  "Ağ ve kamera": "Сеть и камеры",
  "ERP ve güvenlik": "ERP и безопасность",
  "KOBİ ve kurumsal ekiplerin en çok ihtiyaç duyduğu altyapı, bulut, güvenlik, ERP ve yazılım başlıklarını ölçülebilir çıktılarla tek teknik yönetim altında toplarız.": "Мы объединяем инфраструктуру, облако, безопасность, ERP и ПО для малого и корпоративного бизнеса под единым техническим управлением с измеримыми результатами.",
  "Ana Sayfa / Çözümler / Detaylar": "Главная / Решения / Детали",
  "Her çözümün amacı, uygulama planı ve teslim çıktısı net olsun.": "У каждой услуги должны быть ясная цель, план внедрения и результат.",
  "Detay başlıkları": "Разделы деталей",
  "KOBİ omurgası": "Основа SMB",
  "Server ve Cloud": "Сервер и облако",
  "Bulut Backup": "Облачный backup",
  "Firewall ve VPN": "Firewall и VPN",
  "Kamera ve NVR": "Камеры и NVR",
  "Özel Yazılım": "Индивидуальное ПО",
  "Bakım ve Destek": "Обслуживание и поддержка",
  "Neden gerekli?": "Зачем это нужно?",
  "Nasıl yapıyoruz?": "Как мы это делаем?",
  "Teslim çıktısı": "Результат",
  "KOBİ Teknoloji Omurgası": "Технологическая основа SMB",
  "Server, Cloud Server ve Sanallaştırma": "Серверы, cloud server и виртуализация",
  "Bulut Backup ve Felaket Kurtarma": "Облачный backup и аварийное восстановление",
  "Firewall, VPN ve Network": "Firewall, VPN и сеть",
  "Kamera, NVR ve Güvenli İzleme": "Камеры, NVR и безопасный просмотр",
  "İş Takip ve Operasyon Ekranları": "Экраны учета работ и операций",
  "Netsis ERP ve Raporlama": "Netsis ERP и отчетность",
  "Bakım, İzleme ve Teknik Destek": "Обслуживание, мониторинг и техподдержка",
  "Hangi çözümün önce gelmesi gerektiğini birlikte netleştirelim.": "Давайте определим, какое решение нужно внедрить первым.",
  "Anonim proje senaryoları": "Анонимные проектные сценарии",
  "Firma adı paylaşmadan, sahada sık gördüğümüz ihtiyaçları vaka mantığıyla ele alırız.": "Без названий компаний мы показываем частые задачи как кейсы.",
  "Üretim firması altyapı yenileme": "Обновление инфраструктуры производственной компании",
  "Mail geçiş ve güvenlik": "Миграция почты и безопасность",
  "Backup ve kurtarma planı": "План backup и восстановления",
  "Firewall ve kamera modernizasyonu": "Модернизация firewall и камер",
  "Sunucu ve altyapı": "Серверы и инфраструктура",
  "Yedekleme ve bulut backup": "Резервное копирование и cloud backup",
  "Kamera sistemleri": "Системы камер",
  "Özel yazılım": "Индивидуальное ПО",
  "Genel destek": "Общая поддержка",
  "Ad Soyad / Firma": "Имя / Компания",
  "Telefon": "Телефон",
  "E-posta": "Email",
  "İhtiyacınızı kısaca yazın": "Кратко опишите потребность",
  "Talep Gönder": "Отправить запрос",
  "Menüyü aç": "Открыть меню",
  "Dil seçimi": "Выбор языка",
  "Teknoloji ekosistemi markaları": "Бренды технологической экосистемы"
};

completeTranslations.ar = {
  ...completeTranslations.en,
  "Dünyada kabul görmüş kurumsal platformlarla uyumlu altyapı.": "بنية تحتية متوافقة مع منصات مؤسسية موثوقة عالمياً.",
  "Erbilir projelerinde marka bağımsız düşünür; işletmenin ihtiyacına göre sunucu, bulut, yedekleme, firewall, ağ, kamera ve ERP teknolojilerini aynı mimaride birleştirir.": "تصمم Erbilir الحلول دون الارتباط بعلامة محددة، وتجمع الخوادم والسحابة والنسخ الاحتياطي والجدار الناري والشبكات والكاميرات وERP في بنية واحدة حسب حاجة العمل.",
  "Çözüm Detayları": "تفاصيل الحلول",
  "Bulut ve mail": "السحابة والبريد",
  "Bulut platformu": "منصة سحابية",
  "Sanallaştırma": "الافتراضية",
  "Sunucu altyapısı": "بنية الخوادم",
  "Hiper bütünleşik": "فائق التكامل",
  "NAS ve backup": "NAS ونسخ احتياطي",
  "Veri koruma": "حماية البيانات",
  "Ağ ve kamera": "الشبكة والكاميرات",
  "ERP ve güvenlik": "ERP والأمان",
  "KOBİ ve kurumsal ekiplerin en çok ihtiyaç duyduğu altyapı, bulut, güvenlik, ERP ve yazılım başlıklarını ölçülebilir çıktılarla tek teknik yönetim altında toplarız.": "نجمع احتياجات البنية التحتية والسحابة والأمان وERP والبرمجيات للشركات الصغيرة والمؤسسات تحت إدارة تقنية واحدة وبمخرجات قابلة للقياس.",
  "Ana Sayfa / Çözümler / Detaylar": "الرئيسية / الحلول / التفاصيل",
  "Her çözümün amacı, uygulama planı ve teslim çıktısı net olsun.": "يجب أن يكون هدف كل حل وخطة تنفيذه ومخرجاته واضحة.",
  "Detay başlıkları": "عناوين التفاصيل",
  "KOBİ omurgası": "عمود الشركات الصغيرة",
  "Server ve Cloud": "الخادم والسحابة",
  "Bulut Backup": "نسخ احتياطي سحابي",
  "Firewall ve VPN": "جدار ناري وVPN",
  "Kamera ve NVR": "كاميرا وNVR",
  "Özel Yazılım": "برمجيات خاصة",
  "Bakım ve Destek": "صيانة ودعم",
  "Neden gerekli?": "لماذا هو ضروري؟",
  "Nasıl yapıyoruz?": "كيف ننفذ؟",
  "Teslim çıktısı": "مخرجات التسليم",
  "KOBİ Teknoloji Omurgası": "العمود التقني للشركات الصغيرة",
  "Server, Cloud Server ve Sanallaştırma": "الخوادم والخوادم السحابية والافتراضية",
  "Bulut Backup ve Felaket Kurtarma": "نسخ احتياطي سحابي واستعادة كوارث",
  "Firewall, VPN ve Network": "جدار ناري وVPN وشبكة",
  "Kamera, NVR ve Güvenli İzleme": "كاميرات وNVR ومراقبة آمنة",
  "İş Takip ve Operasyon Ekranları": "شاشات متابعة العمل والتشغيل",
  "Netsis ERP ve Raporlama": "Netsis ERP والتقارير",
  "Bakım, İzleme ve Teknik Destek": "صيانة ومراقبة ودعم فني",
  "Hangi çözümün önce gelmesi gerektiğini birlikte netleştirelim.": "لنحدد معاً أي حل يجب أن يأتي أولاً.",
  "Anonim proje senaryoları": "سيناريوهات مشاريع بدون أسماء",
  "Firma adı paylaşmadan, sahada sık gördüğümüz ihtiyaçları vaka mantığıyla ele alırız.": "نعرض الاحتياجات المتكررة في الميدان كحالات دون مشاركة أسماء الشركات.",
  "Üretim firması altyapı yenileme": "تجديد بنية تحتية لشركة إنتاج",
  "Mail geçiş ve güvenlik": "ترحيل البريد والأمان",
  "Backup ve kurtarma planı": "خطة النسخ الاحتياطي والاستعادة",
  "Firewall ve kamera modernizasyonu": "تحديث الجدار الناري والكاميرات",
  "Sunucu ve altyapı": "الخوادم والبنية التحتية",
  "Yedekleme ve bulut backup": "نسخ احتياطي ونسخ سحابي",
  "Kamera sistemleri": "أنظمة كاميرات",
  "Özel yazılım": "برمجيات خاصة",
  "Genel destek": "دعم عام",
  "Ad Soyad / Firma": "الاسم / الشركة",
  "Telefon": "الهاتف",
  "E-posta": "البريد الإلكتروني",
  "İhtiyacınızı kısaca yazın": "اكتب احتياجك باختصار",
  "Talep Gönder": "إرسال الطلب",
  "Menüyü aç": "فتح القائمة",
  "Dil seçimi": "اختيار اللغة",
  "Teknoloji ekosistemi markaları": "علامات منظومة التقنية"
};

const titleTranslations = {
  en: {
    "Erbilir Bilgi İşlem | Sunucu, Bulut, Backup, ERP ve Güvenlik Çözümleri": "Erbilir IT Services | Server, Cloud, Backup, ERP and Security Solutions",
    "Çözümler | Erbilir Bilgi İşlem": "Solutions | Erbilir IT Services",
    "Çözüm Detayları | Erbilir Bilgi İşlem": "Solution Details | Erbilir IT Services",
    "Projeler | Erbilir Bilgi İşlem": "Projects | Erbilir IT Services",
    "İletişim | Erbilir Bilgi İşlem": "Contact | Erbilir IT Services",
    "Hizmetler | Erbilir Bilgi İşlem": "Services | Erbilir IT Services",
    "Hakkımızda | Erbilir Bilgi İşlem": "About | Erbilir IT Services",
    "Netsis ERP | Erbilir Bilgi İşlem": "Netsis ERP | Erbilir IT Services"
  },
  de: {
    "Erbilir Bilgi İşlem | Sunucu, Bulut, Backup, ERP ve Güvenlik Çözümleri": "Erbilir IT-Service | Server, Cloud, Backup, ERP und Sicherheit",
    "Çözümler | Erbilir Bilgi İşlem": "Lösungen | Erbilir IT-Service",
    "Çözüm Detayları | Erbilir Bilgi İşlem": "Lösungsdetails | Erbilir IT-Service",
    "Projeler | Erbilir Bilgi İşlem": "Projekte | Erbilir IT-Service",
    "İletişim | Erbilir Bilgi İşlem": "Kontakt | Erbilir IT-Service",
    "Hizmetler | Erbilir Bilgi İşlem": "Leistungen | Erbilir IT-Service",
    "Hakkımızda | Erbilir Bilgi İşlem": "Über uns | Erbilir IT-Service",
    "Netsis ERP | Erbilir Bilgi İşlem": "Netsis ERP | Erbilir IT-Service"
  },
  ru: {
    "Erbilir Bilgi İşlem | Sunucu, Bulut, Backup, ERP ve Güvenlik Çözümleri": "Erbilir IT Services | Серверы, облако, backup, ERP и безопасность",
    "Çözümler | Erbilir Bilgi İşlem": "Решения | Erbilir IT Services",
    "Çözüm Detayları | Erbilir Bilgi İşlem": "Детали решений | Erbilir IT Services",
    "Projeler | Erbilir Bilgi İşlem": "Проекты | Erbilir IT Services",
    "İletişim | Erbilir Bilgi İşlem": "Контакты | Erbilir IT Services",
    "Hizmetler | Erbilir Bilgi İşlem": "Услуги | Erbilir IT Services",
    "Hakkımızda | Erbilir Bilgi İşlem": "О нас | Erbilir IT Services",
    "Netsis ERP | Erbilir Bilgi İşlem": "Netsis ERP | Erbilir IT Services"
  },
  ar: {
    "Erbilir Bilgi İşlem | Sunucu, Bulut, Backup, ERP ve Güvenlik Çözümleri": "Erbilir للخدمات التقنية | خوادم وسحابة ونسخ احتياطي وERP وأمان",
    "Çözümler | Erbilir Bilgi İşlem": "الحلول | Erbilir للخدمات التقنية",
    "Çözüm Detayları | Erbilir Bilgi İşlem": "تفاصيل الحلول | Erbilir للخدمات التقنية",
    "Projeler | Erbilir Bilgi İşlem": "المشاريع | Erbilir للخدمات التقنية",
    "İletişim | Erbilir Bilgi İşlem": "اتصال | Erbilir للخدمات التقنية",
    "Hizmetler | Erbilir Bilgi İşlem": "الخدمات | Erbilir للخدمات التقنية",
    "Hakkımızda | Erbilir Bilgi İşlem": "من نحن | Erbilir للخدمات التقنية",
    "Netsis ERP | Erbilir Bilgi İşlem": "Netsis ERP | Erbilir للخدمات التقنية"
  }
};

Object.assign(translations.en, completeTranslations.en);
Object.assign(translations.de, completeTranslations.de);
Object.assign(translations.ru, completeTranslations.ru);
Object.assign(translations.ar, completeTranslations.ar);

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

const translatableSelector = "a, h1, h2, h3, p, span, small, strong, li, button, option";
const translateAttributes = (lang) => {
  document.querySelectorAll("[placeholder]").forEach((node) => {
    if (!node.dataset.i18nPlaceholder) node.dataset.i18nPlaceholder = node.getAttribute("placeholder")?.trim() || "";
    const source = node.dataset.i18nPlaceholder;
    node.setAttribute("placeholder", lang === "tr" ? source : translations[lang]?.[source] || source);
  });
  document.querySelectorAll("[aria-label]").forEach((node) => {
    if (!node.dataset.i18nAriaLabel) node.dataset.i18nAriaLabel = node.getAttribute("aria-label")?.trim() || "";
    const source = node.dataset.i18nAriaLabel;
    node.setAttribute("aria-label", lang === "tr" ? source : translations[lang]?.[source] || source);
  });
};
const translatePage = (lang) => {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  if (!document.documentElement.dataset.i18nTitle) document.documentElement.dataset.i18nTitle = document.title;
  const titleSource = document.documentElement.dataset.i18nTitle;
  document.title = lang === "tr" ? titleSource : titleTranslations[lang]?.[titleSource] || titleSource;
  document.querySelectorAll(translatableSelector).forEach((node) => {
    if (node.matches("[data-year]")) return;
    if (node.children.length) return;
    if (!node.dataset.i18nSource) node.dataset.i18nSource = node.textContent.trim();
    const source = node.dataset.i18nSource;
    node.textContent = lang === "tr" ? source : translations[lang]?.[source] || source;
  });
  translateAttributes(lang);
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
const supportPhone = "905000000000";
const whatsappText = encodeURIComponent("Merhaba, Erbilir Bilgi İşlem hizmetleri hakkında bilgi almak istiyorum.");
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
  <a class="whatsapp-toggle" href="https://wa.me/${supportPhone}?text=${whatsappText}" target="_blank" rel="noopener" aria-label="WhatsApp ile iletişime geç">WA</a>
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
