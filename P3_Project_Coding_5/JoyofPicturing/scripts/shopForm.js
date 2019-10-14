const formEl = document.getElementById("shopcontent");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    formEl.style.display = "none";
});
