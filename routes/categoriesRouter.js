const express = require('express');
const CategoriesServices = require('../services/categoriesService')
const router = express.Router();
const service = new CategoriesServices();

router.get('/', (request, response) => {
  const categories = service.find();
  response.json(categories);
})

router.post('/', (request, response) => {
  const body = request.body
  const newCategory = service.create(body);
  response.status(201).json(newCategory)
})

router.patch('/:id', (request, response) => {
  const { id } = request.params
  const body = request.body
  const category = service.update(id, body)
  response.json(category)
});

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  const category = service.delete(id)
  response.json(category)
});

module.exports = router;
