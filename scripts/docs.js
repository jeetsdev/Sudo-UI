const btnHamburger = document.querySelector("#btn-hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar-links > *");

// ! hamburger button event here

btnHamburger.addEventListener('click', () => {
    ShowHideSidebar(sidebar);
})

// ! sidelinks button event here

sidebarLinks.forEach(links => {
    links.addEventListener('click', () => {
        const prevActiveLink = document.querySelector(".sidebar-link-active");
        prevActiveLink.classList.remove("sidebar-link-active");
        links.classList.add("sidebar-link-active");
        ShowHideSidebar(sidebar);
    })
})

//! To show and hide sidebar

const ShowHideSidebar = (sidebar) => {
    sidebar.classList.toggle("active-sidebar");
}