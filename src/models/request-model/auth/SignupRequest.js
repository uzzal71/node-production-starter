import Joi from "joi";

const SignupSchema = Joi.object().keys({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  email: Joi.string().email().optional(),
  password: Joi.string().required(),
  otp: Joi.optional(),
  role: Joi.optional(),
  status: Joi.optional(),
});

const SignupValidate = (data) => {
  const result = SignupSchema.validate(data);
  result.value = data;
  return result;
};

export default SignupValidate;
