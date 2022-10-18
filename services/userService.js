const faker = require('faker');
class UsersServices {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    const count = 25;
    for (let index = 0; index < count; index++) {
      this.users.push({
        userId: faker.datatype.uuid(),
        nombre: faker.name.firstName(),
        apellido: faker.name.lastName(),
        genero: faker.name.gender(),
      })
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id)
  }

  update(id, changesData) {
    const index = this.users.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changesData
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersServices;
