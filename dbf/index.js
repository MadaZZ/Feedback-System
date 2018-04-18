var express = require('express');

//Set up express app
const app = express();

//Connect to mongodb
mongoose.connect('mongodb://localhost/feed');
mongoose.Promise = global.Promise;

var routes = require('./app');

// app.use(bodyParser.json());

//Listning to app
app.use('/api',routes);

//Error handling
app.use(function(err,req,res,next){
  res.status(442).send({error: err.message});
});
app.listen(process.env.port || 4000,function(){
  console.log("Listning to requests");
});