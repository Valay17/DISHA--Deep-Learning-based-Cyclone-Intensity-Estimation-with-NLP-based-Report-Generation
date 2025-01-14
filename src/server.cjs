//Working code

const twilio = require("twilio");

// Twilio credentials
const accountSid = "AC8b0d1320308afda02853df8043677912";
const authToken = "10a4fa56cec7882bb9c0b97548eab9dc";
const twilioPhone = "+13203993906";
//const defaultRecipientPhone = "+919833829560"; // Default master number Anuj
//const defaultRecipientPhone = "+918850129213"; // Default recipient phone number Vaibhav
const defaultRecipientPhone = "+917666394676"; // Default recipient phone number Valay

const client = twilio(accountSid, authToken);

// Function to send an alert SMS
async function sendAlertSMS() {
  try {
    // Send alert SMS
    const message =
      "General Precautions\n:Evacuation planning: Follow evacuation orders issued by local authorities if you live in a vulnerable area. \nSecure property: Use sandbags to prevent flooding in low-lying areas and secure doors and windows with additional reinforcement.\n Prepare emergency kit: Assemble an emergency kit with food, water, clothing, medications, and important documents.";
    await client.messages.create({
      body: message,
      from: twilioPhone,
      to: defaultRecipientPhone,
    });
    console.log("Alert SMS sent successfully");
  } catch (error) {
    console.error("Error sending alert SMS:", error);
  }
}

/* 
this is the code for generating the whatsapp alert, it can be used with the paid version

async function sendAlertWhatsApp() {
  try {
    // Send alert WhatsApp message
    const message = "Alert: Adverse weather conditions detected! Take caution.";
    await client.messages.create({
      body: message,
      from: `whatsapp:${twilioPhone}`, // Twilio WhatsApp sandbox number
      to: `whatsapp:${defaultRecipientPhone}`,
    });
    console.log("Alert WhatsApp message sent successfully");
  } catch (error) {
    console.error("Error sending alert WhatsApp message:", error);
  }
} */

// Example usage:
// Call this function wherever you need to send an alert

sendAlertSMS();

//sendAlertWhatsApp();

/* const express = require("express");
const twilio = require("twilio");

const app = express();
const accountSid = "AC8b0d1320308afda02853df8043677912";
const authToken = "10a4fa56cec7882bb9c0b97548eab9dc";
const twilioPhone = "+13203993906";
const defaultRecipientPhone = "+919833829560"; // Default recipient phone number
const client = twilio(accountSid, authToken);

app.use(express.static("dist")); // Serve static files from the 'dist' directory

app.post("/send-alert", (req, res) => {
  sendAlertMessage(res);
});

function sendAlertMessage(res) {
  const defaultMessage =
    "Alert: Adverse weather conditions detected! Take caution.";

  client.messages
    .create({
      body: defaultMessage,
      from: twilioPhone,
      to: de, // Replace with the default recipient's phone number
    })
    .then(() => {
      console.log("Alert SMS sent successfully");
      res.status(200).send("Alert SMS sent successfully");
    })
    .catch((error) => {
      console.error("Error sending alert SMS:", error);
      res.status(500).send("Error sending alert SMS");
    });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 */