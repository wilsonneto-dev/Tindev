const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');


// criando o servidor
const server = express();

mongoose.connect(
    'mongodb+srv://tindev:tindev@cluster0-o37eq.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true }
);

server.use(cors());
server.use(express.json());
server.use(routes);

// escutar na 8282
server.listen(8282);

// mongodb+srv://tindev:<password>@cluster0-o37eq.mongodb.net/test?retryWrites=true&w=majority