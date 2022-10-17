const productsRouter = require('./productsRouter');
const userRouter = require('./usersRouter');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', userRouter);
}

module.exports = routerApi;
