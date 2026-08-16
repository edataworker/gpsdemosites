/* Mobile nav toggle */
const toggle = document.querySelector('.hemet-nav-toggle');
const nav = document.querySelector('.hemet-main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}

/* Dropdown toggle for mobile */
document.querySelectorAll('.has-dropdown > a').forEach(link => {
  link.addEventListener('click', (e) => {
    const parent = link.parentElement;
    // On mobile, if nav is open/hamburger mode, toggle dropdown instead of navigating
    if (window.innerWidth <= 760) {
      e.preventDefault();
      const isOpen = parent.classList.toggle('open');
      // Close sibling dropdowns
      parent.parentElement.querySelectorAll('.has-dropdown').forEach(sibling => {
        if (sibling !== parent) sibling.classList.remove('open');
      });
    }
  });
});

/* Close mobile nav when clicking outside */
document.addEventListener('click', (e) => {
  if (nav && !nav.contains(e.target) && toggle && !toggle.contains(e.target)) {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('open'));
  }
});
