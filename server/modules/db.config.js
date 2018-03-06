// Mongoose setup ------------------------------------
const mongoose = require('mongoose');

const databaseName = 'ccfive_michael';

'mongodb://localhost:27017/ccfive_michael'

mongoose.connection.on('connected', function() {
})

mongoose.connection.on('error', function(error) {
  console.log('mongoose connection error: ', error);
})

// End Mongoose Setup -------------------------------

//mongo connection URI

let mongoURI = '';

if(process.env.MONGODB_URI != undefined){
  mongoURI = process.env.MONGODB_URI;
} else {
  mongoURI = `mongodb://localhost:27017/${databaseName}`
}
mongoose.connect(mongoURI);

module.exports = mongoose;
