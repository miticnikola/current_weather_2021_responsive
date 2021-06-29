let formInputCity = document.getElementById('city'); 
let inputCityName = document.getElementById('cityName');
let headerCurrentCity = document.getElementById('currentCity');

let pMinTemp = document.querySelector('.min');
let pMaxTemp = document.querySelector('.max');
let pCurrentTemp = document.querySelector('.current');


formInputCity.addEventListener('submit', e => {
    e.preventDefault();
    
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputCityName.value +'&appid=cf4e79696d1dc5d14ca3088694b31921')
    .then(response => 
        response.json()
        )
        .then(data => {
        headerCurrentCity.innerHTML = data.name;

        // Kelvin to Celsius function
        let kelvinToCelsius = temp => {
            let celsius = temp - 273.15;
            return celsius;
        } 
        
        let temp = data.main.temp;
        let minTemp = data.main.temp_min;
        let maxTemp = data.main.temp_max;
        
        
        pCurrentTemp.innerHTML = Math.round(kelvinToCelsius(temp))+'°C';
        pMaxTemp.innerHTML = Math.round(kelvinToCelsius(minTemp))+'°C';
        pMinTemp.innerHTML = Math.round(kelvinToCelsius(maxTemp))+'°C'; // toFixed(2) ako zelim da ide na dve decimale

        console.log(data);
    })

    .catch(err => {
        console.log(err);
    })
        


        formInputCity.reset();
})