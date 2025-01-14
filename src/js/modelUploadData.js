function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function classifyWindSpeed(windSpeed) {
  if (windSpeed < 60) {
    return "Safe";
  } else if (windSpeed < 90) {
    return "Caution";
  } else if (windSpeed < 120) {
    return "Warning";
  } else {
    return "Danger";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("fileInput");
  const resultText = document.getElementById("resultText");

  fileInput.addEventListener("change", function () {
    // Simulate a delay for file upload
    setTimeout(function () {
      const randomWindSpeed = generateRandomNumber(30, 120);
      const windCategory = classifyWindSpeed(randomWindSpeed);

      resultText.textContent = `Estimated Wind Speed: ${randomWindSpeed} Knots\nClassification: ${windCategory}`;
    }, 5000); // Simulated 5-second delay
  });
});
