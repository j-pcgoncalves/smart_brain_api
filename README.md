# Smart Brain API

This project is made with NodeJS and Express. This is the API created to work with the Smart Brain Project. It has all the endpoints to connect the website to a PostgreSQL Database. It uses Docker to ease the installation process. Using docker commands you can run this API in any computer. It installs the right Node version and a Postgres DB.

## How to Use

You can clone this project to your computer and run "npm install" in the root of the project to install dependencies. After that create a file called secretConfig.js in the root of your project. Inside that file create a const object called "Config". Inside this object create the following key/value pairs:

- CLARIFAI_API_KEY: "Your own Clarifai API key"

Export this variable using module.exports. With all set you can run "docker-compose up --build" in your terminal to start your API (for this you need to have docker installed in your computer).

## Credits

This project was made for the Zero to Mastery Course: [The Complete Web Developer in 2024: Zero to Mastery](https://zerotomastery.io/courses/coding-bootcamp/), taught by Andrei Neagoie and Adam Odziemkowski
