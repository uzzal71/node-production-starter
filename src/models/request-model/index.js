import OTPSentValidate from "./auth/OTPSentRequest";
import OTPVerifyValidate from "./auth/OTPVerifyRequest";
import SigninValidate from "./auth/SigninRequest";
import SignupValidate from "./auth/SignupRequest";

const validators = {
  SignupValidation: SignupValidate,
  SigninValidation: SigninValidate,
  OTPSentValidation: OTPSentValidate,
  OTPVerifyValidation: OTPVerifyValidate,
};

export default validators;
