const newsBlock = document.querySelector(".news");
const newsType = document.querySelector(".newsType");
const generalNews = document.querySelector('.general');
const businessNews = document.querySelector('.business');
const sportsNews = document.querySelector('.sports');
const technologyNews = document.querySelector('.technology');
const entertainmentNews = document.querySelector('.entertainment');

let newDataArray = [];

const onloadApiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3a02b8c644bd4df29d5e607607d4105a';

function renderNews() {
  newsBlock.innerHTML = "";
  newDataArray[0].map((news) => {
    newsBlock.innerHTML += `
    <div class="card" style="width: 19rem;">
<img class="card-img-top" src="${news.urlToImage}" alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">${news.title}</h5>
  <p class="card-text">${news.publishedAt}</p>
  <p class="card-text">${news.description}</p>
  <a href="${news.url}" target="_blank" class="btn btn-dark">Read More</a>
</div>
</div>
          `;
  });
}

async function newsApi() {
  try {
    const response = await fetch(onloadApiUrl);
    const data = await response.json();
    const news = await data.articles;
    newDataArray.push(news);
    renderNews();
  } catch (error) {
    console.log(error);
  }
}

window.onload = newsApi();

async function generalDataNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=3a02b8c644bd4df29d5e607607d4105a`);
    newDataArray = [];
    const news = await response.json();
    const newsData = await news.articles;
    newDataArray.push(newsData);
    renderNews();
  } catch (error) {
    console.log(error);
  }
}

async function businessDataNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=3a02b8c644bd4df29d5e607607d4105a`);
    newDataArray = [];
    const news = await response.json();
    const newsData = await news.articles;
    newDataArray.push(newsData);
    renderNews();
  } catch (error) {
    console.log(error);
  }
}

async function sportsDataNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=3a02b8c644bd4df29d5e607607d4105a`);
    newDataArray = [];
    const news = await response.json();
    const newsData = await news.articles;
    newDataArray.push(newsData);
    renderNews();
  } catch (error) {
    console.log(error);
  }
}

async function technologyDataNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=3a02b8c644bd4df29d5e607607d4105a`);
    newDataArray = [];
    const news = await response.json();
    const newsData = await news.articles;
    newDataArray.push(newsData);
    renderNews();
  } catch (error) {
    console.log(error);
  }
}

async function entertainmentDataNews() {
  try {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3a02b8c644bd4df29d5e607607d4105a`);
    newDataArray = [];
    const news = await response.json();
    const newsData = await news.articles;
    newDataArray.push(newsData);
    renderNews();
  } catch (error) {
    console.log(error);
  }
}

generalNews.addEventListener('click', () => {
  newsType.textContent = 'General';
  generalDataNews();
});

businessNews.addEventListener('click', () => {
  newsType.textContent = 'Business';
  businessDataNews();
});

sportsNews.addEventListener('click', () => {
  newsType.textContent = 'Sports';
  sportsDataNews();
});

technologyNews.addEventListener('click', () => {
  newsType.textContent = 'Technologies';
  technologyDataNews();
});

entertainmentNews.addEventListener('click', () => {
  newsType.textContent = 'Entertainment';
  entertainmentDataNews();
});
