const express = require('express');

var app = express();

app.get('/', (req, resp)=>{
  resp.status(404).send({
    error: 'Page not found.',
    name: 'Todo app v1.0'
  });
});

app.get('/users', (req, resp)=> {
  resp.send([
    {name: 'Laurent', age: 31},
    {name: 'Karla', age: 27},
    {name: 'Jen', age: 28}
  ]);
});

app.listen(3000);

module.exports.app = app;
