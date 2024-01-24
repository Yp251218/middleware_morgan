const express = require('express');
const fs = require('fs');
const path = require('path')
const morgan = require('morgan');
const http = require('http');
const app = express();
const port = 5000;

console.log("Hi");

const logFile = path.join(__dirname, 'access.log');

app.use(morgan('combined', {stream : fs.createWriteStream(logFile,{flags: 'a'})}));
app.use(morgan('common'));
app.use(morgan('dev'));
app.use(morgan('tiny'));

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', (req,res) =>{
    res.send("Hello World")
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
