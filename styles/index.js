let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

function message(cityName) {
  if (cityName === null) {
  } else {
    if (weather.hasOwnProperty(cityName)) {
      let rndCtemp = Math.round(weather[cityName].temp);
      let rndFtemp = Math.round(weather[cityName].temp * 9/5 + 32);
      alert(
        `It is currently ${rndCtemp}°C (${rndFtemp}°F) in ${cityName} with a humidity of ${weather[cityName].humidity}%`
      );
    } else {
      alert(
        `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${cityName}`
      );
    }
  }
}
let city1 = prompt("Enter a city?");
message(city1);

let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let HTMLday = document.querySelector("#current-day");
let hour = now.getHours();
let minutes = now.getMinutes();
let fullMinutes = minutes > 9 ? `${minutes}` : `0${minutes}`;
let fullHours = hour > 9 ? `${hour}` : `0${hour}`;

HTMLday.innerHTML = `${day} ${fullHours}:${fullMinutes}`;

function changeCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-box-input");
//   console.log(cityName.value);
  let HTMLcity = document.querySelector("#location");
  HTMLcity.innerHTML = cityName.value;
}
let city = document.querySelector("#search-box-form");
city.addEventListener("submit", changeCity);

function convertDegree(){
    let currentTemp = document.querySelector("#currentTemp");
    let currentDegree = document.querySelector("#currentDegree");
    let toDegree = document.querySelector("#ToDegree");
    if(currentDegree.innerHTML === "℃"){
        currentTemp.innerHTML = Math.round(currentTemp.innerHTML * 9 / 5 + 32);
        currentDegree.innerHTML = "℉";
        toDegree.innerHTML = "℃";
    }
    else{
        currentTemp.innerHTML = Math.round((currentTemp.innerHTML - 32) * 5 / 9);
        currentDegree.innerHTML = "℃";
        toDegree.innerHTML = "℉";
    }

}
let FCconvert = document.querySelector("#ToDegree");
FCconvert.addEventListener("click", convertDegree);

