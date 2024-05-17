var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "2fa388be866222336509a71631ce5fc9";

function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data.name;
        var descrip = data.weather[0].description;
        var temperature = data.main.temp;
        var windspeed = data.wind.speed;
        
        city.innerHTML = 'WEATHER OF <span>' + nameval + '</span>';
        temp.innerHTML = 'Temperature: <span>' + conversion(temperature) + '</span>';
        description.innerHTML = 'Sky Conditions: <span>' + descrip + '</span>';
        wind.innerHTML = 'Wind Speed: <span>' + windspeed + ' km/hr</span>';
    })
    .catch(err => alert('You entered the wrong city name'));
});
