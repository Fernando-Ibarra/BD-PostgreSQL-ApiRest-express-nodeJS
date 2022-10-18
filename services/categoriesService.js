const faker = require('faker');
class CategoriesServices {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    const count = 25;
    for (let index = 0; index < count; index++) {
      this.categories.push({
        categoryId: faker.datatype.uuid(),
        nombre: faker.commerce.department(),
        description: faker.commerce.productAdjective(),
      })
    }
  }

  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(item => item.id === id)
  }

  update(id, changesData) {
    const index = this.categories.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changesData
    };
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(item => item.id === id)
    if (index === -1) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesServices;
