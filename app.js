const newsBlock = document.querySelector(".news");

async function newsApi() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=3a02b8c644bd4df29d5e607607d4105a"
    );
    const data = await response.json();
    console.log(data);
    data.articles.map((news) => {
      newsBlock.innerHTML += `
      
            `;
    });
  } catch (error) {
    console.log(error);
  }
}
console.log("Homw are you");

newsApi();
