document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
    });
  }

  // Highlight current page in nav
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav > ul > li > a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path) {
      link.parentElement.classList.add("active");
    }
  });
});
