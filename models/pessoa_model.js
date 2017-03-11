var conexaoDB = require('../database/database'); 

// cria o Schema
var pessoaSchema = new conexaoDB.Mongoose.Schema({
   nome:String,
   telefone:Number,
   _enabled:Boolean
});

// cria um Model e exporta
exports.Pessoa = conexaoDB.Mongoose.model('Pessoa', pessoaSchema); 