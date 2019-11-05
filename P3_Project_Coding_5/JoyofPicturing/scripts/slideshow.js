const slideshowEl = document.querySelector("#slideshow");

let photoIndex = 1;
const photoFiles = ["img/resized/1.jpg", "img/resized/2.jpg", "img/resized/3.jpg", "img/resized/4.jpg"];
const photoEl = document.querySelectorAll(".photo");

//Starts a 6 seconds long animation that fades in and out
photoEl[1].style.animation = "fade 6s alternate infinite";

//Assigns the background images to the photo elements
photoEl[0].style.backgroundImage = "url(" + photoFiles[photoIndex - 1] + ")";
photoEl[1].style.backgroundImage = "url(" + photoFiles[photoIndex] + ")";

//Starts a timer to change image every 6 seconds
setInterval(changeImage, 6000);
whichToChange = 1;

//Changes the image to the next image
function changeImage () {
    whichToChange = 1 - whichToChange;
    photoIndex ++;
    photoIndex %= photoFiles.length;
    photoEl[whichToChange].style.backgroundImage = "url(" + photoFiles[photoIndex] + ")";
}

//Go to gallery when clicking the slideshow
slideshowEl.addEventListener("click", () => {
    location.href="gallery.html";
});
