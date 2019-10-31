const imgNr=13; //indicates how many images are to be added
const galleryEl = document.querySelector(".gallery")

for (var i=1;i<imgNr;i++) {
    imgWrapperEl=document.createElement("div");
    imgWrapperEl.classList.add("imgWrapper");
    galleryEl.appendChild(imgWrapperEl);
    
    imgEl=document.createElement("img");
    imgEl.src="img/resized/"+i+".jpg";
    imgEl.classList.add("galleryImg");
    imgEl.id="img"+i;
    imgWrapperEl.appendChild(imgEl);
    
    
    // galleryEl.innerHTML+="<div class='imgWrapper'><img src='img/resized/"+i+".jpg' id='img"+i+"' class='galleryImg'></div>";
}

galleryEl.addEventListener("click", previewFunction);


function previewFunction() {
    
}