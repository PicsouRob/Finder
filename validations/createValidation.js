const Joi = require("@hapi/joi");

validatedCreate = Joi.object({
    creatorId: Joi.string(),
    nameCreator: Joi.string().min(6),
    phone: Joi.string().alphanum().min(8).max(11).required(),
    email: Joi.string().min(6),
    job: Joi.string().min(6).required(),
    description: Joi.string().min(6).required(),
    location: Joi.string().max(25).required(),
});

module.exports.validatedCreate = validatedCreate;