# Flight Search Project

## Overview

This project is a **Flight Search** application that integrates with the **Amadeus REST API** to fetch flight offers based on user input, including filtering options such as currency, number of adults, and others. The backend is built using **Spring Boot** (Java), while the frontend is developed with **React** and **Vite**.

The goal of this project is to allow users to search for flights and view them in a sorted list based on different filters. The project also enables easy integration with external flight data from Amadeus.

## Features

- **Flight Search**: Search flight offers using the Amadeus API based on user-defined parameters.
- **Sorting and Filtering**: Filter flights by price, currency, and other parameters.
- **Backend**: Built with **Spring Boot** (Java 17) and the *Amadeus API*.
- **Frontend**: Developed with **React** using **Vite** for a fast development experience.
- **Dockerized**: The backend and frontend are containerized using **Docker** and orchestrated with **Docker Compose**.

## Prerequisites

- **Docker**
- **Docker Compose**
- **Amadeus API key** (sign up in https://developers.amadeus.com/ to get your API keys)

## Setting Up the Project

### Step 1: Clone the repository

In the terminal of a project:
git clone https://github.com/Odin-BN/Flight-Search-Second-BT.git
cd Flight-Search-Second-BT

### Step 2: Create an Amadeus API account

To use the **Amadeus REST API**, you'll need an API key and API secret.
Visit Amadeus for Developers and sign up or log in.
Create a new application and generate your API key and API secret.

### Step 3: Update docker-compose.yml with your API keys

In the root directory of the project, open the docker-compose.yml file. You will need to add your API key and API secret on the environment section of the backend.

environment:
      - API_KEY={Insert_your_API_key}
      - API_SECRET={Insert_your_API_secret}

### Step 4: Build and start the application

Run the following command on the terminal of the root directory, to build and start both the frontend and backend services:
**docker-compose up --build**

### Step 5: Access the application

Once the containers are up and running, you can access the application by navigating to:

**Frontend**: http://localhost:8080

**Backend**: http://localhost:9090 (you can confirm the status of the server)

#### Running Tests

Tests in the Docker build process give error sometimes, you can set the enabled property in your **build.gradle** file to avoid this error:

tasks.named('test') {
    enabled = false
}

Alternatively, if you want to run the tests, ensure that your environment variables are correctly passed and all configurations are correct.