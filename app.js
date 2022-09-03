const searchInput = document.querySelector("#searchInput");
const submit = document.querySelector("#submit");

const cityName = document.querySelector(".cityName");
const mainTemp = document.querySelector(".mainTemp");

const weatherForm = document.querySelector("#weatherForm");
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
      cityName.textContent = response.name;
      mainTemp.textContent = response.main.temp;

      initGif(response.main.temp);
    })
    .catch((err) => {
      weatherErrMessage.textContent = "City not available"
    });
};

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(searchInput.value);
});

const weatherErrMessage = document.querySelector(".weatherApiErrMessage")

const initGif = async (temp) => {
  const bodyBgImage = document.querySelector(".bodyBgImage")

  if(temp > 80){
    temp = "hot weather"
  } else if (temp > 60) {
    temp = "perfect"
  } else {
    temp = "cold weather"
  }

  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Yf8XzvE7Yz17pA3udQght81H0ChY6cqN&s=${temp}`, { mode: "cors" })
  gifData = await response.json();
  bodyBgImage.src = gifData.data.images.original.url
  bodyBgImage.alt = temp
}

