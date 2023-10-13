const themeToggleSidebar = () => {
  console.log("menuOnClick");
  document
    .querySelector(".theme-sidebar-toggler")
    .classList.toggle("theme-sidebar-toggler-close");
  document
    .querySelector(".theme-sidebar")
    .classList.toggle("theme-sidebar-toggle");
  document
    .querySelector(".theme-main-content")
    .classList.toggle("theme-main-content-toggle");
  document.querySelectorAll(".menu-text").forEach((item) => {
    item.classList.toggle("menu-text-hide");
  });
  document.querySelector(".header-title").classList.toggle("header-title-hide");
};
window.addEventListener("DOMContentLoaded", (event) => {
  const themeSidebarToggler = document.querySelector(".theme-sidebar-toggler");
  themeSidebarToggler.addEventListener("click", themeToggleSidebar);
});