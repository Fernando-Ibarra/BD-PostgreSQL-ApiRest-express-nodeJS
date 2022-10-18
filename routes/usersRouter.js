const express = require('express');
const UsersServices = require('../services/userService')
const router = express.Router();
const service = new UsersServices();

router.get('/', (request, response) => {
  const users = service.find();
  response.json(users);
})

router.post('/', (request, response) => {
  const body = request.body
  const newUser = service.create(body);
  response.status(201).json(newUser)
})

router.patch('/:id', (request, response) => {
  const { id } = request.params
  const body = request.body
  const user = service.update(id, body)
  response.json(user)
});

router.delete('/:id', (request, response) => {
  const { id } = request.params;
  const user = service.delete(id)
  response.json(user)
});

module.exports = router;
