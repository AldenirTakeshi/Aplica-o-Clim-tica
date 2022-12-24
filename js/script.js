const apiKey = "ef8b32bdaca9d5613b4ce1eb35db3d38";
const apiCoutryUrl = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const coutryElement = document.querySelector("#acountry");
const umidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

//Funções
const getWeatherData = async (city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();
  console.log(data);
};

const showWeatherData = (city) => {
  getWeatherData(city);
};

//Eventos

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const city = cityInput.value;

  showWeatherData(city);
});
