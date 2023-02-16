const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(express.json());

//Routes
app.use(require('./routes'));

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto ', app.get('port'));
})