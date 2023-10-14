const themeToggleSidebar = () => {
  document
    .querySelector(".theme-sidebar-toggler")
    .classList.toggle("theme-sidebar-toggler-close");
  document
    .querySelector(".theme-sidebar")
    .classList.toggle("theme-sidebar-toggle");
  document
    .querySelector(".theme-main-content")
    .classList.toggle("theme-main-content-toggle");
  document.querySelectorAll(".theme-menu-text").forEach((item) => {
    item.classList.toggle("theme-menu-text-toggle");
  });
  document
    .querySelector(".theme-header-title")
    .classList.toggle("theme-header-title-toggle");
};
window.addEventListener("DOMContentLoaded", (event) => {
  document
    .querySelector(".theme-sidebar-toggler")
    .addEventListener("click", themeToggleSidebar);
  if (window.innerWidth <= 768) {
    themeToggleSidebar();
  }
});
