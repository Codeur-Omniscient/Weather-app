"use strick";

// Variables
const apiKey = "443f01183af97e8fb89dfdca06343a5d";
const city = "brazzaville"; // document.querySelector(".search-input").value;
let searchInput = document.querySelector(".search-input").value;
const searchBtn = document.querySelector(".search-btn");
const precipitation = document.querySelector(".pValue");
const humidity = document.querySelector(".hValue");
const wind = document.querySelector(".wValue");
const day = document.querySelector(".day-text");
const dayTime = document.querySelector(".day-time");
const locationCity = document.querySelector(".location-place");
const iconElt = document.querySelector(".icon");
const temperatureElt = document.querySelector(".temperature");
const temps = document.querySelector(".time");
const notificationText = document.querySelector(".notification-text");
const notificationBox = document.querySelector(".notification-box");

// Implementation des fonction

const renderError = function (msg) {
  const popMsg = setTimeout(() => {
    notificationText.textContent = `${msg.message}`;
    notificationBox.classList.add("active");
  }, 0);

  setTimeout(() => {
    clearTimeout(popMsg);
    notificationBox.classList.remove("active");
  }, 3000);
};

const displayWeatherData = function (data) {
  if (data.cod === "404") {
    renderError(`internet is out ${data.message}`);
  } else {
    const cityName = data.name;
    const humidityData = data.main.humidity;
    const pressureData = Math.round(data.main.pressure / 100);
    const windData = Math.round(data.wind.speed * 100);
    const temp = Math.round(data.main.temp);
    const descriptionW = data.weather[0].description;
    const icon = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    locationCity.textContent = cityName;
    temps.textContent = descriptionW;
    temperatureElt.textContent = `${temp}°C`;
    precipitation.textContent = `${pressureData}%`;
    humidity.textContent = `${humidityData}%`;
    wind.textContent = `${windData}km/h`;

    iconElt.src = iconUrl;
    iconElt.alt = descriptionW;
  }
};

const displayForecast = function (data) {};

const getWeatherData = function () {
  //   if (!city) {
  //     alert("Entrez correctement le nom de la ville");
  //     return;
  //   }
  const currentDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(currentDataUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeatherData(data);
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
      renderError(`Something wrong ${err.message}`);
    });

  //   fetch(forecastUrl)
  //     .then((response) => response.json())
  //     .then((data) => data)
  //     .catch((err) => {
  //       console.error(err);
  //     });
};

getWeatherData();
