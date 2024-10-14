# vanillaJS-weather-app
Weather updates app designed with vanilla JavaScript using API for real time weather updates.

This is a simple weather application built with Vanilla JavaScript that allows users to view the current weather based on their geographical location. The app fetches data from the OpenWeatherMap API and provides temperature, weather descriptions, and weather icons.

## Features

- **Geolocation**: Automatically detects the user's location using the browser's geolocation API.
- **Current Weather**: Displays the current temperature, weather condition, and an icon representing the weather.
- **Temperature Scale Toggle**: Allows users to switch between Fahrenheit and Celsius.
- **Responsive Design**: The app is designed to be user-friendly on both desktop and mobile devices.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla)
- OpenWeatherMap API
- Skycons for weather icons
- VS code ( you can use any editor )

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sravanTG/vanillaJS-weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weatherAppJsVanilla
   ```

3. Open `index.html` in your browser.

## API Key Configuration

To fetch weather data, you need an API key from OpenWeatherMap. Follow these steps to set it up:

1. Go to [OpenWeatherMap](https://openweathermap.org/api) and sign up for an API key.
2. Create a file named `config.js` in js folder inside root folder. Example path '/js/config.js':
3. insert the following line of code.

   ```javascript
   export const APP_ID = 'your_api_key_here';
   ```

4. Replace `'your_api_key_here'` with your actual API key.

## Usage

- Upon loading the application, it will request permission to access your location.
- Once permission is granted, it will display the current weather for your location.
- Click the "Change to °C" button to toggle between Celsius and Fahrenheit.

## License

This project is licensed under my personal domain.

## Acknowledgments

- [OpenWeatherMap API](https://openweathermap.org/api) for weather data.
- [Skycons](https://darkskyapp.github.io/skycons/) for weather icons.
