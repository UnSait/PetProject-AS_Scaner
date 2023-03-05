require('dotenv').config();

const express = require('express');

const bodyParser = require('body-parser');

const cors = require('cors');

const router = require('./routes/index');

const corsOptions = {
  origin: 'https://as-scaner.space',
}

const { PORT_SERVER, PORT_DB } = process.env;

const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(PORT_DB);

const app = express();

app.use(bodyParser.json());

app.use(cors(corsOptions), router);

app.listen(PORT_SERVER, () => {
  console.log(`App listening on port ${PORT_SERVER}`);
});