const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logError, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

// constructor - metodo que crea la aplicación
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['h ttp://127.0.0.1:5500'];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido'));
    }
  }
}
app.use(cors(corsOptions));

// GET
app.get('/', (request, response) => {
  response.send('Mi server en express');
})

routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});
