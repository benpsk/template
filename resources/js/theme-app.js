const toggleClass = (selector, className) => {
    document.querySelectorAll(selector).forEach((item) => {
        item.classList.toggle(className);
    });
};
const themeToggleSidebar = () => {
    toggleClass(".theme-sidebar-toggler", "theme-sidebar-toggler-toggle");
    toggleClass(".theme-sidebar", "theme-sidebar-toggle");
    toggleClass(".theme-main-content", "theme-main-content-toggle");
    toggleClass(".theme-menu-text", "theme-menu-text-toggle");
    toggleClass(".theme-header-title", "theme-header-title-toggle");
    removeClassWithDelay();
};
const addClassOnHover = () => {
    document
        .querySelector(".theme-sidebar-toggler")
        .classList.add("theme-sidebar-toggler-show");
};
let timer;
const removeClassWithDelay = () => {
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        toggleClass(".theme-sidebar-toggler", "theme-sidebar-toggler-show");
    }, 5000);
};

document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelector(".theme-sidebar-toggler")
        .addEventListener("click", themeToggleSidebar);
    if (window.innerWidth <= 768) {
        themeToggleSidebar();
    }
    const themeSidebar = document.querySelector(".theme-sidebar");
    themeSidebar.addEventListener("mouseenter", addClassOnHover);
    themeSidebar.addEventListener("mouseleave", removeClassWithDelay);
});
