const http = require('http');
const app = require('./config/serverConfig.js')();

http.createServer(app).listen(3000, function() {
  console.log('Servidor rodando na porta 3000.');
});
