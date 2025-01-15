// Add event listener to the button
document
  .getElementById("send-alert-btn")
  .addEventListener("click", async () => {
    try {
      const response = await fetch("/send-alert", {
        method: "POST",
      });
      const result = await response.text();
      console.log(result); // Log the result (optional)
      alert("Alert SMS sent successfully");
    } catch (error) {
      console.error("Error sending alert SMS:", error);
      alert("Error sending alert SMS. Please try again.");
    }
  });

// Handle button click to send alert
// Handle button click to send alert
/* document
  .getElementById("send-alert-btn")
  .addEventListener("click", async () => {
    try {
      // Send a POST request to the same page (index.html)
      const response = await fetch("/", {
        method: "POST",
      });
      const result = await response.text();
      alert(result); // Show success or error message
    } catch (error) {
      console.error("Error sending alert:", error);
      alert("Error sending alert. Please try again."); // Show error message
    }
  });
 */
