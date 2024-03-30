const keyApi = "b29b19264dd263787b5f10faff7323d6";
const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");

async function checkWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${keyApi}&units=metric`
  );
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  document.querySelector(
    ".weather-icon"
  ).src = `./images/${data.weather[0].main.toLowerCase()}.png`;
}
checkWeather("Ha Noi");
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
