const express = require('express');

const CategoryService = require('../services/categoriesService');
const validatorHandler = require('../middlewares/validatorHandler');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/categorySchemna');

const router = express.Router();
const service = new CategoryService();

router.get('/', async (request, response, next) => {
  try {
    const categories = await service.find();
    response.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const category = await service.findOne(id);
      response.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (request, response, next) => {
    try {
      const body = request.body;
      const newCategory = await service.create(body);
      response.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      const body = req.body;
      const category = await service.update(id, body);
      response.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (request, response, next) => {
    try {
      const { id } = request.params;
      await service.delete(id);
      response.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
