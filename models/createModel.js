const mongoose = require("mongoose");

const createSchema = mongoose.Schema({
    creatorId: { type: String, required: false },
    nameCreator: { type: String, required: false, min: 6 },
    email: { type: String, required: false, min: 6 },
    phone: { type: Number, required: true, min: 8 },
    job: { type: String, required: true, min: 6 },
    description: { type: String, required: true, min: 6 },
    location: { type: String, required: true, max: 25 },
    images: { type: Array, default: [] },
    facebookProfil: { type: String, default: '' },
    instagramProfil: { type: String, default: '' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Job", createSchema);