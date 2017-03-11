var database = require('../database/database');
var model = require('../models/pessoa_model');

// m�todo para criar e salvar uma Pessoa
exports.criarSalvarPessoa = function criarSalvarPessoa() {

  // instanciamos um objeto Pessoa e populamos
  var pessoa = new model.Pessoa({
    nome: "Joao Silva",
    telefone: 123456,
    idade: true
  });
   
  // o Model possui um m�todo save()
  pessoa.save(function(err, pessoa) {
    if (err) 
        return console.error(err);
    else {
      // gravado com sucesso!
      console.log("PERSISTIDO NO BANCO." + pessoa);
      database.conexaoDB.close();
    }
  });

};