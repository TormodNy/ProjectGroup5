const imgNr=13; //indicates how many images are to be added
const galleryEl = document.querySelector(".gallery")

for (var i=1;i<imgNr;i++) {
    // galleryEl.innerHTML+="<div id='imgContainer"+i+"' class='galleryImgContainer'>";
    // galleryEl.innerHTML += "<div class='imgWrapper'><img src='img/resized/"+i+".jpg' id='img"+i+"' class='galleryImg'></div>";
    // galleryEl.innerHTML+="</div>";
    const newDiv = makeElement("div", "", "", "imgWrapper");
    const newImg = makeElement("img", "", "img" + i, "galleryImg")
    newImg.src = "img/resized/" + i + ".jpg";
    newImg.alt = "Thumbnail " + i;
    newDiv.appendChild(newImg);
    galleryEl.appendChild(newDiv);
}