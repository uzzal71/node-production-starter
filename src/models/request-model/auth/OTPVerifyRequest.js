import Joi from "joi";

const OTPVerifySchema = Joi.object().keys({
  value: Joi.string().required(),
  type: Joi.string().required(),
  otp: Joi.string().required(),
});

const OTPVerifyValidate = (data) => {
  const result = OTPVerifySchema.validate(data);
  result.value = data;
  return result;
};

export default OTPVerifyValidate;
