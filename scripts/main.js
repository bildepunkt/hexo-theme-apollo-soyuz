import Ticker from "./Ticker";
import Tween from "./Tween";
import { easeOut } from "./easing";
import Galaxy from "./galaxy/Galaxy";

window.onload = () => {
    new Ticker();

    let header = document.getElementById("header");
    let staticBg = document.getElementById("static_background");
    let vpHeight = `${window.innerHeight}px`;

    header.style.height = vpHeight;
    staticBg.style.height = vpHeight;

    document.body.style.opacity = 0; 
    document.body.style.display = "block";
    new Tween(document.body.style, "opacity", 0, 1, 1000, easeOut);

    new Galaxy();
};
