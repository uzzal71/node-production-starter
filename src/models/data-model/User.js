import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    otp: { type: String, default: "" },
    state: {
      type: String,
      enum: [
        "unverified",
        "otp_sent",
        "phone_not_verified",
        "email_not_verified",
        "verified",
      ],
      default: "unverified",
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["superadmin", "admin", "user", "merchant"],
    },
    password: { type: String, required: true },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "active",
    },
    profile_image: { type: String, trim: true, default: "" },
  },
  { timestamp: true }
);

const User = mongoose.model("User", userSchema);

export default User;
