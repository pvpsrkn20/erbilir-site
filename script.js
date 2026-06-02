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
