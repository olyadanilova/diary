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

app.delete('/diary/:index', (request, respons)=>{
    console.log("request", request.params.id);
    const testList = diaryDB.getData("/diary").filter((el, index)=> index!=request.params.index)
    diaryDB.push('/diary', testList, true)
    // console.log("testList", testList);
    respons.json(testList);
})
app.patch('/diary/:index', (request, respons)=>{
    console.log("request", request.params.index);
    let rowStyle = request.body.rowReady;
    if (request.body.rowReady){
        rowStyle = ""
    } else{
        rowStyle = "row-ready"
    }
    diaryDB.getData("/diary").splice(request.params.index, 1, {
        note: request.body.note,
        date: request.body.date,
        rowReady: rowStyle
    });
    const testList = diaryDB.getData("/diary");
        // console.log("testList1", testList);
    diaryDB.push('/diary', testList, true);
    respons.json(testList);
    console.log("testList", testList);
});

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