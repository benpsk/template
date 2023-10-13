function menuOnClick() {
  console.log("menuOnClick");
  document.querySelector(".theme-sidebar-toggler").classList.toggle("theme-sidebar-toggler-close");
  document
    .querySelector(".theme-sidebar")
    .classList.toggle("theme-sidebar-toggle");
  document
    .querySelector(".main-content")
    .classList.toggle("main-content-collape");
  document.querySelectorAll(".menu-text").forEach((item) => {
    item.classList.toggle("menu-text-hide");
  });
  document.querySelector(".header-title").classList.toggle("header-title-hide");
}
window.addEventListener("DOMContentLoaded", (event) => {
  const themeMenuBar = document.querySelector(".theme-sidebar-toggler");
  themeMenuBar.addEventListener("click", menuOnClick);
});