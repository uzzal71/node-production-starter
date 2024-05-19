import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;

  try {
    if (authorization) {
      const token = authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const { user } = decode;

      req.user = {
        id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        state: user.state,
        status: user.status,
        role: user.role,
        profile_image: user.profile_image,
      };
      next();
    } else {
      throw new Error(401);
      next();
    }
  } catch (error) {
    next(error);
  }
};
