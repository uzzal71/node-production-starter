import {
  optVerificationService,
  sentOTPService,
} from "../services/VerifyService";
import { ApiFailed, ApiSuccess } from "../utils/ApiResponse";

export const sent_otp = async (req, res) => {
  try {
    const response = await sentOTPService(req.body);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const otp_verification = async (req, res) => {
  try {
    const response = await optVerificationService(req.body);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};
