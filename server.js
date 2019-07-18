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

sortByParams = (params) => (obl1, obj2)=>{
    return  +new Date(obl1[params])-(new Date(obj2[params]));
};

app.post('/diary', (request, respons)=>{
console.log(request.body);
    diaryDB.push("/diary[]", {
        note: request.body.note,
        date: request.body.date
    }, true)
    const testList = diaryDB.getData("/diary");
    respons.json(testList);
});

app.delete('/diary/:index', (request, respons)=>{
    console.log("request", request.params.id);
    const testList = diaryDB.getData("/diary").filter((el, index)=> index!=request.params.index)
    diaryDB.push('/diary', testList, true)
    // console.log("testList", testList);
    respons.json(testList);
})

app.patch('/diary/:index', (request, respons)=>{
    console.log("request", request.params.index);
    diaryDB.getData("/diary").splice(request.params.index, 1, {
        note: request.body.note,
        date: request.body.date,
        rowReady: request.body.rowReady
    });
    const testList = diaryDB.getData("/diary").sort(sortByParams("date"));
    diaryDB.push('/diary', testList, true);
    respons.json(testList);
    // console.log("testList", testList);
});

app.use(express.static(path.resolve(__dirname)));
// app.use(express.static('dist'));

app.get('/', (request, respons)=>{
    //seendFile - функция, которая позволяет отправить определенный файл
    respons.sendFile(__dirname + '/index.html')
});

app.get('/diary', (request, respons)=>{
    const testString = diaryDB.getData("/diary").sort(sortByParams("date"));
    respons.json(testString);
    // respons.json([1, 5, 666]);
});

app.listen(3000, ()=>{
    console.log('Сервер работает!')
});
// diaryDB.delete("/diary");
// diaryDB.save(localStorage.getItem(form));