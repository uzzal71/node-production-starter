import express from "express";
import { login, logout, signup } from "../../controllers/AuthController";
import { HandleBodyRequest } from "../../middlewares/RequestValidationMiddleware";
import validators from "../../models/request-model";

const router = express.Router();

router.post("/signup", HandleBodyRequest(validators.SignupValidation), signup);
router.post("/signin", HandleBodyRequest(validators.SigninValidation), login);
router.post("/signout", logout);

export default router;
