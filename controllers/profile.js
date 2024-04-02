const handleProfileGet = db => (req, res) => {
    const { id } = req.params;
    db.select("*").from("users").where({id})
        .then(user => {
            if (user.length) {
                res.json(user[0])
            } else {
                res.status(400).json("Not Found")
            }
        })
        .catch(e => res.status(400).json("Error getting user"))
}

const handleProfileUpdate = db => (req, res) => {
    const { id } = req.params;
    const { name, age, pet } = req.body.formInput;

    db("users")
        .where({ id })
        .update({ name })
        .then(resp => {
            if (resp) {
                res.json("Success!");
            } else {
                res.status(400).json("Unable to Update")
            }
        })
        .catch(err => res.status(400).json("Error updating user"));
    
    db("users")
        .where({ id })
        .update({ age })
        .then(resp => {
            if (resp) {
                res.json("Success!");
            } else {
                res.status(400).json("Unable to Update")
            }
        })
        .catch(err => res.status(400).json("Error updating user"));
    
    db("users")
        .where({ id })
        .update({ pet })
        .then(resp => {
            if (resp) {
                res.json("Success!");
            } else {
                res.status(400).json("Unable to Update")
            }
        })
        .catch(err => res.status(400).json("Error updating user"));
}

module.exports = {
    handleProfileGet,
    handleProfileUpdate
}