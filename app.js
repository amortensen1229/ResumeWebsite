let slider = document.querySelector(".slider");
// Fade In: //
function sliderFadeIn() {
gsap.fromTo(".slider", {opacity: 1}, {opacity: 0, zIndex: -1, duration: 2.5, delay: 0.35});
//document.getElementById(".slider").style.zIndex = "-1";
gsap.fromTo(".slider", {zIndex: 3}, {zIndex: -1, delay: 2.75});

}
function textFadeIn() {
gsap.fromTo(".navbar a", {opacity: 0}, {opacity: 1, duration: 2.5, delay: 0.35});
}

function socailFadeIn() {
gsap.fromTo(".social-bar i", {opacity: 0}, {opacity: 1, duration: 2.5, delay: 0.35});
}

// Timeline to make events happen in parellel: //
let master = gsap.timeline();
master.add(sliderFadeIn());
//master.add(textFadeIn(), "-=20.0");
//master.add(socailFadeIn(), "-=2.0");


//let master = gsap.timeline().add(sliderFadeIn()).add(textFadeIn(), "-=6.0").add(socailFadeIn(),"-=6.0");

