var http = require('http');
console.log('Nacteni konfigurace, databaze, lokalizace ap.');
http.createServer(function (req, res) {
  console.log('Zpracovani pozadavku z URL: ' + req.url);
  res.end('Hellodasdsadsd');
}).listen(1337);
//dasdsdasd