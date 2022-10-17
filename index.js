const express = require('express');
// constructor - metodo que crea la aplicación
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Mi server en express');
})

app.get('/nueva-ruta', (request, response) => {
  response.send('Soy una nueva ruta')
})

app.get('/product', (request, response) => {
  response.json({
    name:'Product 1',
    price: 1000
  });
})

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
