const express = require('express');
const ProductsServices = require('../services/productService')
const router = express.Router();
// Instancia
const service = new ProductsServices();

router.get('/', (request, response) => {
  const  products = service.find();
  response.json(products);
})

router.post('/', (request, response) => {
  const body = request.body
  const newProduct = service.create(body);
  response.status(201).json(newProduct)
})

router.patch('/:id', (request, response) => {
  const { id } = request.params
  const body = request.body
  const product = service.update(id, body)
  response.json(product)
});

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  const product = service.delete(id)
  response.json(product)
});

// ESPECIFICO
/*router.get('/filter', (request, response) => {
  response.send('Yo soy un filter')
});*/

// DINAMICO
router.get('/:id', (request, response) => {
  const { id } = request.params;
  const products = service.findOne(id);
  response.json(products);
})

module.exports = router;
