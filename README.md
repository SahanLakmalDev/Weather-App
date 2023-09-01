# Weather App

A simple weather app built using HTML, CSS, and JavaScript that allows users to check the weather for a specific city.

![Weather App Screenshot](./weather-app-img/images/screenshot%20.png)

## Table of Contents

- [Technologies Used](#technologies-used)
- [API](#api)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [Version](#version)
- [License](#license)

## Technologies Used

- HTML
- CSS
- JavaScript

## API

The Weather App uses the OpenWeatherMap API to retrieve weather data for cities. The API provides real-time weather information, including temperature, humidity, wind speed, and weather conditions.

### API Key

To use the OpenWeatherMap API, you'll need to obtain an API key by signing up on their website. Once you have the API key, you can insert it into the JavaScript code to make requests to the API.


### Example API Request

Here's an example of how the API is used in the JavaScript code to fetch weather data for a specific city:

```javascript
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
```

// Make API request
```js
async function checkWeather(city) {
    const response = await fetch(apiUrl + `?q=${city}&appid=${apiKey}&units=metric`);
    // Rest of the code...
}
```



## Features

- Search for the weather in any city.
- Displays temperature, humidity, and wind speed.
- Shows weather icons based on current conditions.
- Responsive design for desktop and mobile.

## Getting Started

To run this project locally, follow these steps:  
* Open the terminal
* Clone the repository to your local machine using   
```bash
   git clone https://github.com/SahanLakmalDev/Weather-App.git
```
## Usage
1. Enter the name of a city in the input field.
2. Click the search button to retrieve weather information for that city.
3. The app will display the city name, temperature, humidity, wind speed, and a weather icon.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:  

1. Fork the repository.

2. Create a new branch for your feature or bug fix: git checkout -b feature/my-feature or git checkout -b bugfix/fix-issue.

3. Make your changes and commit them: git commit -m "Add a new feature" or git commit -m "Fix an issue".

4. Push to your branch: git push origin feature/my-feature.

5. Create a pull request on the original repository.

## Version

This is version 0.1.0


## License 

Copyright &copy: 2023 Sahan Lakmal <br>
This project is license under this [MIT License](License.txt)