import {APP_ID} from './config.js'

window.addEventListener('load', () => {
    let lon;
    let lat;
    let bean = APP_ID
    let isCelsius = false; // Flag to track the current scale

    let temp_des = document.querySelector('.temperature-description');
    let temp_deg = document.querySelector('.temperature-degree');
    let loc_tmz = document.querySelector('.location-timezone');
    let w_icon = document.querySelector('.icon');
    let scaleButton = document.querySelector('.change-scale'); // Reference to the button

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lon = position.coords.longitude;
            lat = position.coords.latitude;


            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${bean}&units=imperial`;

            fetch(api)
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error! status: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                
                const { description, icon } = data.weather[0];
                const { temp } = data.main; // Temperature in Fahrenheit
                const timeZoneOffset = data.timezone;
                
                // Set DOM elements from the API
                temp_deg.textContent = temp + ' °F';  // Initial display in °F
                temp_des.textContent = 'FOR THE DAY: ' + description;
                loc_tmz.textContent = `UTC${timeZoneOffset >= 0 ? '+' : ''}${timeZoneOffset / 3600}`;
                
                setIcons(description, w_icon);  // Call to setIcons with description
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    } else {
        console.error('Geolocation is not supported by this browser.');
    }

    scaleButton.addEventListener('click', () => {
        if (isCelsius) {
            // Convert to Fahrenheit
            const fahrenheitTemp = (parseFloat(temp_deg.textContent) * 9/5) + 32;
            temp_deg.textContent = Math.round(fahrenheitTemp) + ' °F';
            scaleButton.textContent = 'Change to °C';
            isCelsius = false;
        } else {
            // Convert to Celsius
            const celsiusTemp = (parseFloat(temp_deg.textContent) - 32) * 5/9;
            temp_deg.textContent = Math.round(celsiusTemp) + ' °C';
            scaleButton.textContent = 'Change to °F';
            isCelsius = true;
        }
    });

    
    function setIcons(description, iconID) {
        // Map OpenWeatherMap descriptions to Skycons icons
        const skycons = new Skycons({ color: "white" });
        const weatherIconMap = {
            "clear sky": "CLEAR_DAY",
            "few clouds": "PARTLY_CLOUDY_DAY",
            "scattered clouds": "CLOUDY",
            "broken clouds": "CLOUDY",
            "shower rain": "RAIN",
            "rain": "RAIN",
            "thunderstorm": "SLEET",
            "snow": "SNOW",
            "mist": "FOG"
        };

        const currentIcon = weatherIconMap[description] || "CLEAR_DAY";

        skycons.play();  // Start the Skycons animation
        skycons.set(iconID, Skycons[currentIcon]);  // Set the icon using the Skycons class
    }
});
