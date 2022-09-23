var navDrop = document.querySelectorAll('.nav-drop');
var navList = document.querySelectorAll('.nav-list');
var arrow = document.querySelectorAll('.arrow');
var i;

navList[0].addEventListener("click", () => {
    if (navDrop[0].style.visibility != "visible") {
        navDrop[0].style.visibility = "visible"
        arrow[0].classList.add("rotate");

        navDrop[1].style.visibility = "hidden"
        arrow[1].classList.remove("rotate");

        navDrop[2].style.visibility = "hidden"
        arrow[2].classList.remove("rotate");
    } else {
        navDrop[0].style.visibility = "hidden"
        arrow[0].classList.remove("rotate");
    }
})

navList[1].addEventListener("click", () => {
    if (navDrop[1].style.visibility != "visible") {
        navDrop[1].style.visibility = "visible"
        arrow[1].classList.add("rotate");

        navDrop[0].style.visibility = "hidden"
        arrow[0].classList.remove("rotate");

        navDrop[2].style.visibility = "hidden"
        arrow[2].classList.remove("rotate");
    } else {
        navDrop[1].style.visibility = "hidden"
        arrow[1].classList.remove("rotate");
    }
})

navList[2].addEventListener("click", () => {
    if (navDrop[2].style.visibility != "visible") {
        navDrop[2].style.visibility = "visible"
        arrow[2].classList.add("rotate");

        navDrop[1].style.visibility = "hidden"
        arrow[1].classList.remove("rotate");

        navDrop[0].style.visibility = "hidden"
        arrow[0].classList.remove("rotate");
    } else {
        navDrop[2].style.visibility = "hidden"
        arrow[2].classList.remove("rotate");
    }
})


// mobile navigation

var mobileNav = document.querySelector('.mobile-nav');
var menu = document.querySelector(".menu-btn");
var mobileArrow = document.querySelectorAll(".dark-arrow");
var mobileDropdown = document.querySelectorAll(".mobile-dropdowns");
var mobileNavLists =  document.querySelectorAll(".mobile-navigations");
var headerText = document.querySelector(".header-text h1");

menu.addEventListener("click", () => {
    if(!mobileNav.classList.contains("appear")) {
        mobileNav.classList.add("appear");
        menu.setAttribute("src", "images/icon-close.svg");
    } else {
        mobileNav.classList.remove("appear");
        menu.setAttribute("src", "images/icon-hamburger.svg");
        mobileDropdown[1].style.display = "none";
        mobileArrow[1].classList.remove("mobile-rotate");
        mobileDropdown[2].style.display = "none";
        mobileArrow[2].classList.remove("mobile-rotate");
        mobileDropdown[0].style.display = "none";
        mobileArrow[0].classList.remove("mobile-rotate");
    }
})

// mobile dropdown

mobileNavLists[0].addEventListener("click", () => {
    if(mobileDropdown[0].style.display != "none") {
        mobileDropdown[0].style.display = "none";
        mobileArrow[0].classList.remove("mobile-rotate");
    } else {
        mobileDropdown[0].style.display = "block";
        mobileArrow[0].classList.add("mobile-rotate");
        mobileDropdown[1].style.display = "none";
        mobileArrow[1].classList.remove("mobile-rotate");
        mobileDropdown[2].style.display = "none";
        mobileArrow[2].classList.remove("mobile-rotte");
    }
})

mobileNavLists[1].addEventListener("click", () => {
    if (mobileDropdown[1].style.display != "none") {
        mobileDropdown[1].style.display = "none";
        mobileArrow[1].classList.remove("mobile-rotate");
    } else {
        mobileDropdown[1].style.display = "block";
        mobileArrow[1].classList.add("mobile-rotate");
        mobileDropdown[0].style.display = "none";
        mobileArrow[0].classList.remove("mobile-rotate");
        mobileDropdown[2].style.display = "none";
        mobileArrow[2].classList.remove("mobile-rotate");
    }
})

mobileNavLists[2].addEventListener("click", () => {
    if (mobileDropdown[2].style.display != "none") {
        mobileDropdown[2].style.display = "none";
        mobileDropdown[2].classList.remove("mobile-rotate");
    } else {
        mobileDropdown[2].style.display = "block";
        mobileArrow[2].classList.add("mobile-rotate");
        mobileDropdown[0].style.display = "none";
        mobileArrow[0].classList.remove("mobile-rotate");
        mobileDropdown[1].style.display = "none";
        mobileArrow[1].classList.remove("mobile-rotate");
    }
})