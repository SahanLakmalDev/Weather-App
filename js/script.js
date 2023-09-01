const apiKey = "b3888a9a7a2bc182330b36ada988c3c8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const cityInput = document.querySelector(".input");
const searchBtn = document.querySelector(".search_btn");

searchBtn.addEventListener("click",() => {
    const cityName = cityInput.value;
    checkWeather(cityName);
    cityInput.value = "";
})

    async function checkWeather(city){
        const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }else{
            var data = await response.json();

            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.ceil(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

            if(data.weather[0].main == "Clouds"){
                document.querySelector(".weather-icon").src = "weather-app-img/images/clouds.png";
            }else if(data.weather[0].main == "Clear"){
                document.querySelector(".weather-icon").src = "weather-app-img/images/clear.png";
            }else if(data.weather[0].main == "Rain"){
                document.querySelector(".weather-icon").src = "weather-app-img/images/rain.png";
            }else if(data.weather[0].main == "Drizzle"){
                document.querySelector(".weather-icon").src = "weather-app-img/images/drizzle.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";

        }
    }
    