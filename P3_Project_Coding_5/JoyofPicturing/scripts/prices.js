//Updates the price based on which radio button is selected
function update_price(array, price) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].checked) {
      return (price *= array[i].value);
    }
  }
}

//Calculates the total price
function total_price () {
  let standard_price = 20;

  const print = document.getElementsByClassName("paper");
  const size = document.getElementsByClassName("size");
  const frame = document.getElementsByClassName("frame");

  standard_price = update_price(print, standard_price);
  standard_price = update_price(size, standard_price);
  standard_price = update_price(frame, standard_price);

  standard_price = Math.round(standard_price * 100) / 100;

  document.getElementById("output").value = standard_price;
}
