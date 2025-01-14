// Open popup when button is clicked
document
  .getElementById("open-popup-btn")
  .addEventListener("click", function () {
    document.getElementById("popup").style.display = "block";
  });

// Close popup when close button is clicked
document
  .getElementById("close-popup-btn")
  .addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
  });

// Close popup when submit button is clicked (optional)
document.getElementById("submit-btn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
