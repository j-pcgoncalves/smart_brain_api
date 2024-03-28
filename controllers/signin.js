const jwt = require("jsonwebtoken");
const redis = require("redis");

const config = require("../secretConfig");

// Setup Redis
const redisClient = redis.createClient({
    host: '127.0.0.1',
    legacyMode: true
});

// async function redisConnect() {
//     return await redisClient.connect();
// }
 
// redisConnect();

const handleSignIn = (db, bcrypt, req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return Promise.reject("Incorrect form submission");
    }
    return db.select("email", "hash").from("login")
        .where("email", "=", email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash);
            if (isValid) {
                return db.select("*").from("users")
                    .where("email", "=", email)
                    .then(user => user[0])
                    .catch(e => Promise.reject("Unable to get user"))
            } else {
                Promise.reject("Wrong credentials");
            }
        })
        .catch(e => Promise.reject("Wrong credentials"))
}

const getAuthTokenId = () => {
    console.log("Auth OK");
}

const signToken = (email) => {
    const jwtPayload = { email };
    return jwt.sign(jwtPayload, config.Config.JWT_SECRET, { expiresIn: "2 days" });
}

const createSessions = (user) => {
    // JWT Token, return user data
    const { email, id } = user;
    const token = signToken(email);
    return { success: "true", userId: id, token };
}

const signinAuthentication = (db, bcrypt) => (req, res) => {
    const { authorization } = req.headers;
    return authorization ? getAuthTokenId() : 
        handleSignIn(db, bcrypt, req, res)
            .then(data => {
                return data.id && data.email ? createSessions(data) : Promise.reject(data);
            })
            .then(session => res.json(session))
            .catch(err => res.status(400).json(err));
}

module.exports = {
    signinAuthentication: signinAuthentication
}