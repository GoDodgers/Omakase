var express = require('express');
var path = require('path');
var app = express();
var cors = require('cors');
var request = require('request');
var bodyParse = require('body-parser');
var db = require('./database/db.js');
var searchRouter = require('./router/searchRouter.js');
var userRouter = require('./router/userRouter.js');
var dishRouter = require('./router/dishRouter.js');
app.use(cors())
app.use(bodyParse.json({limit: '50mb'}));

app.use(express.static(__dirname + '/../client/')) 


=======
var dishRouter = require('./router/dishRouter.js');


app.use(express.static(__dirname + '/../client/')) 

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
///

  // 404 Error handling
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use('/api/user', userRouter)
app.use('/api/search', searchRouter)
app.use('/api/dish', dishRouter)
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
  db.ensureSchema()
  console.log('we are now listening on ', app.get('port'))
})
