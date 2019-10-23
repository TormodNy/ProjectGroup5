let bodyEl = document.querySelector('body');

// moved the a element outside the p element so that the link applies to the whole p-element,
// not the text

bodyEl.innerHTML += '<header id="navbar">'
                    + '<p id="joy">Joy of Picturing</p>'
                    + '<a href="about.html"><p id="about" class="navbutton">ABOUT & CONTACT</p></a>'
                    + '<a href="prices.html"><p id="prices" class="navbutton">PRICES</p></a>'
                    + '<a href="gallery.html"><p id="gallery" class="navbutton">GALLERY</p></a>'
                    + '<a href="index.html"><p id="home" class="navbutton">HOME</p></a>'
                    + '</header>'
                    + '<footer>'
                    + '<p>&#9400; Copyright 2019. All rights reserved.</p>'
                    + '</footer>';
