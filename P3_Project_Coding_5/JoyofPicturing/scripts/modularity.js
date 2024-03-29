const bodyEl = document.querySelector('body');

//Defining the navbar
const navBar = makeElement("header", "", "navbar");

//Making the logo
const logo = makeElement("img", "", "joy");
logo.src = "img/rb_logo_black.svg";
const logoLink = makeElement("a")
logoLink.href = "index.html";
logoLink.appendChild(logo);
navBar.appendChild(logoLink);

//Making the buttons in the navbar
const navButtons = ["about", "prices", "gallery", "home"];
for (let i = 0; i < 4; i++){
    newA = makeElement("a");
    newA.appendChild(makeElement("p", navButtons[i].toUpperCase(), navButtons[i], "navbutton"));

    if(i != 3){
        newA.href = navButtons[i] + ".html";
    }else{
        newA.href = "index.html";
    }

    navBar.appendChild(newA);
}

bodyEl.appendChild(navBar);

//Making the footer
const footer = makeElement("footer");
footer.appendChild(makeElement("p", "Copyright 2019. All rights reserved."));
bodyEl.appendChild(footer);

//Custom function for making elements faster
function makeElement (element, text, id, className) {

    //Internet explorer doesn't like default values:
    text = text || "";
    id = id || "";
    className = className || "";

    const newElement = document.createElement(element);

    if(text != ""){
        newText = document.createTextNode(text);
        newElement.appendChild(newText);
    }

    if(id != ""){
        newElement.id = id;
    }

    if(className != ""){
        newElement.className = className;
    }

    return newElement;
}
