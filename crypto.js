async function loadCrypto(){
  let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
  let data = await res.json();
  document.getElementById("btc").innerText = "$" + data.bitcoin.usd;
}
loadCrypto();
setInterval(loadCrypto, 30000);
