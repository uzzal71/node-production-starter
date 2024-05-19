import Joi from "joi";

const OTPSentSchema = Joi.object().keys({
  value: Joi.string().required(),
  type: Joi.string().required(),
});

const OTPSentValidate = (data) => {
  const result = OTPSentSchema.validate(data);
  result.value = data;
  return result;
};

export default OTPSentValidate;
