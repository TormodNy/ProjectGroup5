const slideshowEl = document.querySelector("#slideshow");
const timer = 6000;

let photoIndex = 1;

const photoFiles = ["img/resized/1.jpg", "img/resized/2.jpg", "img/resized/3.jpg", "img/resized/4.jpg"];

const photoEl = document.querySelectorAll(".photo");

photoEl[1].style.animation = "fade 6s alternate infinite";
photoEl[0].style.backgroundImage = "url(" + photoFiles[photoIndex - 1] + ")";
photoEl[1].style.backgroundImage = "url(" + photoFiles[photoIndex] + ")";

setInterval(changeImage, timer);
whichToChange = 1;

function changeImage () {
    whichToChange = 1 - whichToChange;
    photoIndex ++;
    photoIndex %= photoFiles.length;
    photoEl[whichToChange].style.backgroundImage = "url(" + photoFiles[photoIndex] + ")";
}


slideshowEl.addEventListener("click", goToGallery);

function goToGallery(){
    location.href="gallery.html";
}
