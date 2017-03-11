// importa o módulo mongoose
var mongoose = require('mongoose'); 
// conecta no banco 'test' que já existe por default no MongoDB
mongoose.connect('mongodb://localhost:27017/test'); 

// exporta os objetos
exports.Mongoose = mongoose;
exports.conexaoDB = mongoose.connection;