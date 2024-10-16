const errorMiddleware = (err, req, res, next) => {
  err.message ||= "Internal Server Error";

  err.statusCode ||= 500;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

/* // HOC:
function TryCatch(fun) {
  return async function (req, res, next) {
    try {
      
    } catch (error) {
      
    }
  };
} */

const TryCatch = passedFunc => async (req, res, next) => {
  try {
    await passedFunc(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { errorMiddleware, TryCatch };
