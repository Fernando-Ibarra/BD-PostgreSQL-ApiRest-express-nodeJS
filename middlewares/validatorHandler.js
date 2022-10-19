const boom = require('@hapi/boom')

// middleware dinamico
function validatorHandler(schema, property) {
  return (request, response, next) => {
    const data = request[property]
    const { error } = schema.validate(data)
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
