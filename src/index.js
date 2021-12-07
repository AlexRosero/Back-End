// REQUERIMOS LAS DEPENDENCIAS NECESARIAS 

const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');
 require('./db')


// LLAMAR AL PUERTO ACTIVO

app.set('PORT', process.env.PORT || 4000);
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cors({origen: '*'}));



app.use('/Peliculas', require('./routes/Peliculas.routes.js'))

app.listen(app.get('PORT'), () => {

    console.log('Servidor en uso:',app.get('PORT'))

})