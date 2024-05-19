import { ApiFailed } from "../utils/ApiResponse";

export const HandleBodyRequest = (validate) => (req, res, next) => {
  const result = validate(req.body);
  const isValid = result.error == null;
  if (isValid) {
    return next();
  }
  const { details } = result.error;
  const message = details[0].message.replace(/"/g, "");
  return res.json(ApiFailed(message));
};

export const HandleQueryValidation = (validate) => (req, res, next) => {
  const result = validate(req.query);
  const isValid = result.error == null;
  if (isValid) {
    return next();
  }
  const { details } = result.error;
  const message = details[0].message.replace(/"/g, "");
  return res.json(ApiFailed(message));
};

export const HandleParamsValidation = (validate) => (req, res, next) => {
  const result = validate(req.params);
  const isValid = result.error == null;
  if (isValid) {
    return next();
  }
  const { details } = result.error;
  const message = details[0].message.replace(/"/g, "");
  return res.json(ApiFailed(message));
};
