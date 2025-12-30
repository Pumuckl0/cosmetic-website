// Debug Ausgabe
console.log("Website ready ✅");

// Elemente aus dem HTML holen
// document.querySelector(...) sucht ein Element im HTML
// -> [data-nav-toggle] heißt: „Suche ein Element mit diesem data-Attribut“
const toggleBtn = document.querySelector("[data-nav-toggle]");
const navList = document.querySelector("[data-nav-list]");

//Sicherheitscheck: Mach nur weiter, wenn beide Elemente toggleBtn und navList existieren

//toggleBtn.addEventListener("click",   Wartet auf einen Klick auf den Hamburger-Button

//toggle("is-open") -> variable isOpen ist true wenn Menü offen -> darauf reagiert in CSS -nav ul.is-open
//-> Ohne is-open → display: none; Mit is-open → display: flex

// Accessibility: Für Screenreader, damit weiß dass Menü offen -> toggleBtn.setAttribute("aria-expanded", String(isOpen))
if (toggleBtn && navList) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

// Scroll-Down Button
document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-scroll-to");
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

