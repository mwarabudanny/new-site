const http=require('http');
const app=require('./app') //this is used to call theapp.js as an object to this JS
const port=process.env.PORT || 3000;
const server=http.createServer(app); 
server.listen(port);
