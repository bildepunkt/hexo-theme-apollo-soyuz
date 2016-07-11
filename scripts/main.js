import Ticker from "./Ticker";
import Tween from "./Tween";
import { easeOut } from "./easing";
import Galaxy from "./galaxy/Galaxy";

function scrollToArticle (delta) {
    if (delta < window.innerHeight) {
        window.scrollTo(0, delta);
    }
}

window.onload = () => {
    new Ticker();

    let logo = document.getElementById("logo");
    let header = document.getElementById("header");
    let staticBg = document.getElementById("static_background");
    let vpHeight = `${window.innerHeight}px`;

    logo.addEventListener("click", () => {
        document.location.href = "/";
    }, false);

    header.style.height = vpHeight;
    staticBg.style.height = vpHeight;

    document.body.style.opacity = 0; 
    document.body.style.display = "block";
    new Tween(document.body.style, "opacity", 0, 1, 1000, easeOut);

    new Galaxy();

    if (document.location.pathname !== "/" && window.scrollY === 0) {
        new Tween(scrollToArticle, 0, window.innerHeight - 32, 1000, easeOut);
    }
};
