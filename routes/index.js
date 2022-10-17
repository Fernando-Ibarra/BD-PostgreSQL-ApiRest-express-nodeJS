const productsRouter = require('./productsRouter');
const userRouter = require('./usersRouter');
const categoryRouter = require('./categoriesRouter');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/users', userRouter);
  app.use('/categories', categoryRouter);
}

module.exports = routerApi;
