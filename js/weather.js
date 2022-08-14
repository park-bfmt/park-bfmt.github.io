const city = document.querySelector("#city");
const weather = document.querySelector("#weather");
const temp = document.querySelector("#temp");

const API_KEY = "9d7e8d61b78f7ceb762f24f2a3f114de";

function getGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // url 로드
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cityName = data.name;
      const nowWeather = data.weather[0].main;
      const nowTemp = data.main.temp;
      city.innerText = cityName;
      weather.innerText = nowWeather;
      temp.innerText = nowTemp;
      console.log(city);
    });
}

function getGeoErr() {
  alert("위치 정보를 찾을 수 없습니다.");
}
navigator.geolocation.getCurrentPosition(getGeo, getGeoErr);
