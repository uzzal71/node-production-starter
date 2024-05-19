import express from "express";
import {
  fotgotPassword,
  getProfile,
  removeProfile,
  updatePassword,
  updateProfile,
  updateProfileImage,
} from "../../controllers/ProfileController";
import { HandleBodyRequest } from "../../middlewares/RequestValidationMiddleware";
import validators from "../../models/request-model";

const router = express.Router();

router.get("/get-profile", getProfile);
router.put(
  "/update-profile",
  HandleBodyRequest(validators.OTPSentValidation),
  updateProfile
);
router.put(
  "/update-profile-image",
  HandleBodyRequest(validators.OTPVerifyValidation),
  updateProfileImage
);
router.post(
  "/fotgot-password",
  HandleBodyRequest(validators.SigninValidation),
  fotgotPassword
);
router.put("/update-password", updatePassword);
router.delete("/remove-profile", removeProfile);

export default router;
