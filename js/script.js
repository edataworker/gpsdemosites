document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // Toggle mobile navigation panel
  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener("click", function () {
      mainNav.classList.toggle("open");
      const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    });
  }

  // Handle dropdown accordions on mobile screens
  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function (e) {
      if (window.innerWidth <= 880) {
        e.preventDefault();
        const parentLi = toggle.closest(".has-children");
        const isOpen = parentLi.classList.contains("open");

        document.querySelectorAll(".has-children").forEach(function (item) {
          item.classList.remove("open");
          const itemToggle = item.querySelector(".dropdown-toggle");
          if (itemToggle) itemToggle.setAttribute("aria-expanded", "false");
        });

        if (!isOpen) {
          parentLi.classList.add("open");
          toggle.setAttribute("aria-expanded", "true");
        }
      }
    });
  });

  // Highlight active link based on URL
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(function (link) {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      const parentLi = link.closest("li");
      parentLi.classList.add("active");
      const topParentLi = link.closest(".has-children");
      if (topParentLi) {
        topParentLi.classList.add("active");
      }
    }
  });
});
