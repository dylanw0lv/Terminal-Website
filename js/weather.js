
const fetchWeather = () => {
    let lat;
    let lon;
    
    
    navigator.geolocation.getCurrentPosition((location) => {
        lat = location.coords.latitude;
        lon = location.coords.longitude;
        
        let units = "imperial";
        let url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + appID + "&units=" + units;
        
        fetch(url)
            .then((response => {
                if (!response.ok) {
                    throw response;
                }
                return response.json();
            }))
            .then((data) => {
                console.log(data);
                let city = data.name;
                let temp = data.main.temp;
                let description = data.weather[0].description;
                let humidity = data.main.humidity;
                let windSpeed = data.wind.speed;
                let feelsLike = data.main.feels_like;
                let message =
`The current temperature in ${city} is ${temp}°F.
It feels like ${feelsLike}°F.
Description: ${description}
Humidity: ${humidity}%
Wind Speed: ${windSpeed} mph`;

                typeWriterEffect(message, ".output", 10);
            })
            .catch(err => console.log(err))
    })
    
}

    
 


       
    
