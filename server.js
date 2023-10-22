const express = require("express");
const cors = require("cors");
const knex = require("knex");
const config = require("./secretConfig");

const signin = require("./controllers/signin");

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

app.listen(3000, () => {
    console.log("App is running on port 3000");
})
