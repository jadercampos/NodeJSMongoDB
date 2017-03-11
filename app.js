var http = require('http'); // import do módulo http
var pessoaService = require('./service/pessoa_service');
// cria um servidor para atender os requests
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('RESPOSTA DO SERVIDOR!');

  // chama nosso serviço
  pessoaService.criarSalvarPessoa();

}).listen(1337, '127.0.0.1');

console.log('SERVIDOR RODANDO...');