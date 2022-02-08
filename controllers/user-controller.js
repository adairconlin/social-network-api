const { User } = require("../models");

const userController = {
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: "friends",
                select: "-__v"
            })
            .select("-__v")
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

module.exports = userController;