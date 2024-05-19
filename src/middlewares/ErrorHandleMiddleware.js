export default async (err, req, res, next) => {
  let message = err.message;
  let statusCode = 400;
  if (err.message === "401") {
    message = "unauthorized access!";
    statusCode = 401;
  }

  res.status(statusCode).send({
    status: false,
    message: message,
    data: {},
    statusCode: statusCode,
  });

  next();
};
