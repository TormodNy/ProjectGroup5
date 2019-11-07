const imgNr = 14; //indicates how many images are to be added
const galleryEl = document.querySelector(".gallery");

//Previously galleryLoader.js
for (var i = 1; i <= imgNr; i++) {
    addPicture(i);
}

function addPicture (i) {
    //adding images and creating div elements
    const newDiv = makeElement("div", "", "", "imgWrapper");
    const newImg = makeElement("img", "", "img" + i, "galleryImg")
    newImg.src = "img/gallery/" + i + ".jpg";
    newImg.alt = "Thumbnail " + i;
    newDiv.appendChild(newImg);
    galleryEl.appendChild(newDiv);

    newImg.addEventListener("click", preview);
}

//Checks when the user is scrolling
window.onscroll = scrolling;

//Number of times the user has scrolled enough to add more pictures
let timesAdded = 1;

function scrolling () {
    //A value describing how far the user has scrolled
    const scrollTop = document.documentElement.scrollTop;

    //Add 3 photos if we are using widescreen, 1 if we are a smaller screen or in a portrait view
    const maxPhotos = (window.innerWidth > 900 || window.screen.orientation == "landscape-primary")? 3 : 1;

    //If the user has scrolled more than the height of one image, add more images if we haven't added 30 or more pictures
    if(scrollTop > galleryEl.children[0].offsetHeight * timesAdded / maxPhotos && timesAdded < 30){
        for (var i = 0; i < maxPhotos; i++) {
            //Adds a random photo
            addPicture(Math.ceil(Math.random() * 14));
        }
        timesAdded += maxPhotos;
    }
}



//Previously picturePopUp.js
function preview(e) {
    const bodyEl = document.querySelector("body");

    const previewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque est tortor, sagittis nec enim id, euismod tempus dolor. Duis malesuada mauris ut dui aliquam, eu condimentum ligula consequat. Phasellus sodales ut massa eget egestas. Nunc pretium pellentesque tellus, a vulputate orci volutpat vitae. Duis nunc ante, tempor ac vulputate bibendum, posuere ac nulla. Phasellus turpis mauris, iaculis sit amet odio quis, auctor rhoncus ante. Aliquam facilisis pellentesque magna. Curabitur felis nunc, aliquam sit amet velit non, porttitor scelerisque nisl.";

    // creating all necessary elements with makeElement function
    const backgroundDivEl = makeElement("div", "", "", "background"); //black background
    const previewDivEl = makeElement("div", "", "", "previewDiv"); //div element

    const imgWrapperEl = makeElement("div","","","previewImgWrapper");
    const contentWrapperEl = makeElement("div","","","previewContentWrapper");


    const previewImgEl= makeElement("img", "", "", "previewImg"); //image element
    const previewTextEl = makeElement("node", previewText, "", "previewText");//text element
    const previewButtonEl = makeElement("button", "", "", "previewButton"); //purchase button
    const closePreviewEl = makeElement("div", "", "", "closePreviewButton"); //close window button

    // finished creating elements


    previewImgEl.src=e.target.src; //so that the function knows which image to preview

    //adding text to the buttons
    previewButtonEl.innerHTML="PURCHASE";
    closePreviewEl.innerHTML="X";


    // appending all elements to the body or div element
    bodyEl.appendChild(backgroundDivEl);

    //takes user to shop if user clicks purchase
    previewButtonEl.addEventListener("click", goToShop);
    function goToShop () {
        location.href="shop.html";
    }

    //appending all the elements to the preview div
    previewDivEl.appendChild(imgWrapperEl);
    previewDivEl.appendChild(contentWrapperEl);
    imgWrapperEl.appendChild(previewImgEl);
    contentWrapperEl.appendChild(closePreviewEl);
    contentWrapperEl.appendChild(previewTextEl);
    contentWrapperEl.appendChild(previewButtonEl);

    //appending preview div to body
    bodyEl.appendChild(previewDivEl);

    //exits preview if user clicks outside of the preview element or the x
    closePreviewEl.addEventListener("click", exitPreview);
    backgroundDivEl.addEventListener("click", exitPreview);
    bodyEl.addEventListener("keydown", exitPreviewEsc);

    function exitPreview() {
        previewDivEl.parentElement.removeChild(previewDivEl);
        backgroundDivEl.parentElement.removeChild(backgroundDivEl);
    }

    function exitPreviewEsc(e) {
        if(e.keyCode == 27) {
            previewDivEl.parentElement.removeChild(previewDivEl);
            backgroundDivEl.parentElement.removeChild(backgroundDivEl);
        }

    }

}
