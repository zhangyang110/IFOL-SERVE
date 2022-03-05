var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const bp = require('body-parser');
var app = express();
// 使用bp包之前需要先进行配置，因为bp默认采用的是qs包进行url编码转换
// 如果希望使用核心模块进行处理，必须进行以下设置：
// 下面这句话的含义为：使用核心模块querystring进行处理操作
// app.use(bp.urlencoded({ extended: false }));

/**
* @author MasterYi 2022-03-02
* @description   设置跨域
*/  
// 自定义跨域中间件
var allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true');
  next();
};


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(allowCors);//允许跨域

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
