console.log("Website ready ✅");

// Mobile Nav Toggle
const toggleBtn = document.querySelector("[data-nav-toggle]");
const navList = document.querySelector("[data-nav-list]");

if (toggleBtn && navList) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

