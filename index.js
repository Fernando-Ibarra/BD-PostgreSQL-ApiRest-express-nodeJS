const express = require('express');
// constructor - metodo que crea la aplicación
const app = express();
const port = 3000;


app.get('/', (request, response) => {
  response.send('Mi server en express');
})

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
