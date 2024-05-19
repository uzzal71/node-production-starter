export const ApiSuccess = (message, data = null, statusCode = 200) => {
  return {
    status: true,
    message: message,
    data: data,
    statusCode: statusCode,
  };
};

export const ApiFailed = (message, data = null, statusCode = 500) => {
  return {
    status: false,
    message: message,
    data: data,
    statusCode: statusCode,
  };
};
