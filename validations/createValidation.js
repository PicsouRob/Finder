const Joi = require("@hapi/joi");

validatedCreate = Joi.object({
    nameCreator: Joi.string().min(6),
    phone: Joi.string().alphanum().min(8).max(11).required(),
    email: Joi.string().min(6),
    job: Joi.string().min(6).required(),
    description: Joi.string().min(6).required(),
    location: Joi.string().max(25).required(),
    facebookProfil: Joi.string(),
    instagramProfil: Joi.string(),
    images: Joi.array().items(Joi.string()),
});

module.exports.validatedCreate = validatedCreate;