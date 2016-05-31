# About boilerplate :

Node Boilerplate has 2 goals:
 - Base security rules, like as X-XSS-Protection, ReDoS ( Regexes based Denial Of Service ), basic HTTP secure rules, CORS (Cross-origin resource sharing) etc.
 - Easy to use es6 features with nodemon, for perfect development.
 - Twilio and emailjs already integrated.
 - DB integration with Sequelizejs.
 - Colorful console logs, chalk
 - Eslint airbnb.

 # TODO:
 - Fully restful auth mechanism with passport.js && Two factor auth
 - Login & Share social accounts ( Facebook - Twitter - G+ - Linkedin etc.)
 - MonetizeJS for paymanent.
 - Socket.io && lusca (CSRF middleware) integration

# Quick install
```
git clone && cd dir && npm install & npm run start-dev
```

#For security check :
```
npm install nsp --global && nsp check # Free for opensource projects or 1$ Per private repos.
```

# If you use gulp nsp :
```
npm install gulp-nsp --save
```
Then in your gulpfile, add the following task like so.



```
var gulpNSP = require('gulp-nsp');

//To check your package.json
gulp.task('nsp', function (cb) {
  gulpNSP({package: __dirname + '/package.json'}, cb);
});

//To check your shrinkwrap.json
gulp.task('nsp', function (cb) {
  gulpNSP({shrinkwrap: __dirname + '/npm-shrinkwrap.json'}, cb);
});

//If you don't want to stop your gulp flow if some vulnerabilities have been found use the stopOnError option:
gulp.task('nsp', function (cb) {
  gulpNSP({
    package: __dirname + '/package.json',
    stopOnError: false
  }, cb);
});

//For enterprises building behind a proxy (HTTP_PROXY or HTTPS_PROXY), use the proxy option:
gulp.task('nsp', function (cb) {
  gulpNSP({
    shrinkwrap: __dirname + '/npm-shrinkwrap.json',
    proxy: process.env.HTTPS_PROXY
  }, cb);
});
```


Security tips : https://blog.risingstack.com/node-js-security-tips/
