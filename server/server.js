require('./config/config');

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');

const bodyParser = require('body-parser');

//Habilitar la carpeta public
app.use(express.static(path.resolve(__dirname, '../public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//configuración global de rutas
app.use(require('./routes/index'));


mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, resp) => {
    if (err) throw err;

    console.log('Base de datos online');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});