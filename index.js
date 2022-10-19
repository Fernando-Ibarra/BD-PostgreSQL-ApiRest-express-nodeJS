const express = require('express');
const routerApi = require('./routes')
const { logError, errorHandler } = require('./middlewares/errorHandler')
// constructor - metodo que crea la aplicación
const app = express();
const port = 3000;

app.use(express.json())

// GET
app.get('/', (request, response) => {
  response.send('Mi server en express');
})

routerApi(app);

app.use(logError);
app.use(errorHandler);

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
