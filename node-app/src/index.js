const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  if (process.env.CATCH_ALL !== undefined && process.env.CATCH_ALL === 'true') {
    res.send(404);
  }
  else {
    res.send(`Hello from node-app-${process.env.ID}!`);
  }  
});

app.listen(process.env.PORT);
