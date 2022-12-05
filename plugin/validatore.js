import Joi from "joi";

export const validateEmployee = async (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    gender: Joi.string().valid("male", "female").required(),
    birthday: Joi.string().required(),
    salary: Joi.number().required(),
  });

  return schema.validate(data);
};
