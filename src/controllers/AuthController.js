import {
  loginService,
  logoutService,
  singupService,
} from "../services/AuthService";
import { ApiFailed, ApiSuccess } from "../utils/ApiResponse";

export const signup = async (req, res) => {
  try {
    const response = await singupService(req.body);
    return res
      .status(201)
      .json(ApiSuccess(response.message, response.data, 201));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const login = async (req, res) => {
  try {
    const response = await loginService(req.body);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(401).json(ApiFailed(error.message, {}, 401));
  }
};

export const logout = async (req, res) => {
  try {
    const response = await logoutService(req, res);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(401).json(ApiFailed(error.message, {}, 401));
  }
};
