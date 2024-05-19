// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

export const getProfileService = async (data) => {
  return {
    message: "Get Profile Successfully",
    data: { user: data.user },
  };
};

export const updateProfileService = async (data) => {};

export const updateProfileImageService = async (data) => {};

export const updatePasswordService = async (data) => {};

export const fotgotPasswordService = async (data) => {};

export const removeProfileService = async (data) => {};

function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}
