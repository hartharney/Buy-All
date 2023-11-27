import Joi from "joi";

export const registerUserSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().email().required(),
  firstName: Joi.string().required(),
  password: Joi.string()
    .trim()
    .regex(/^[a-zA-Z0-9]{3,18}$/)
    .required(),
  confirmPassword: Joi.any()
    .equal(Joi.ref("password"))
    .required()
    .label("Confirm password")
    .messages({ "any.only": "{{#label}} does not match" }),
  phone: Joi.string().required(),
});

export const loginUserSchema = Joi.object().keys({
  email: Joi.string().trim().lowercase().email().required(),
  password: Joi.string()
    .trim()
    .regex(/^[a-zA-Z0-9]{3,18}$/)
    .required(),
});
