const Joi = require("@hapi/joi");

const adminForm = Joi.object().keys({
  admin: Joi.string().min(3).max(550).required(),
  password: Joi.string().min(3).max(25).required(),
});

module.exports = {
  adminForm,
};