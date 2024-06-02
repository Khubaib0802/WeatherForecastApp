function getWeather() {
    var city = document.getElementById("cityInput").value;
    var apiKey = "e7ddcf97172946c9a9d150953240206"; // Replace with your WeatherAPI API key
    var url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          document.getElementById("weatherInfo").innerText = data.error.message;
        } else {
          var city = data.location.name;
          var tempC = data.current.temp_c;
          var condition = data.current.condition.text;
          var weatherInfo = `Weather in ${city}: ${tempC}°C, ${condition}`;
          document.getElementById("weatherInfo").innerText = weatherInfo;
        }
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }
  
  