async function loadStocks(){
  let res = await fetch("https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=YOUR_API_KEY");
  let data = await res.json();
  document.getElementById("aapl").innerText = "$" + data[0].price;
}
loadStocks();
setInterval(loadStocks, 30000);
