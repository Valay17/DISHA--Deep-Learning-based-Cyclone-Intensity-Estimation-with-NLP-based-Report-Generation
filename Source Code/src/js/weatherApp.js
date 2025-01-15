import { createHourlyCards, createDailyCards } from "./weatherForecastCards.js";
import { startLoadingState, endLoadingState } from "./setLoadingState.js";
import { handleError } from "./handleError.js";
import { currentWeatherData } from "./currentWeatherData.js";
import { weatherForecastData } from "./weatherForecastData.js";

const API_KEY = "2e15438922f629fe6a2605024e986ca2";

const searchBoxInput = document.querySelector(".search-box-input");
const gpsButton = document.querySelector(".gps-button");
const ctaButton = document.querySelector(".cta-button");
const topButton = document.querySelector(".top-button");

createHourlyCards();
createDailyCards();

let currentUnit = "metric"; // Default unit is "metric"

const fetchWeatherData = async (data, unit = currentUnit) => { // default to currentUnit if not passed
  try {
    await startLoadingState();
    await currentWeatherData(data, API_KEY, unit);  // Pass unit here
    await weatherForecastData(data, API_KEY, unit);  // Pass unit here
    await endLoadingState();
  } catch (error) {
    if (error.message === "Failed to fetch") {
      await handleError(
        "Uh oh! It looks like you're not connected to the internet. Please check your connection and try again.",
        "Refresh Page"
      );
    } else {
      await handleError(error.message, "Try Again");
    }
  }
};


const getUserLocation = async () => {
  const successCallback = async (position) => {
    const data = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    await fetchWeatherData(data);
  };

  const errorCallback = (error) => {
    console.log(error);
    fetchWeatherData("Mumbai");
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

searchBoxInput.addEventListener("keyup", async (event) => {
  if (event.keyCode === 13) {
    const location = searchBoxInput.value.trim() || "Mumbai";
    await fetchWeatherData(location);
  }
});

gpsButton.addEventListener("click", getUserLocation);

ctaButton.addEventListener("click", () => {
  window.open("https://mosdac.gov.in/cyclone-genesis/archive");
});

topButton.addEventListener("click", scrollToTop);

getUserLocation();

// At the end of the weatherApp.js file
export { fetchWeatherData };