const famousSaying = [
  {
    quotes: "강한자가 살아남는 것이 아니라 살아남는 자가 강한 것이다",
    author: "김유신 장군",
  },
  {
    quotes: "배우는 사람은 모름지기 심신을 수련해야 한다",
    author: "퇴계이황",
  },
  {
    quotes: "세월을 헛되이 보내지 마라 청춘은 다시 돌아오지 않는다",
    author: "안중근",
  },
];

const quotes = document.querySelector("#quotes");
const author = document.querySelector("#author");

const todaysQuotesNum = Math.floor(Math.random() * famousSaying.length);

quotes.innerText = famousSaying[todaysQuotesNum].quotes;
author.innerText = famousSaying[todaysQuotesNum].author;
