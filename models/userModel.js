const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String, required: true, max: 100, min: 6
    },
    email: {
        type: String, required: true, unique: true, max: 200, min: 6
    },
    password: {
        type: String, required: true,  max: 300, min: 6
    },
    resetLink: { type: String, default: '' },
    date: { type: Date, default: Date.now },
    image: { type: String },
    facebook: { type: String, default: "" },
    instagram: { type: String, default: "" },
});

module.exports = mongoose.model("User", userSchema);