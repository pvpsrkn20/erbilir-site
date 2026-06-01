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
    window.location.href = `mailto:info@erbilir.com.tr?subject=${subject}&body=${body}`;
  });
}
