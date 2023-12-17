const newsBlock = document.querySelector(".news");

async function newsApi() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=3a02b8c644bd4df29d5e607607d4105a"
    );
    const data = await response.json();
    const newsData = data.articles;
    newsData.map((news) => {
      newsBlock.innerHTML += `
      <div class="card" style="width: 19rem;">
  <img class="card-img-top" src="${news.urlToImage}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${news.title}</h5>
    <p class="card-text">${news.description}</p>
    <a href="${news.url}" target="_blank" class="btn btn-dark">Read More</a>
  </div>
</div>
            `;
    });
  } catch (error) {
    console.log(error);
  }
}
console.log("Homw are you");

newsApi();
