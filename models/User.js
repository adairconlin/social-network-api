const { Schema, model } = require("mongoose");

let validateEmail = function(email) {
    let emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
};

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, "Please use a valid email address"]
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

UserSchema.virtual("friendCount").get(function() {
    return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;