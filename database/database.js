// importa o m�dulo mongoose
var mongoose = require('mongoose'); 
// conecta no banco 'test' que j� existe por default no MongoDB
mongoose.connect('mongodb://localhost:27017/test'); 

// exporta os objetos
exports.Mongoose = mongoose;
exports.conexaoDB = mongoose.connection;