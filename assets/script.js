const API_KEY = '511887bf47a299a310de9319cd85a235'
var searchButton =document.querySelector('#sbtn');
var cityInput =document.querySelector('#input');
var cityTag =document.querySelector('#cityName');
var temp =document.querySelector('#temperature');
var humidity =document.querySelector('#humidity');
var wind =document.querySelector('#wind-speed');
var uvIndex =document.querySelector('.index');
const state = {};


//fetch weather Data
function weather(lat, lon) {
    var part = "hourly,daily"

    const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${part}&appid=${API_KEY}&units=imperial`
    fetch(API_URL)
    .then(res => res.json())
    .then(data => { 
        console.log("Hello",data)
//set the text content of the elements to equal data in the respone
    //cityTag.textContent = data.name
    //temp.textContent = data.main.temp
   // humidity.textContent = data.main.humidity
    //wind.textContent = data.wind.speed
   


        //render code putting information in the DOM
//listener for the button


//document query selector

// or dynamically create element

//forloop to show multiple days, loop through the data and grab the different components(wind,temp,etc)

    })
}


searchButton.addEventListener("click", function(){
//when we click run the weather function
    // weather();
    fiveDay();
}) 

// pull in today's date



function fiveDay() {
    var cityName = cityInput.value

    const API_URL2 = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    fetch(API_URL2)
    .then(res => res.json())
    .then(data => { 
        console.log("5DAY",data)

//set the text content of the elements to equal data in the respone
    //cityTag.textContent = data.city.name
    //temp.textContent = data.list."0".main.temp
   // humidity.textContent = data.main.humidity
    //wind.textContent = data.wind.speed
   


        //render code putting information in the DOM
//listener for the button


//document query selector

// or dynamically create element

//forloop to show multiple days, loop through the data and grab the different components(wind,temp,etc)




weather(data.city.coord.lat, data.city.coord.lon)
    })
}

