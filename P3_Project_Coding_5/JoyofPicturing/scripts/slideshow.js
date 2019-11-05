$(document.getElementById("arrowdown")).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

const bildeKarusellEl = document.querySelector("#bildeKarusell");
const tid = 6000;

let bildeIndex = 1;

const bildefiler = ["img/resized/1.jpg", "img/resized/2.jpg", "img/resized/3.jpg", "img/resized/4.jpg"];

const bilder = document.querySelectorAll(".bilde");

bilder[1].style.animation = "fade 6s alternate infinite";
bilder[0].style.backgroundImage = "url(" + bildefiler[bildeIndex - 1] + ")";
bilder[1].style.backgroundImage = "url(" + bildefiler[bildeIndex] + ")";

setInterval(changeImage, tid);
whichToChange = 1;

function changeImage () {
    whichToChange = 1 - whichToChange;
    bildeIndex ++;
    bildeIndex %= bildefiler.length;
    bilder[whichToChange].style.backgroundImage = "url(" + bildefiler[bildeIndex] + ")";
}


slideshowEl.addEventListener("click", goToGallery);

function goToGallery(){
    location.href="gallery.html";
}