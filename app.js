function menuOnClick() {
  console.log("menuOnClick");
  document.querySelector(".menu-bar").classList.toggle("menu-bar-close");
  document.querySelector(".sidebar").classList.toggle("sidebar-collape");
  document
    .querySelector(".main-content")
    .classList.toggle("main-content-collape");
  document.querySelectorAll(".menu-text").forEach((item) => {
    item.classList.toggle("menu-text-hide");
  });
  document.querySelector(".header-title").classList.toggle("header-title-hide");
}
