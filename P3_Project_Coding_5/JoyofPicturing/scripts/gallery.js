const imgNr = 13; //indicates how many images are to be added
const galleryEl = document.querySelector(".gallery");

for (var i = 1; i <= imgNr; i++) {
    const newDiv = makeElement("div", "", "", "imgWrapper");
    const newImg = makeElement("img", "", "img" + i, "galleryImg")
    newImg.src = "img/resized/" + i + ".jpg";
    newImg.alt = "Thumbnail " + i;
    newDiv.appendChild(newImg);
    galleryEl.appendChild(newDiv);

    newImg.addEventListener("click", previewFunction);
}


function previewFunction(e) {
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

    //exits preview if user clicks outside of the preview element or the x
    closePreviewEl.addEventListener("click", exitPreview);
    backgroundDivEl.addEventListener("click", exitPreview);
    function exitPreview(){
        location.href="gallery.html";
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
}
