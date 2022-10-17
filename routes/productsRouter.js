const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (request, response) => {
  const  products = [];
  const { size } = request.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  response.json(products);
})

router.post('/', (request, response) => {
  const body = request.body
  response.json({
    message: 'created',
    data: body,
  })
})

router.patch('/:id', (request, response) => {
  const { id } = request.params
  const body = request.body
  response.json({
    message: 'update',
    data: body,
    id,
  })
});

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  response.json({
    message: 'delete',
    id,
  })
});

// ESPECIFICO
router.get('/filter', (request, response) => {
  response.send('Yo soy un filter')
});

// DINAMICO
router.get('/:id', (request, response) => {
  const { id } = request.params;
  response.json({
    id,
    name:'Product 1',
    price: 1000
  })
})

module.exports = router;
