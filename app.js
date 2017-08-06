var express = require('express')
var fs = require("fs")
var browserify = require('browserify')
var vueify = require('vueify')

var app = express()
  , server = require('http').createServer(app)
  , path = require('path'),
  bodyParser = require('body-parser');
;

browserify('./public/main.js')
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream("./public/bundle.js"))

app.use(bodyParser.urlencoded({
     extended: true,
     parameterLimit: 100000,
     limit: 1024 * 1024 * 100
}));
app.use(bodyParser.json({
     extended: true,
     parameterLimit: 100000,
     limit: 1024 * 1024 * 100
}));

app.set('views', __dirname + '/public');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.cookieParser());

app.use(require('./lib/language'))
app.use(require('./lib/translate'))
app.use(require('./lib/authenticate'))
app.use(require('./lib/authenticate/login'))

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/public/index.html');
});
