const express = require('express');
const ProductsServices = require('../services/productService')
const router = express.Router();
// Instancia
const service = new ProductsServices();

router.get('/', async (request, response) => {
  const  products = await service.find();
  response.json(products);
})

router.post('/', async (request, response) => {
  const body = request.body
  const newProduct = await service.create(body);
  response.status(201).json(newProduct)
})

router.patch('/:id', async (request, response, next) => {
  try {
    const { id } = request.params
    const body = request.body
    const product = await service.update(id, body)
    response.json(product)
  } catch (error) {
    next(error);
  }

});

router.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const product = await service.delete(id)
  response.json(product)
});

// ESPECIFICO
/*router.get('/filter', (request, response) => {
  response.send('Yo soy un filter')
});*/

// DINAMICO
router.get('/:id', async (request, response, next) => {
  try {
    const { id } = request.params;
    const products = await service.findOne(id);
    response.json(products);
  } catch (error) {
    next(error)
  }

})

module.exports = router;
