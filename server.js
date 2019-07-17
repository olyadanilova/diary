const path = require('path');
const cors = require('cors');
const JsonDB = require('node-json-db').JsonDB;
const diaryDB = new JsonDB("listDiaryDB", true, false);
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.post('/diary', (request, respons)=>{
console.log(request.body);
    diaryDB.push("/diary[]", {
        note: request.body.note,
        date: request.body.date
    }, true)
    const testList = diaryDB.getData("/diary");
    respons.json(testList);
});

// app.delete('/diary', (request, respons)=>{
//     console.log(respons.body);
//     diaryDB.delete("/diary[]", {
//         note: request.body.note,
//         date: request.body.date
//     }, true)
// })
app.delete('/diary/:id', (request, respons)=>{
    console.log("request", request.params.id);
    const testList = diaryDB.getData("/diary").filter((el, id)=> id!=request.params.id)
    diaryDB.push('/diary', testList, true)
    // console.log("testList", testList);
    respons.json(testList);
    // diaryDB.delete("/diary",  request.body, true);
    // const testList = diaryDB.getData("/diary");
    // respons.json(testList);
})

// app.get('/list', (request, respons)=>{
//     //seendFile - функция, которая позволяет отправить определенный файл
//     const testList = diaryDB.getData("/list");
//     respons.json(testList);
//     // respons.json([1, 5, 666]);
// });

app.use(express.static(path.resolve(__dirname)));
// app.use(express.static('dist'));
app.get('/', (request, respons)=>{
    //seendFile - функция, которая позволяет отправить определенный файл
    respons.sendFile(__dirname + '/index.html')
});

app.get('/diary', (request, respons)=>{
    const testString = diaryDB.getData("/diary");
    respons.json(testString);
    // respons.json([1, 5, 666]);
});

app.listen(3000, ()=>{
    console.log('Сервер работает!')
});
// diaryDB.delete("/diary");
// diaryDB.save(localStorage.getItem(form));