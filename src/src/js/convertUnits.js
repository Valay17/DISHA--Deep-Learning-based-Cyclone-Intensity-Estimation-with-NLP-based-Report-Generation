import { currentUnit } from "./currentWeatherData.js";  // Adjust the path as needed

export const roundDegree = async (degree) => {
  // Round the degree to 1 decimal point
  const roundedDegree = Math.round(degree * 10) / 10;
  
  // Check if the degree is a whole number and format it accordingly
  const formattedDegree = (Math.round(roundedDegree * 10) / 10) % 1 === 0
    ? `${roundedDegree.toFixed(1)}`
    : `${roundedDegree}`;

  // Add unit based on the current unit (metric or imperial)
  const unit = currentUnit === "metric" ? "°C" : "°F";
  
  return `${formattedDegree}${unit}`;
};

export const formatDate = async (unixTimestamp, type) => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysOfWeekShortened = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYearShortened = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date(unixTimestamp * 1000);
  const dayOfMonth = date.getDate();
  const monthIndex = date.getMonth();
  const dayOfWeekIndex = date.getDay();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${dayOfMonth} ${monthsOfYear[monthIndex]} ${daysOfWeek[dayOfWeekIndex]}`;
  const formattedDateShortened = `${dayOfMonth} ${monthsOfYearShortened[monthIndex]} ${daysOfWeekShortened[dayOfWeekIndex]}`;

  if (type === "day") {
    return daysOfWeek[dayOfWeekIndex];
  } else if (type === "hour") {
    return `${hours}:${minutes}`;
  } else if (type === "short") {
    return formattedDateShortened;
  } else {
    return formattedDate;
  }
};

export const mpsToKmh = async (mps) => {
  // Check the current unit system and apply the correct conversion
  if (currentUnit === "metric") {
    return `${Math.round(mps * 3.6)} km/h`; // Metric units (km/h)
  } else {
    return `${Math.round(mps * 2.237)} mph`; // Imperial units (mph)
  }
};

export const metersToKm = async (meters) => {
  // Check the current unit system and apply the correct conversion
  if (currentUnit === "metric") {
    return `${(meters / 1000).toFixed(2)} km`; // Metric units (km)
  } else {
    return `${(meters / 1609.344).toFixed(2)} miles`; // Imperial units (miles)
  }
};

export const capitalize = async (str) => {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
};
