const searchInput = document.querySelector("#searchInput");
const submit = document.querySelector("#submit");

const cityName = document.querySelector(".cityName");
const mainTemp = document.querySelector(".mainTemp");

const weatherForm = document.querySelector(".weatherForm")
const getWeather = (location) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=024a35deb27172548421f362173cc1e3&units=imperial
    `,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);

      cityName.textContent = response.name;
      mainTemp.textContent = response.main.temp;
    });
};

let send = () => {
  getWeather(searchInput.value);
};

