const formEl = document.getElementById("shopcontent");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    text = "";
    for(i = 0; i < formEl.length - 1; i++){
        text += "<tr>";
        text += "<td>" + formEl.elements[i].name[0].toUpperCase() + formEl.elements[i].name.substring(1) + ": </td>";
        text += "<td>" + formEl.elements[i].value + " </td>";
        text += "</td>";
    }

    formEl.style.display = "none";

    bodyEl.innerHTML += "<div><h2>Order details</h2><p>Your order has been placed successfully.</p> <table>" + text + "</table></div>";
});
