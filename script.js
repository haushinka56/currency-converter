let dollar = 1;
let real = 5.07;
let euro = 0.92;

const dollarInput = document.getElementById("dollar");
const euroInput = document.getElementById("euro");
const realInput = document.getElementById("real");
const submit = document.getElementById("submit");
const output = document.getElementById("output");

submit.onclick = convert;

function convert() {
  if (dollarInput.value) {
    const dollarRealResult = (dollarInput.value * real).toFixed(2);
    const dollarEuroResult = (dollarInput.value * euro).toFixed(2);
    alert(
      "USD " +
        dollarInput.value +
        " = EUR " +
        dollarEuroResult +
        " BRL " +
        dollarRealResult
    );
  } else if (euroInput.value) {
    const euroDollarResult = ((euroInput.value * dollar) / euro).toFixed(2);
    const euroRealResult = ((euroInput.value * real) / euro).toFixed(2);
    alert(
      "EUR " +
        euroInput.value +
        " = USD " +
        euroDollarResult +
        " BRL " +
        euroRealResult
    );
  } else if (realInput.value) {
    const realDollarResult = ((realInput.value * dollar) / real).toFixed(2);
    const realEuroResult = ((realInput.value * euro) / real).toFixed(2);
    alert(
      "BRL " +
        realInput.value +
        " = USD " +
        realDollarResult +
        " EUR " +
        realEuroResult
    );

    // do something with the calculated results
  } else {
    // show an error message or handle the case where no input was given
  }
}
