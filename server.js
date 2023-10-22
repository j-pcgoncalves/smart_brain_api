const express = require("express");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");
const config = require("./secretConfig");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const db = knex({
    client: "pg",
    connection: {
        host: "127.0.0.1",
        user: "postgres",
        password: config.Config.DB_PASSWORD,
        database: "smart-brain"
    }
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => { res.send(db.users) });
app.post("/signin", signin.handleSignIn(db, bcrypt));
app.post("/register", register.handleRegister(db, bcrypt));
app.get("/profile/:id", profile.handleProfileGet(db));
app.put("/image", image.handleImage(db));
app.put("/imageurl", image.handleApiCall());

app.listen(3000, () => {
    console.log("App is running on port 3000");
})
