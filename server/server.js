var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

// routes 컨트롤
var routesPath = path.join(__dirname, 'routes');
var routes = require(path.join(routesPath, 'routes'));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, '../public', 'views'));
app.use(express.static(path.join(__dirname, '../public')));  // 스태틱 파일 정의
app.use(bodyParser.json()); //들어오는 http request body가 json 일때도 파싱할 수 있도록 지원한다.
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000);

app.get('/', routes.index);

console.log('start server !!');
