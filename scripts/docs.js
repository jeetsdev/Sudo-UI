const btnHamburger = document.querySelector("#btn-hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar__links > *");
const floatBtn = document.querySelector("#btn__float-up");

// ! hamburger button event here

btnHamburger.addEventListener('click', () => {
    ShowHideSidebar(sidebar);
})

//! Float btn here

floatBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);   
})

// ! sidelinks button event here

sidebarLinks.forEach(links => {
    links.addEventListener('click', () => {
        const prevActiveLink = document.querySelector(".sidebar__link-active");
        prevActiveLink.classList.remove("sidebar__link-active");
        links.classList.add("sidebar__link-active");
        ShowHideSidebar(sidebar);
    })
})

//! To show and hide sidebar

const ShowHideSidebar = (sidebar) => {
    sidebar.classList.toggle("sidear-active");
}