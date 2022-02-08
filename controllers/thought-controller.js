const { Thought } = require("../models");

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // getUserById() {

    // },

    // createUser() {

    // },
    
    // updateUser() {

    // },
    
    // deleteUser() {

    // }
};

module.exports = thoughtController;