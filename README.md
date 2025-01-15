<div id="user-content-toc" align="center">
  <ul>
  <img src="https://github.com/user-attachments/assets/e8a1d266-bd9c-4328-b853-3f40f1eed320" align="center" width="120" height="120"> 
  <summary><h1> <p>DISHA - Deep Learning based Cyclone Intensity Estimation with NLP based Report Generation </p> </h1></summary>
  </ul>
</div>

#

The DISHA project aims to enhance disaster preparedness and management in the Indian Ocean region, particularly for cyclones. It leverages cutting-edge technologies, including deep learning, natural language processing (NLP), and integrated APIs, to provide tools for early warning, safe evacuation paths, multilingual alerts, and real-time incident reporting. This initiative addresses critical challenges in disaster management by offering accurate predictions, effective communication, and actionable insights for stakeholders and communities.

## Introduction

#### Background/Motivation
The Indian Ocean region is one of the most cyclone-prone areas in the world, often witnessing devastating storms that result in the loss of lives, displacement, and significant economic damage. Despite advancements in technology, many affected regions still lack access to timely, accurate, and actionable information that could mitigate such impacts. This project was conceived with a vision to fill these critical gaps by leveraging state-of-the-art machine learning, natural language processing (NLP), and web technologies.

#### Problem Statement
Develop a system to improve cyclone management and disaster preparedness in the Indian Ocean region by leveraging deep learning and NLP models. The solution should predict cyclone intensity, provide multilingual alerts, offer safety paths, and facilitate real-time communication with stakeholders. It should address the challenges of existing systems, including limited scalability, lack of regional language support, and inefficient communication during emergencies.

#### Objectives
This project seeks to address the limitations of existing cyclone alert and management systems by:
1. Developing a deep learning-based system to predict cyclone intensities with high accuracy.
2. Incorporating multilingual NLP capabilities to deliver alerts and instructions in regional languages.
3. Creating a web application to provide actionable safety information, such as evacuation routes and shelter locations.
4. Enhancing disaster preparedness with real-time incident reporting and communication features.

#### Importance
The successful implementation of this project can revolutionize cyclone management strategies, particularly in the Indian Ocean region. By leveraging modern technologies, it aims to minimize the loss of lives and property, foster better communication during disasters, and promote resilience among affected communities. This initiative not only addresses the immediate concerns of cyclone management but also sets a precedent for disaster management solutions worldwide.

#### Scope
The scope of this project includes designing and deploying a comprehensive cyclone management system tailored for the Indian Ocean region. It integrates advanced prediction models, robust APIs for real-time updates, and a user-friendly web application that supports regional languages. This approach ensures inclusivity and accessibility while targeting the most cyclone-vulnerable regions.

#### Problems with Existing Systems
Current systems for cyclone prediction and management suffer from several issues:
1. Limited prediction accuracy, particularly for cyclone intensity and trajectory.
2. Inefficient communication of warnings and safety information to rural or isolated populations.
3. Lack of support for regional languages, which hinders effective dissemination of critical information.
4. Poor integration of real-time data, reducing the responsiveness of the systems.
5. Absence of user-friendly interfaces that cater to diverse demographics.

By addressing these issues, this project aims to provide an accessible, accurate, and reliable solution that enhances disaster preparedness and mitigates the impacts of cyclonic events.

## Details and Design of Project, Methodology

### System Design Overview  
The project is built on a multi-layered architecture integrating deep learning models, natural language processing, and API-driven services within a cohesive web application. The design emphasizes modularity, scalability, and user-centric functionality.

- **Frontend**: A responsive web application with support for dark and light themes, multilingual capabilities, and dynamic rendering of cyclone-related information.  
- **Backend**: A robust server managing AI models, APIs, and database interactions, ensuring real-time updates and processing.  
- **Database**: A centralized repository for user-reported incidents, system logs, and cyclone-related data.  

### Methodology  
1. **Data Collection and Preprocessing**:  
   - Historical cyclone data and weather patterns were collected from reliable meteorological databases.  
   - Datasets were cleaned and processed to remove noise and standardize input formats for deep learning models.  

2. **Model Development**:  
   - The CNN model was trained on satellite images to classify cyclone intensity levels.  
   - The T5 NLP model was fine-tuned for generating multilingual cyclone precaution summaries and translations.

3. **Integration of APIs**:  
   - Services like OpenWeatherMap, Google APIs, and Twilio were integrated for weather data, navigation, elevation profiles, and alert generation.

4. **Web Application Development**:  
   - The frontend was developed using Vite.js for responsiveness and dynamic data rendering.  
   - The backend utilized Node.js to handle API calls, data processing, and database interactions.

5. **Testing and Validation**:  
   - Each module underwent rigorous testing to ensure performance, accuracy, and reliability under different scenarios.

The combination of these methodologies ensures the project’s effectiveness in providing accurate predictions, timely alerts, and user-friendly interfaces for managing cyclonic emergencies.

## Project Methodology and Design Overview

#### Methodology
The project follows a systematic methodology aimed at delivering a robust and user-centric cyclone management system:  
1. **Requirement Analysis**: Studied the shortcomings of existing systems to define clear objectives, including cyclone intensity prediction, multilingual alerts, and user-friendly interfaces.  
2. **Model Development**: Developed a CNN model for cyclone intensity estimation and a T5 NLP model for generating multilingual precautionary summaries and translations.  
3. **API Integration**: Incorporated external APIs for real-time weather data, navigation, elevation, and alert generation to enhance the application’s functionalities.  
4. **Web Application Development**: Designed a responsive web application to present model outputs and additional features like incident reporting and safety paths.  
5. **Testing and Evaluation**: Rigorous testing ensured the accuracy of models and the reliability of the web application across various scenarios.  

#### Tech Stack
- **Programming Languages**: Python for backend and model development; JavaScript for frontend web application.  
- **Frameworks**: Node.js for the frontend UI.  
- **Libraries and Tools**: TensorFlow and PyTorch for deep learning, and Postman for API testing.  
- **APIs Used**:  
  - Google Cloud API: For hosting and enhancing model integration.  
  - OpenWeatherMap API: To fetch weather forecasts.  
  - Twilio API: For generating alerts.  
  - Google Navigation and Elevation APIs: For determining safety paths and highest elevation points.  
- **Database**: MongoDB for efficient and scalable data storage.  

#### Design Details
- **Modular Architecture**: Each functionality, including prediction, alert generation, and web interface, is encapsulated in separate modules, ensuring better maintainability and scalability.  
- **Web Application**:  
  - Built with Node.js to offer a responsive interface compatible with both desktop and mobile devices.  
  - Features include dark/light mode, multilingual support, and toggle options for metric and imperial units.  

#### Design Choices and Rationale
- **Deep Learning Models**:  
  - CNN was selected for its strength in handling image data for cyclone intensity estimation.  
  - T5 NLP model was chosen for its ability to handle diverse text tasks, including translation and summarization.  
- **API Usage**: Real-time APIs such as OpenWeatherMap and Google Navigation provide dynamic data, ensuring the application remains up-to-date with real-world scenarios.  
- **Framework Selection**:  Node.js offer a lightweight yet powerful development ecosystem suited for scalable and user-friendly web applications.  
- **UI/UX Decisions**: Features like a responsive design, dark/light themes, and multilingual capabilities ensure accessibility for diverse users, enhancing usability and satisfaction.  
- **Database**: MongoDB supports flexible and efficient real-time data handling, critical for disaster management scenarios.  

## Implementation

### CNN Model for Cyclone Intensity Estimation
The CNN model was developed to predict cyclone intensity based on input images of cyclones. The model was trained on datasets of cyclone images labeled with intensity levels, ensuring a robust learning process. With a training accuracy of 92% and a testing accuracy of 86%, the model demonstrates its potential to provide reliable predictions for cyclone management systems. 

Key features include:
- Multi-layer architecture optimized for image processing tasks.
- Use of data augmentation techniques to improve model generalization.
- Training with diverse datasets to ensure applicability across various cyclone scenarios.

### T5 NLP Model for Multilingual Alerts and Summaries
The T5 NLP model plays a crucial role in generating cyclone precaution summaries and translating them into multiple languages, enhancing accessibility for diverse user bases. The model is trained to recognize variations in input text and produce accurate translations and summaries in languages such as Hindi, Marathi, Gujarati, Tamil, and English.

Key features include:
- Fine-tuning for disaster-related communication.
- Multilingual support to cater to diverse regional audiences.
- Seamless integration with the web application for real-time alert generation.

### APIs and Integrations
The system leverages multiple APIs to enhance functionality and provide comprehensive services:
- **Google Cloud API**: Powers data storage and processing for various application components.
- **Disaster Alert System**: Provides real-time cyclone and weather updates.
- **OpenWeatherMap API**: Offers detailed weather forecasts for specific locations.
- **Twilio Alert Generation API**: Enables automated generation of alerts via SMS, though currently restricted.
- **Google Navigation API**: Assists users with evacuation routes during cyclonic events.
- **Google Elevation API**: Supplies elevation data for assessing cyclone impact areas.

### Web Application Development
The web application serves as the user interface for the DISHA project, designed to provide an accessible and user-friendly platform for cyclone-related information. Developed using modern web technologies, it supports responsive design, ensuring seamless usability across devices.

Key features include:
- **Real-time Weather Updates**: Displays current weather and 5-day forecasts for a user’s location or searched locations.
- **Interactive Maps**: Visualizes evacuation routes, cyclone paths, and affected regions.
- **Multilingual Support**: Enables users to access information in multiple regional languages.
- **Dark/Light Mode**: Offers customizable display options for better accessibility.
- **Unit Toggling**: Allows users to switch between metric and imperial units for weather data.

### Incident Reporting System
The system includes a feature for users to report incidents during cyclonic events. This information is processed and shared with relevant authorities for effective disaster management. It is integrated with location-based data to provide real-time insights into affected areas.

### Overall Integration
The project integrates the CNN and T5 models with the web application, APIs, and supporting systems to create a cohesive and scalable cyclone management tool. The seamless interaction between components ensures reliable performance, providing users with timely and actionable insights.

## Results and Discussion

### Results
1. **CNN Model Performance**:
   - Achieved an accuracy rate of **86%** in predicting cyclone intensities across diverse test scenarios.
   - Demonstrated reliability in cyclone intensity estimation, showcasing the potential for real-world applications.

2. **T5 NLP Model Performance**:
   - Successfully recognized variations of target input text and generated relevant cyclone precaution summaries.
   - Provided seamless translation into multiple languages, including **English, Hindi, Marathi, Gujarati, and Tamil**.

3. **Web Application**:
   - Displayed robust functionality, reliability, and responsiveness across various devices and scenarios.
   - Integrated all components effectively, offering users a unified experience for cyclone management.

### Discussion
The combined results highlight the project's success in leveraging deep learning and NLP techniques, supported by a user-friendly web application. Key observations include:

- **CNN Model**:
  - The 86% accuracy achieved instills confidence in the model's utility for cyclone intensity prediction. 
  - Future refinements, such as incorporating real-time weather data, could further enhance its predictive accuracy.

- **T5 NLP Model**:
  - The model's exceptional ability to generate cyclone precaution summaries and its high-quality multilingual translations make it a critical tool for effective communication in disaster scenarios.

- **Web Application**:
  - Its responsive design, real-time data integration, and intuitive interface enable timely information dissemination and decision-making, empowering users in cyclone-prone areas.

Overall, the results demonstrate the system's potential to significantly contribute to cyclone management, providing accurate predictions, clear communication, and user-friendly tools for disaster preparedness.

## Conclusion and Future Work

### Conclusion
The DISHA project represents a significant advancement in cyclone management and disaster preparedness for the Indian Ocean region. By leveraging deep learning and natural language processing (NLP) techniques, the project delivers:

1. **Cyclone Intensity Estimation**:
   - An accurate CNN model that estimates cyclone intensity levels effectively.

2. **Comprehensive Communication**:
   - A T5 NLP model capable of generating multilingual alerts and summaries, addressing diverse user needs.

3. **Web Application**:
   - A responsive, user-friendly platform providing real-time safety paths, alerts, and reports.

These elements combine to address critical needs in disaster management, including early cyclone identification, timely alerts, efficient evacuation planning, and effective communication during emergencies. By advancing deep learning and providing a template for disaster management solutions, DISHA contributes to both regional resilience and the broader scientific community.

### Future Work
The system's potential can be enhanced through the following improvements:

1. **Integration of Real-time Weather Data**:
   - Enable more accurate predictions by incorporating live weather data streams.

2. **Expansion of Regional Language Support**:
   - Increase accessibility by supporting additional regional languages.

3. **Continuous Refinement of Models**:
   - Further enhance the CNN and NLP models to improve accuracy and usability.

4. **Advanced NLP Techniques**:
   - Employ cutting-edge NLP methods to improve the precision of alerts and summaries.

5. **Cyclone Trajectory Prediction**:
   - Integrate additional models to predict cyclone paths, a vital aspect of disaster management.

6. **Collaboration with Authorities**:
   - Work with meteorological and disaster management organizations to incorporate expert insights and reliable data sources.

7. **Mobile Applications**:
   - Develop mobile apps for better accessibility and user convenience.

8. **Comprehensive Documentation**:
   - Provide user-friendly guides to help users maximize the system's capabilities.

9. **Addressing Current Challenges**:
   - **Image Uploads**: Explore hosting the model to enable functional image uploads for processing.
   - **Translation**: Host the T5 NLP module to implement real-time translation functionality.
   - **Region-specific Elevation Data**: Develop access to comprehensive elevation data for accurate region-based predictions.
   - **Twilio API Restrictions**: Explore secure options for enabling real-time alerts without requiring active user management.

By addressing these future goals and limitations, the DISHA project aims to further its mission of mitigating the impact of cyclonic events and enhancing disaster preparedness for the Indian Ocean region.

## General Instructions for Running the Code

1. **Prerequisites**:
   - Set up necessary API keys for:
     - Google Cloud (for Navigation, Elevation, and other map services)
     - OpenWeatherMap (for weather forecasting)
     - Twilio (for alert generation, if required).
   - Ensure Node.js and npm are installed for running the frontend.

2. **Directory Structure**:
```
.
├── .gitignore
├── index.html
├── node_modules/
├── package-lock.json
├── package.json
├── server.cjs
├── Twilio Creds.txt
├── vite.config.js
├── src/
│   ├── img/
│   ├── favicon-dark.ico
│   ├── favicon-light.ico
│   ├── static/
│   │   ├── svgs/
│   │   └── animated/
│   │       └── svgs/
│   ├── scss/
│   │   ├── main.css
│   │   ├── main.scss
│   │   ├── abstracts/
│   │   ├── base/
│   │   ├── buttons/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── model/
│   │   └── pages/
│   ├── js/
│       ├── convertUnits.js
│       ├── currentWeatherData.js
│       ├── dialogAlert.js
│       ├── filterForecastData.js
│       ├── formHandler.js
│       ├── handleError.js
│       ├── main.js
│       ├── modelUploadData.js
│       ├── navigateUser.js
│       ├── setLoadingState.js
│       ├── themeIcons.js
│       ├── toggleTheme.js
│       ├── weatherApp.js
│       ├── weatherForecastCards.js
│       └── weatherForecastData.js
```

3. **Running the Frontend**:
   - Install the dependencies using:
     ```bash
     npm install
     ```
   - Start the development server using:
     ```bash
     npm start
     ```
   - The frontend will be available at `http://localhost:3000`.

4. **Configuration**:
   - For configurations, refer to `src/config.js`.

5. **Building**:
- Build the production-ready frontend files with `npm run build`.
- Serve the build files using a static file server or integrate them with the backend for deployment.

6. **Testing**:
   - Verify the functionality by uploading dummy data or testing various scenarios for cyclone prediction and precaution generation.
   - Use mock APIs if live APIs are not accessible during development.

7. **Deployment**:
   - The frontend can be deployed using Vercel, Netlify, Github Pages or similar services.
   - Configure environment variables securely in your hosting platform.

Follow these instructions to set up and run the project locally or on a hosted environment. If you encounter issues, refer to the "Challenges and Limitations of the Current Version" for known restrictions.

## Features Implemented

The DISHA project incorporates a comprehensive set of features aimed at improving cyclone prediction, management, and communication. Below are the features currently implemented:

- **Dark/Light Theme Toggle**: Users can switch between dark and light themes for a customized visual experience.

- **Weather Forecast**: 
  - Provides real-time weather forecasts for the user's location if location permissions are enabled.
  - Alternatively, users can search for weather information by entering a specific location.
  - Forecasts are available for up to the next 5 days.

- **Unit Toggle for Metrics**:
  - Users can seamlessly switch between metric and imperial units for weather-related data.

- **Multilingual Cyclone Precaution Summaries**:
  - The system generates precaution summaries for cyclones in multiple languages, including English, Hindi, Marathi, Gujarati, and Tamil.

- **Cyclone Intensity Prediction**:
  - Utilizes a CNN-based model to estimate cyclone intensity levels, aiding in disaster preparedness and response.

- **Incident Reporting System**:
  - Allows users to report cyclone-related incidents through a structured web form.

- **Real-time Alerts**:
  - NLP-based alerts provide timely and relevant information about cyclonic activities.

- **Safety Path Recommendations**:
  - Integrates Google Navigation APIs to recommend safe evacuation routes during cyclonic events.

- **Elevation Insights**:
  - Offers information about the elevation of a location using the Google Elevation API, helping plan evacuation routes effectively.

## Challenges and Limitations of the Current Version

Despite the extensive functionality of the DISHA project, there are several limitations in its current implementation:

- **Image Uploading Functionality**:
  - Uploading an image does not currently process the image through the model due to the inability to host the model on a server.

- **Translation Feature**:
  - The "Translate" button does not perform translations because the T5 NLP module cannot be hosted in its current state.

- **Elevation Data**:
  - The highest elevation point is not region-specific as obtaining such detailed data requires significant resources. For demonstration purposes, the latitude and longitude are set to `69.420`.

- **Twilio API for Alerts**:
  - While implemented, the Twilio-based alert system is restricted. It cannot be actively managed due to the requirement of ongoing oversight, but the feature works when enabled.

- **Real-Time Weather Forecast Accuracy**:
  - The weather forecasts rely on the OpenWeatherMap API, which has limitations in extremely remote areas or regions with limited meteorological data.

These challenges provide opportunities for future development and enhancement of the system.

## **Contributors**
This project was successfully prototyped in collaboration with:
- <a href="https://www.github.com/SinghAnuj29" target="_blank">@SinghAnuj29</a>
- <a href="https://www.github.com/VaibhavNohwar01" target="_blank">@VaibhavNohwar01</a>
- <a href="https://www.github.com/HetDave0005" target="_blank">@HetDave0005</a>

## **License**

This project is **not licensed**. No rights are granted to use, modify, distribute, or otherwise use the code in this repository unless explicitly stated otherwise. By using or accessing the repository, you acknowledge that you are not being granted any rights or licenses to the content or code.
