let formInputCity = document.getElementById('city'); 
let inputCityName = document.getElementById('cityName');
let headerCurrentCity = document.getElementById('currentCity');

let pMinTemp = document.querySelector('.min');
let pMaxTemp = document.querySelector('.max');
let pCurrentTemp = document.querySelector('.current');
let pWeatherIcon = document.getElementById('weather_icon');


formInputCity.addEventListener('submit', e => {
    e.preventDefault();
    
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputCityName.value +'&appid=cf4e79696d1dc5d14ca3088694b31921')
    .then(response => 
        response.json()
        )
        .then(data => {
        headerCurrentCity.innerHTML = `${data.name}, ${data.sys.country}`;

        // Kelvin to Celsius function
        let kelvinToCelsius = temp => {
            let celsius = temp - 273.15;
            return celsius;
        } 
        
        let temp = data.main.temp;
        let minTemp = data.main.temp_min;
        let maxTemp = data.main.temp_max;
        
        
        pCurrentTemp.innerHTML = Math.round(kelvinToCelsius(temp))+'°C';
        pMaxTemp.innerHTML = Math.round(kelvinToCelsius(maxTemp))+'°C';
        pMinTemp.innerHTML = Math.round(kelvinToCelsius(minTemp))+'°C'; // toFixed(2) ako zelim da ide na dve decimale


        // Weather icon
        let currentWeatherIcon = data.weather[0].icon;

        if(currentWeatherIcon == '01d'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682848_day_forecast_sun_sunny_weather_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '01n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682847_eclipse_forecast_moon_night_space_icon_512px.png"></img>`;
        }else if(currentWeatherIcon == '02d'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682849_cloud_cloudy_day_forecast_sun_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '02n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682846_cloud_cloudy_forecast_moon_night_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '03d' || currentWeatherIcon == '03n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682850_cloud_clouds_cloudy_forecast_weather_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '04d' || currentWeatherIcon == '04n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682850_cloud_clouds_cloudy_forecast_weather_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '09d' || currentWeatherIcon == '09n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682845_cloud_cloudy_forecast_rain_sun_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '10d'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682834_cloud_day_forecast_rain_rainy_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '10n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682843_cloud_forecast_moon_night_rain_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '11d' || currentWeatherIcon == '11n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682828_cloud_light bolt_lightning_rain_storm_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '13d'  || currentWeatherIcon == '13n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_3741358_cold_snow_snowflake_icon_512px.png"></img>`;
        } else if(currentWeatherIcon == '50d' || currentWeatherIcon == '50n'){
            pWeatherIcon.innerHTML = `<img src="../img/weather_icon/iconfinder_2682821_fog_foggy_forecast_mist_weather_icon_512px.png"></img>`;
        } 

        console.log(data);
    })

    .catch(err => {
        console.log(err);
    })
        


        formInputCity.reset();
});