"use strick";

// Variable Globales des données
const apiKey = "443f01183af97e8fb89dfdca06343a5d";
const city = "london"; // document.querySelector(".search-input").value;

// Implementation des fonction

const displayWeather = function (data) {};

const displayForecast = function (data) {};

const getWeather = function () {
  //   if (!city) {
  //     alert("Entrez correctement le nom de la ville");
  //     return;
  //   }
  const currentDataUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  fetch(currentDataUrl)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => {
      console.error(err);
    });

  fetch(forecastUrl)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => {
      console.error(err);
    });
};

getWeather();
