const express = require('express');

const app = express();



const bodyParser = require('body-parser');

const user = require('./router/user');
const message = require('./router/message');

app.use(bodyParser.urlencoded({extended: true}));

app.use(user);
app.use(message);

app.use((req, res, next)=>{

    res.status(404).send('<h1>Page not found</h1>')

});



app.listen(3000);