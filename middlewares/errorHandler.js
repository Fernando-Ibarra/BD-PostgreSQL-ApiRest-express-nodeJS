// middleware error
function logError(error, request, response, next) {
  console.log('logErrors');
  console.error(error);
  next(error);
}

function errorHandler(error, request, response, next) {
  console.log('errorHandler');
  response.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

module.exports = { logError, errorHandler }
