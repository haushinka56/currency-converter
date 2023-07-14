const dollarRateInput = document.getElementById("dollarRate");
const euroRateInput = document.getElementById("euroRate");
const realRateInput = document.getElementById("realRate");

const dollarInput = document.getElementById("dollar");
const euroInput = document.getElementById("euro");
const realInput = document.getElementById("real");
const submit = document.getElementById("submit");
const output = document.getElementById("output");
const results = document.getElementById("results");

submit.onclick = function (event) {
  event.preventDefault();
  convert();
};

function convert() {
  if (!dollarRateInput.value || !euroRateInput.value || !realRateInput.value) {
    alert("Please fill in all the rate fields.");
    return;
  }

  if (!dollarInput.value && !euroInput.value && !realInput.value) {
    alert("Please enter a value to convert.");
    return;
  }

  let dollar = dollarRateInput.value;
  let euro = euroRateInput.value;
  let real = realRateInput.value;

  if (dollarInput.value) {
    const dollarRealResult = (dollarInput.value * real).toFixed(2);
    const dollarEuroResult = (dollarInput.value * euro).toFixed(2);
    output.innerText =
      "USD " +
      dollarInput.value +
      `

      EUR ` +
      +dollarEuroResult +
      " ⬩ BRL " +
      dollarRealResult;
    results.style = "border: 1px solid #bfe6fb;";
    dollarInput.value = "";
  } else if (euroInput.value) {
    const euroDollarResult = ((euroInput.value * dollar) / euro).toFixed(2);
    const euroRealResult = ((euroInput.value * real) / euro).toFixed(2);
    output.innerText =
      "EUR " +
      euroInput.value +
      `

      USD ` +
      euroDollarResult +
      " ⬩ BRL " +
      euroRealResult;
    results.style = "border: 1px solid #bfe6fb;";
    euroInput.value = "";
  } else if (realInput.value) {
    const realDollarResult = ((realInput.value * dollar) / real).toFixed(2);
    const realEuroResult = ((realInput.value * euro) / real).toFixed(2);
    output.innerText =
      "BRL " +
      realInput.value +
      `

      USD ` +
      +realDollarResult +
      " ⬩ EUR " +
      realEuroResult;
    results.style = "border: 1px solid #bfe6fb;";
    realInput.value = "";
  }
}
