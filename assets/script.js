const API_KEY = '511887bf47a299a310de9319cd85a235'
var searchButton =document.querySelector('#sbtn');
var cityInput =document.querySelector('#input');
var cityTag =document.querySelector('#cityName');
var temp =document.querySelector('#temperature');
var humidity =document.querySelector('#humidity');
var temp1 =document.querySelector('#temperature1');
var temp2 =document.querySelector('#temperature2');
var temp3 =document.querySelector('#temperature3');
var temp4 =document.querySelector('#temperature4');
var temp5 =document.querySelector('#temperature5');
var humidity1 =document.querySelector('#humidity1');
var humidity2 =document.querySelector('#humidity2');
var humidity3 =document.querySelector('#humidity3');
var humidity4 =document.querySelector('#humidity4');
var humidity5 =document.querySelector('#humidity5');
var wind =document.querySelector('#wind-speed');
var uvIndex =document.querySelector('#uv-index');
var date1 =document.querySelector('#date1');
var date2 =document.querySelector('#date2');
var date3 =document.querySelector('#date3');
var date4 =document.querySelector('#date4');
var date5 =document.querySelector('#date5');
var icon =document.querySelector('#icon');
const state = {};


//fetch weather Data
function weather(lat, lon) {
    var part = "hourly,daily"

    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}&units=imperial`
    fetch(API_URL)
    .then(res => res.json())
    .then(data => { 
        console.log("Current Day",data)
        console.log(data.current.weather[0].icon)
//set the text content of the elements to equal data in the respone
    //cityTag.textContent = data.timezone
    icon.textContent = data.current.weather[0].icon
    temp.textContent = data.current.temp
    humidity.textContent = data.current.humidity
    wind.textContent = data.current.wind_speed
    uvIndex.textContent = data.current.uvi
   

    })
}


searchButton.addEventListener("click", function(){
//when we click run the weather function
    // weather();
    fiveDay();
}) 

function fiveDay() {
    var cityName = cityInput.value
    const API_URL2 = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=imperial`
    fetch(API_URL2)
    .then(res => res.json())
    .then(data => { 
        console.log("5DAY",data)

//set the text content of the elements to equal data in the response
    temp1.textContent = data.list[1].main.temp
    temp2.textContent = data.list[2].main.temp
    temp3.textContent = data.list[3].main.temp
    temp4.textContent = data.list[4].main.temp
    temp5.textContent = data.list[5].main.temp
    humidity1.textContent = data.list[1].main.humidity
    humidity2.textContent = data.list[2].main.humidity
    humidity3.textContent = data.list[3].main.humidity
    humidity4.textContent = data.list[4].main.humidity
    humidity5.textContent = data.list[5].main.humidity
    date1.textContent = data.list[2].dt_txt
    date2.textContent = data.list[10].dt_txt
    date3.textContent = data.list[18].dt_txt
    date4.textContent = data.list[26].dt_txt
    date5.textContent = data.list[34].dt_txt
    cityTag.textContent = data.city.name


weather(data.city.coord.lat, data.city.coord.lon)
    })
}

