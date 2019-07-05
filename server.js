// подключаем модуль http
const http = require('http');
// используем его метод createServer,с помощтю которого создаем сервер и сохраняем его в константе server
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>Project</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
    </head>
    <body>
    <h1>Ежедневник</h1>
    <div id="root"></div>
    </body>
    </html>
    `);
}).listen(3000, ()=>{
        console.log('Сервер работает!')
    });





// let express = require('express');
// let server = express();
// // server.set('view engine', 'ejs');
// server.use(express.static('diary'));
// // let bodyParser = require('body-parser');
// //парсер, который позволит нам брать все те данные полученные из post-запроса и с ними работать
// // как нам нужно
// // let urlencodeParser = bodyParser.urlencoded({extended: false});
//
// server.get('/', function(req, res){
//     res.render('/')
// });
// server.post('/index', function(req, res){
//     // Проверка: если нет данных выведенных из формы, то выводим статус - 400, т.е. ошибка
//     if(!req.body) return res.sendStatus(400);
//     // Выведем в консоль данные из формы:
//     console.log(req.body);
//     //выводим страничку index
//     // res.render('index')
//     res.render('index-success', {data: req.body})
// });
// server.listen(3000);
// console.log('Example diary listening on port 3000!');

