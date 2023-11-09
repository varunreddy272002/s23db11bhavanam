var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose =require('mongoose');


require('dotenv').config();  
const connectionString = process.env.MONGO_CON;
 
mongoose.connect(connectionString);  
var db = mongoose.connection;  
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function(){
  console.log('Connection to DB succeeded');
});

const { recreateDB } = require('./routes/seeds');
 
var app = express();
app.post('/seed-database', async (req, res) => {
  try {
    await recreateDB();
    res.status(200).send('Database seeded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error seeding database');
  }
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var artworksRouter = require('./routes/artworks');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var costumeRouter = require('./models/artworks');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/artworks', artworksRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/costume',costumeRouter);
app.use('/resource',resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
