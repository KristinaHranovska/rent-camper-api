# Camper Rental API

This is a Node.js API for renting campers and making bookings.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Routes](#routes)
  - [Get Campers](#get-campers)
  - [Create Booking](#create-booking)
- [Schemas](#schemas)
  - [Camper Schema](#camper-schema)
  - [Booking Schema](#booking-schema)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/KristinaHranovska/rent-camper-api
   ```

2. Change to the project directory:

   ```sh
   cd camper-rental-api
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Create a `.env` file in the root directory with the following content:
   ```
   DB_HOST=your_mongodb_connection_string
   PORT=your_port_number
   ```

## Usage

1. Start the server:

   ```sh
   npm start
   ```

2. For development mode with hot-reloading:
   ```sh
   npm run dev
   ```

## Deployment

The API is deployed and available at [https://rent-camper-api.onrender.com/](https://rent-camper-api.onrender.com/).

## API Documentation

API documentation is available via Swagger. Once the server is running, navigate to `http://localhost:PORT/api-docs` in your browser to view the API documentation.

You can also view the live API documentation at [https://rent-camper-api.onrender.com/api-docs](https://rent-camper-api.onrender.com/api-docs).

## Routes

### Get Campers

- **URL:** `/rent`
- **Method:** `GET`
- **Description:** Retrieve a list of campers with pagination support.
- **Query Parameters:**
  - `page` (integer, optional, default: 1): Page number for pagination.
  - `limit` (integer, optional, default: 4): Number of items per page.
- **Responses:**
  - `200 OK`: A list of campers.

### Create Booking

- **URL:** `/books`
- **Method:** `POST`
- **Description:** Create a new booking for a camper.
- **Request Body:**
  - `name` (string, required): The name of the person booking the camper.
  - `email` (string, required): The email of the person booking the camper.
  - `date` (string, required, format: date): The date of the booking.
  - `comment` (string, optional): Additional comments for the booking.
- **Responses:**
  - `201 Created`: Booking created successfully.

## Schemas

### Camper Schema

- **name** (string, required): The name of the camper.
- **price** (number, required): The price of renting the camper.
- **rating** (number, required, min: 1, max: 5): The rating of the camper.
- **location** (string, required): The location of the camper.
- **adults** (number, required): Number of adults the camper can accommodate.
- **children** (number, required): Number of children the camper can accommodate.
- **engine** (string, required): The engine type of the camper.
- **form** (string, required): The form factor of the camper.
- **length** (string, required): The length of the camper.
- **width** (string, required): The width of the camper.
- **height** (string, required): The height of the camper.
- **tank** (string, required): The fuel tank capacity of the camper.
- **consumption** (string, required): The fuel consumption of the camper.
- **description** (string, required): A description of the camper.
- **details** (object, optional): Additional details about the camper.
- **gallery** (array of strings, optional): A list of image URLs for the camper.
- **reviews** (array of objects, optional): A list of reviews for the camper.

### Booking Schema

- **name** (string, required): The name of the person booking the camper.
- **email** (string, required): The email of the person booking the camper.
- **date** (string, required, format: date): The date of the booking.
- **comment** (string, optional): Additional comments for the booking.

## License

This project is licensed under the MIT License.

### MIT License

The MIT License (MIT)

Copyright (c) 2024 Kristina Hranovska

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
