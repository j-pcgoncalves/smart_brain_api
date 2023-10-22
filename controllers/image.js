const Clarifai = require("clarifai");
const config = require("../secretConfig");

const app = new Clarifai.App({
    apiKey: config.Config.CLARIFAI_API_KEY
})

const handleApiCall = () => (req, res) => {
    app.models.predict("face-detection", req.body.input)
        .then(data => {
            res.json(data);
        })
        .catch(e => res.status(400).json("Unable to work with API"))
}

const handleImage = db => (req, res) => {
    const { id } = req.body;
    db("users").where("id", "=", id)
        .increment("entries", 1)
        .returning("entries")
        .then(entries => {
            res.json(entries[0].entries);
        })
        .catch(e => res.status(400).json("Unable to get entries"))
}

module.exports = {
    handleImage,
    handleApiCall
}