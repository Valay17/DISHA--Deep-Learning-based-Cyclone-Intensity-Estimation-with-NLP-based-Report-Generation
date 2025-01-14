function openGoogleMaps() {
  if (navigator.geolocation) {
    // Get user's current location
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var userLatitude = position.coords.latitude;
        var userLongitude = position.coords.longitude;

        // Coordinates for highest point
        var HighestSpot = {
          latitude: 69.420,
          longitude: 69.420,
        };

        // Construct Google Maps URL to navigate from user's location to the hgihest point
        var url = `https://www.google.com/maps/dir/?api=1&origin=${userLatitude},${userLongitude}&destination=${HighestSpot.latitude},${HighestSpot.longitude}`;

        // Open Google Maps in the same tab
        window.location.href = url;
      },
      function (error) {
        console.error("Error getting user location:", error);
        alert("Error getting user location. Please try again.");
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    alert("Geolocation is not supported by this browser.");
  }
}