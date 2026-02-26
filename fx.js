async function loadFX(){
  let res = await fetch("https://open.er-api.com/v6/latest/EUR");
  let data = await res.json();
  document.getElementById("eurusd").innerText = data.rates.USD;
}
loadFX();
setInterval(loadFX, 30000);
