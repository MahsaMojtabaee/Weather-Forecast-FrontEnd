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
// let city1 = prompt("Enter a city?");
// message(city1);





// set the time based on the current date of the programer's current location
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



// change the city and time based on the user search-box input
function changeCity(event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-box-input");
  let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=${apiKey}`;

  // prevent changing the html doc if the city name is invalid
  // and notify the user to change the city
  axios.get(weatherUrl)
  .then(displayCityAndTemp)
  .catch(
    function(error){
      alert("Could not find the city.\nPlease enter another name😊")
    }
  );
  
}



function setCurrentCity(position){
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  // console.log(position.coords.latitude);
  // console.log(position.coords.longitude);
  let apiKey = "aca4dd3643b89e94dbd3cac6cf6f2638";
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(weatherUrl).then(displayCityAndTemp);
}

function changeToCurrent(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(setCurrentCity);
}

let city = document.querySelector("#search-box-form");
city.addEventListener("submit", changeCity);

let currentCity = document.querySelector(".currentCity");
currentCity.addEventListener("click", changeToCurrent);

// A function to change the temp unit based on the current one
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



// display the city and current tempreture in html doc
function displayCityAndTemp(response) {

  //change the city in html document
  let HTMLcity = document.querySelector("#location");
  HTMLcity.innerHTML = response.data.name;

  //change the current temp regarding the city
  let currentTemp = response.data.main.temp;
  let pageTemp = document.querySelector("#currentTemp");
  pageTemp.innerHTML = Math.round(currentTemp);

  //fix the temp unit to celsius
  let currentDegree = document.querySelector("#currentDegree");
  let toDegree = document.querySelector("#ToDegree");
  currentDegree.innerHTML = "℃";
  toDegree.innerHTML = "℉";


  //change the weather description regarding the city
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.weather[0].description;
  // console.log(response.data.weather[0].description);
  

}






