const express = require('express');
const productsRouter = require('./productsRouter');
const userRouter = require('./usersRouter');
const categoryRouter = require('./categoriesRouter');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoryRouter);
}

module.exports = routerApi;
