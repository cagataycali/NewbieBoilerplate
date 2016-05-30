import 'babel-polyfill';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import yosay from 'yosay';
import chalk from 'chalk';
import routes from './routes/index';
import helmet from 'helmet';
import cors from 'cors';
import hpp from 'hpp';
import contentLength from 'express-content-length-validator';



const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
const MAX_CONTENT_LENGTH_ACCEPTED = 9999;

app.use(contentLength.validateMax({max: MAX_CONTENT_LENGTH_ACCEPTED, status: 400, message: 'stop it!'}));


// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(hpp());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.frameguard());
app.use(helmet.xssFilter());
app.disable('x-powered-by', 'Ç²');
app.use(helmet.noSniff());
app.use(helmet.noCache());
app.use(helmet.dnsPrefetchControl());

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json('error', {
      message: error.message,
      error,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json('error', {
    message: error.message,
    error: {},
  });
});

module.exports = app;

app.listen(process.env.PORT || 3000, () => {
  console.log(chalk.blue('Awesome!'));
  console.log(yosay('Your awesome code is running now! @localhost:'));
  console.log('\u0007'); // Beep !
});
