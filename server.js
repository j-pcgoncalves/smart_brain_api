const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const morgan = require("morgan");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
    client: "pg",
    connection: process.env.POSTGRES_URI
});

const app = express();

app.use(morgan("combined"));
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => { res.send(db.users) });
app.post("/signin", signin.handleSignIn(db, bcrypt));
app.post("/register", register.handleRegister(db, bcrypt));
app.get("/profile/:id", profile.handleProfileGet(db));
app.post("/profile/:id", profile.handleProfileUpdate(db))
app.put("/image", image.handleImage(db));
app.post("/imageurl", image.handleApiCall());

app.listen(3000, () => {
    console.log("App is running on port 3000");
})
