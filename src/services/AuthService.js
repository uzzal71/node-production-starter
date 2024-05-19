import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config";
import models from "../models/data-model";

export const singupService = async (data) => {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    let newUser = new models.User({
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      password: hashedPassword,
    });

    await newUser.save();

    return {
      message: "Signup was successfully",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          phone: newUser.phone,
          email: newUser.email,
          status: newUser.status,
          role: newUser.role,
        },
      },
    };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginService = async (data) => {
  try {
    const user = await models.User.findOne({ phone: data.phone });

    if (user) {
      const isValidPassword = bcrypt.compare(data.password, user.password);

      if (isValidPassword) {
        const userData = {
          id: user._id,
          name: user.name,
          phone: user.phone,
          email: user.email,
          state: user.state,
          status: user.status,
          role: user.role,
          profile_image: user.profile_image,
        };
        // generate token
        const token = jwt.sign({ user: userData }, config.JWT_SECRET, {
          expiresIn: config.JWT_EXPIRATION,
        });

        return {
          message: "Login Successfully",
          data: {
            access_token: token,
            user: userData,
          },
        };
      } else {
        throw new Error("unauthorization");
      }
    } else {
      throw new Error("unauthorization");
    }
  } catch (error) {
    throw new Error("unauthorization");
  }
};

export const logoutService = async (req, res) => {
  try {
    res.cookie("access_token", "", {});
    res.cookie("isLoggedIn", false, {});
    res.cookie("user", {}, {});

    return {
      message: "Logout Successfully",
      data: {},
    };
  } catch (error) {
    throw new Error(error.message);
  }
};
