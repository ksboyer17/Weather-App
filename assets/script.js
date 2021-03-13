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
var icon2 =document.querySelector('#icon2');
var icon3 =document.querySelector('#icon3');
var icon4 =document.querySelector('#icon4');
var icon5 =document.querySelector('#icon5');
var previousHistory;

//function loadSearchHistory() {
//if statement local storage get item of the history is false then
//          then your previousHistory should be equal to empty array
            //else 
            //previous history = local storage get item
            // if there is a history you have to create elements and display them as well... denver etc..
//}

//loadSearchHistory();

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

    const iconURL =
    'http://openweathermap.org/img/w/' +
    data.current.weather[0].icon +
    '.png';
  icon.setAttribute('src', iconURL);
    temp.textContent = data.current.temp
    humidity.textContent = data.current.humidity
    wind.textContent = data.current.wind_speed
    uvIndex.textContent = data.current.uvi
   

    })
}


searchButton.addEventListener("click", function(){
//when we click run the weather function
    // weather();
   // weatherHistory(cityInput.value);
    fiveDay();
}) 

function weatherHistory(searchName){
   //now push into local storage, get item set item, push in new search term. 
   localStorage.setItem("cityStorage", searchName);
   console.log(localStorage.getItem("cityStorage"));
}



function fiveDay() {
    var cityName = cityInput.value
    const API_URL2 = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=imperial`
    fetch(API_URL2)
    .then(res => res.json())
    .then(data => { 
        console.log("5DAY",data)
    //save search to local storage
       // if (!previousHistory.includes(cityInput.value)){
       //     weatherHistory(cityInput.value);
      //  }

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
    //statically pulled icons for days of the week
    const iconURL1 =
    'http://openweathermap.org/img/w/' +
    data.list[1].weather[0].icon +
    '.png';
    icon1.setAttribute('src', iconURL1);
    const iconURL2 =
    'http://openweathermap.org/img/w/' +
    data.list[2].weather[0].icon +
    '.png';
    icon2.setAttribute('src', iconURL2);
    const iconURL3 =
    'http://openweathermap.org/img/w/' +
    data.list[3].weather[0].icon +
    '.png';
    icon3.setAttribute('src', iconURL3);
    const iconURL4 =
    'http://openweathermap.org/img/w/' +
    data.list[4].weather[0].icon +
    '.png';
    icon4.setAttribute('src', iconURL4);
    const iconURL5 =
    'http://openweathermap.org/img/w/' +
    data.list[5].weather[0].icon +
    '.png';
    icon5.setAttribute('src', iconURL5);


weather(data.city.coord.lat, data.city.coord.lon)
    })
}

