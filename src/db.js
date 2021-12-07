// CREAR LA BD

const  mongoose = require('mongoose');

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/Peliculasdb",{
  useNewUrlParser : true,
    useUnifiedTopology : true
})
.then (db => {
    return console.log(`Base de datos:${db.connection.name}`);
})
.catch(error => console.log(error))

module.exports =  mongoose;