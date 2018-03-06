const express = require('express');
const app = express();
app.use(express.static('server/public/'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); // needed for angular requests



//Router
const swapiRouter = require('./routers/CC5Router');
app.use('/cc5', swapiRouter);


//Start up the server
app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
