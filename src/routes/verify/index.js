import express from "express";
import { otp_verification, sent_otp } from "../../controllers/VerifyController";
import { HandleBodyRequest } from "../../middlewares/RequestValidationMiddleware";
import validators from "../../models/request-model";

const router = express.Router();

router.post(
  "/sent-otp",
  HandleBodyRequest(validators.OTPSentValidation),
  sent_otp
);
router.post(
  "/otp-verification",
  HandleBodyRequest(validators.OTPVerifyValidation),
  otp_verification
);

export default router;
