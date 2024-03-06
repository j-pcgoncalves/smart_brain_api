# Smart Brain API

This project is made with NodeJS and Express. This is the API created to work with the Smart Brain Project. It has all the endpoints to connect the website to a PostgreSQL Database.

## How to Use

You can clone this project to your computer and run "npm install" in the root of the project to install dependencies. After that create a file called secretConfig.js in the root of your project. Inside that file create a const object called "Config". Inside this object create the following key/value pairs:

- DB_PASSWORD: "Password to your own PostgreSQL database",
- CLARIFAI_API_KEY: "Your own Clarifai API key"

Export this variable using module.exports. With all set you can run "npm run test" in your terminal to start your API.

## Credits

This project was made for the Zero to Mastery Course: [The Complete Web Developer in 2024: Zero to Mastery](https://zerotomastery.io/courses/coding-bootcamp/), taught by Andrei Neagoie and Adam Odziemkowski
