// DEPENDENCIES AND CONFIGURATIONS
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const mongoose = require('mongoose');


// MIDDLEWARE
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
// app.use(methodOverride, ('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )
  

// CONTROLLERS AND ROUTES
app.use('/books', require('./controllers/books.js'));


// HOME PAGE
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>')
})

// WILD CARD handles errors for paths that don't exist
app.get('*', (req, res) => {
    res.send('ERROR stub')
})

// Listens for connections - keeps server open
app.listen(process.env.PORT, function () {
    console.log('Hello, I am ready!')
})