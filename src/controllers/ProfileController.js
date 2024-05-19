import {
  fotgotPasswordService,
  getProfileService,
  removeProfileService,
  updatePasswordService,
  updateProfileImageService,
  updateProfileService,
} from "../services/ProfileService";
import { ApiFailed, ApiSuccess } from "../utils/ApiResponse";

export const getProfile = async (req, res) => {
  try {
    const response = await getProfileService(req);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const updateProfile = async (req, res) => {
  try {
    const response = await updateProfileService(req.body);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const updateProfileImage = async (req, res) => {
  try {
    const response = await updateProfileImageService(req.body);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const fotgotPassword = async (req, res) => {
  try {
    const response = await fotgotPasswordService(req.body);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const updatePassword = async (req, res) => {
  try {
    const response = await updatePasswordService(req.body);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};

export const removeProfile = async (req, res) => {
  try {
    const response = await removeProfileService(req.body);
    return res
      .status(200)
      .json(ApiSuccess(response.message, response.data, 200));
  } catch (error) {
    return res.status(400).json(ApiFailed(error.message, {}, 400));
  }
};
