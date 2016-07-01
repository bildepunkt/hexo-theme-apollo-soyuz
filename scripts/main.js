/**
 * 
 */
window.onload = () => {
    let header = document.getElementById("header");
    let staticBg = document.getElementById("static_background");
    let vpHeight = `${window.innerHeight}px`;

    header.style.height = vpHeight;
    staticBg.style.height = vpHeight;

    document.body.style.display = "block";
};
