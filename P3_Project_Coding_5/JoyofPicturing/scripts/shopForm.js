const formEl = document.getElementById("shopcontent");

//When the submit button is pressed
formEl.addEventListener("submit", (e) => {
    //Prevent the site from reloading
    e.preventDefault();

    //Creates a table with the order details
    text = "";
    for(i = 0; i < formEl.length - 1; i++){
        text += "<tr>";
        text += "<td>" + formEl.elements[i].name[0].toUpperCase() + formEl.elements[i].name.substring(1) + ": </td>";
        text += "<td>" + formEl.elements[i].value + " </td>";
        text += "</td>";
    }

    //Removes the site
    formEl.style.display = "none";

    //Prints the order details to the body
    bodyEl.innerHTML += "<div id='details'><h2>Order details</h2><p>Your order has been placed successfully.</p> <table>" + text + "</table></div>";
});
