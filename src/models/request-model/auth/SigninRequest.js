import Joi from "joi";

const SigninSchema = Joi.object().keys({
  phone: Joi.string().required(),
  password: Joi.string().required(),
});

const SigninValidate = (data) => {
  const result = SigninSchema.validate(data);
  result.value = data;
  return result;
};

export default SigninValidate;
