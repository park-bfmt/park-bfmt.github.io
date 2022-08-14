const imgs = ["0.JPG", "0.JPG", "0.JPG"];

const todaysImgNum = Math.floor(Math.random() * imgs.length);
const todaysImg = imgs[todaysImgNum];

const bgImg = document.createElement("style");

bgImg.innerText = `body {background-image: url(img/${todaysImg}); background-position: center;  background-repeat: no-repeat;  background-size: cover; }`;

document.head.appendChild(bgImg);
