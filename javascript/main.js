let IPkKey = `347c5c94292943eabf1164044241110`; 

// input   
let input = document.getElementById("input");
let buttonForm = document.getElementById("button-addon2");

// card 1
let Day = document.getElementById("day");
let History = document.getElementById("history"); 
let Location = document.getElementById("location");
let temp = document.getElementById("temp");
let icon = document.getElementById("icon");
let clear = document.getElementById("clear");

// card 2
let carday2 = document.getElementById("carday2");
let iconcard2 = document.getElementById("icon-card2");
let tempcard2 = document.getElementById("temp-card2");
let clearcard2 = document.getElementById("clear-card2");

// card 3
let Day3 = document.getElementById("day3");
let iconcard3 = document.getElementById("icon-card3");
let tempcard3 = document.getElementById("temp-card3");
let clearcard3 = document.getElementById("clear-card3");

function getCurrentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    return days[today.getDay()];
}

async function weather() {
    const location = input.value;

    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${IPkKey}&q=${location}&days=3`);
        const weatherData = await response.json();
        console.log(weatherData);
       
        // Date of day
        temp.innerHTML = `${weatherData.current.temp_c} °C`;  
        Location.innerHTML = `${weatherData.location.name}`; 
        // icon.src = `//cdn.weatherapi.com/weather/64x64/${weatherData.current.is_day ? 'day' : 'night'}/${weatherData.current.condition.code}.png`;  
        clear.innerHTML = weatherData.current.condition.text;
        const lastUpdated = new Date(weatherData.current.last_updated);
        const options = {
             day: 'numeric',
              month: 'long' };
        History.innerHTML = lastUpdated.toLocaleDateString('en-US', options);
        Day.innerHTML = getCurrentDay();
        if( weatherData.current.condition.text === "partlycloudy"){
            icon.src =`../javascript/images/icons8-partly-cloudy-day-48.png`
        }else if(weatherData.current.condition.text === "Sunny"){
            icon.src =`../javascript/images/113 (1).webp`
        }
        else if(weatherData.current.condition.text ==="Patchy rain nearby"){
            icon.src= `../javascript/images/icons8-heavy-rain-50.png`
        } 
        else{
            icon.src=`../javascript/images/113.webp`
        }

        // the  day  2
        const day2 = weatherData.forecast.forecastday[1];
        carday2.innerHTML = new Date(day2.date).toLocaleDateString('en-US', { weekday: 'long' });
        tempcard2.innerHTML = `${day2.day.avgtemp_c} °C`;
        clearcard2.innerHTML = day2.day.condition.text;
     
        if( weatherData.current.condition.text === "Partly Cloudy"){
            iconcard2.src =`../javascript/images/icons8-partly-cloudy-day-48.png`
        }else if(weatherData.current.condition.text === "Sunny"){
            iconcard2.src = `../javascript/images/113 (1).webp`
        }
        else if(weatherData.current.condition.text ==="Patchy rain nearby"){
            iconcard2.src= `../javascript/images/icons8-heavy-rain-50.png`
        }else{
            iconcard2.src=`../javascript/images/113.webp`
        }

        //the day 3
        const day3 = weatherData.forecast.forecastday[2];
        Day3.innerHTML = new Date(day3.date).toLocaleDateString('en-US', { weekday: 'long' });
        tempcard3.innerHTML = `${day3.day.avgtemp_c} °C`;
        clearcard3.innerHTML = day3.day.condition.text;
       
        if( weatherData.current.condition.text === "Partly Cloudy"){
            iconcard3.src =`../javascript/images/icons8-partly-cloudy-day-48.png`
        }else if(weatherData.current.condition.text === "Sunny"){
            iconcard3.src =`../javascript/images/113 (1).webp`
        }
        else if(weatherData.current.condition.text ==="Patchy rain nearby"){
            iconcard3.src= `../javascript/images/icons8-heavy-rain-50.png`
        } else{
            iconcard3.src=`../javascript/images/113.webp`
        }

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}

buttonForm.addEventListener("click", weather);
