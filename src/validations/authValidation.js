import Joi from 'joi'

export const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    full_name: Joi.string().required(),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
});