const express = require('express');
const routerApi = require('./routes')
// constructor - metodo que crea la aplicación
const app = express();
const port = 3000;

app.use(express.json())

// GET
app.get('/', (request, response) => {
  response.send('Mi server en express');
})

routerApi(app);


app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
