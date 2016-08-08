import Ticker from "./Ticker";
import Tween from "./Tween";
import { easeOut } from "./easing";
import Galaxy from "./galaxy/Galaxy";

(function () {
    let navHidden = true;
    let lastScrollY;
    let vpHeight;
    let topNav;
    let header;
    let staticBg;
    let navHome;
    let mobileMenuBtn;
    let menuOptions;

    function scrollToArticle (delta) {
        if (delta < window.innerHeight) {
            window.scrollTo(0, delta);
        }
    }

    function showTopNav () {
        if (!navHidden) {
            return;
        }

        topNav.style.display = "block";
        navHidden = false;
    }

    function hideTopNav () {
        topNav.style.display = "none";
        navHidden = true;
    }

    function onScroll (e) {
        let y = window.pageYOffset || document.documentElement.scrollTop;

        menuOptions.style.height = "0px";

        if (y < lastScrollY){
            showTopNav();
        } else {
            hideTopNav();
        }

        if (y < vpHeight / 2) {
            navHome.style.display = "none";
        } else {
            navHome.style.display = "block"
        }

        lastScrollY = y;
    }

    function onMobileMenuClick () {
        let height = parseInt(menuOptions.style.height, 10);
        
        if (height === 0 || height == NaN) {
            menuOptions.style.height = "100%";
        } else {
            menuOptions.style.height = "0px";
        }

        //
    }

    function onLoad () {
        new Ticker();

        lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
        vpHeight = window.innerHeight;
        topNav = document.getElementById("top_nav");
        header = document.getElementById("header");
        staticBg = document.getElementById("static_background");
        navHome = document.getElementById("nav_home");
        mobileMenuBtn = document.getElementById("mobile_menu_btn");
        menuOptions = document.getElementById("menu_options");

        header.style.height = `${vpHeight}px`;
        staticBg.style.height = `${vpHeight}px`;

        document.addEventListener("scroll", onScroll, false);
        mobileMenuBtn.addEventListener("click", onMobileMenuClick, false);

        document.body.style.opacity = 0; 
        document.body.style.display = "block";
        new Tween(document.body.style, "opacity", 0, 1, 1000, easeOut);

        new Galaxy();

        if (document.location.pathname !== "/" && lastScrollY === 0) {
            new Tween(scrollToArticle, 0, window.innerHeight - 32, 1000, easeOut);
        }

        if (lastScrollY === 0) {
            showTopNav();
            navHome.style.display = "none";
        }
    }

    window.onload = onLoad;
}());
