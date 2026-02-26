async function loadNews(){
  let res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_NEWS_API_KEY");
  let data = await res.json();
  document.getElementById("news").innerHTML = data.articles.slice(0,5)
    .map(a=>`<p><a href="${a.url}" target="_blank">${a.title}</a></p>`).join('');
}
loadNews();
setInterval(loadNews, 30000);
