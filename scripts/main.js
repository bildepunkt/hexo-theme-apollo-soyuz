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

        if (y < lastScrollY){
            showTopNav();
        } else {
            hideTopNav();
        }

        if (y < vpHeight / 2) {
            hideTopNav();
        }

        lastScrollY = y;
    }

    function onLoad () {
        new Ticker();

        lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
        vpHeight = window.innerHeight;
        topNav = document.getElementById("top_nav");
        header = document.getElementById("header");
        staticBg = document.getElementById("static_background");

        header.style.height = `${vpHeight}px`;
        staticBg.style.height = `${vpHeight}px`;

        document.addEventListener("scroll", onScroll, false);

        document.body.style.opacity = 0; 
        document.body.style.display = "block";
        new Tween(document.body.style, "opacity", 0, 1, 1000, easeOut);

        new Galaxy();

        if (document.location.pathname !== "/" && lastScrollY === 0) {
            new Tween(scrollToArticle, 0, window.innerHeight - 32, 1000, easeOut);
        }

        if (lastScrollY === 0) {
            showTopNav();
        }
    }

    window.onload = onLoad;
}());
