const Joi = require("@hapi/joi");

validatedCreate = Joi.object({
    creatorId: Joi.string(),
    nameCreator: Joi.string().min(6),
    phone: Joi.string().alphanum().min(8).max(11).required(),
    email: Joi.string().min(6).default([]),
    job: Joi.string().min(6).required(),
    description: Joi.string().min(6).required(),
    location: Joi.string().max(25).required(),
    facebookProfil: Joi.string().min(0),
    instagramProfil: Joi.string().min(0),
    images: Joi.array(),
});

module.exports.validatedCreate = validatedCreate;