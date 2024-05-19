import models from "../models/data-model";

export const sentOTPService = async (data) => {
  try {
    let user;
    let otp = generateOTP();

    if (data.type === "phone") {
      user = await models.User.findOne({ phone: data.value });
      if (!user) throw new Error("Invalid phone number!");

      await models.User.updateOne(
        { phone: data.value },
        { $set: { otp: otp, state: "phone_not_verified" } }
      );
    } else if (data.type === "email") {
      user = await models.User.findOne({ email: data.value });
      if (!user) throw new Error("Invalid email!");

      await models.User.updateOne(
        { email: data.value },
        { $set: { otp: otp, state: "email_not_verified" } }
      );
    } else {
      throw new Error("Invalid verification type!");
    }

    return {
      message: `OTP sent successfully check your ${data.type}`,
      data: { otp },
    };
  } catch (error) {
    throw new Error(error.message || "Failed to send OTP.");
  }
};

export const optVerificationService = async (data) => {
  try {
    let user;
    if (data.type === "phone") {
      user = await models.User.findOne({ phone: data.value });
      if (!user) throw new Error("Invalid phone number!");
    } else if (data.type === "email") {
      user = await models.User.findOne({ email: data.value });
      if (!user) throw new Error("Invalid email!");
    } else {
      throw new Error("Invalid verification type!");
    }

    if (data.otp !== user.otp) throw new Error("Invalid otp number!");

    let state;
    if (data.type === "phone") {
      state = "email_not_verified";
    } else if (data.type === "email") {
      state = "verified";
    }

    const updateData = { state: state };
    if (data.type === "phone") updateData.phone = data.value;
    else if (data.type === "email") updateData.email = data.value;

    await models.User.updateOne({ _id: user._id }, { $set: updateData });

    return {
      message: `${
        data.type.charAt(0).toUpperCase() + data.type.slice(1)
      } verified successfully`,
      data: {},
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp.toString();
}
