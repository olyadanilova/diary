// import express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import {createConnection} from "typeorm";
import {Diary} from "./src/entities/Diary";
const path = require('path');

// create typeorm connection
createConnection().then((connection) => {
    console.log("сервер createConnection");
    const cors = require('cors');
    const diaryRepository = connection.getRepository(Diary);

    // const diary = new Diary();
    // diary.note = "some note";
    // diary.date = new Date();
    // diaryRepository.save(diary).then((result) => {
    //     console.log("result", result);
    // });

    const express = require('express');
    // create and setup express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    // register routes

    app.get("/diary", async function(req: Request, res: Response) {
        const diary = await diaryRepository.find();
        res.json(diary);
    });

    // app.get("/users/:id", async function(req: Request, res: Response) {
    //     const results = await diaryRepository.findOne(req.params.id);
    //     return res.send(results);
    // });

    app.post("/diary", async function(req: Request, res: Response) {
        console.log(req.body);
        const diary = await diaryRepository.create(req.body);
        const results = await diaryRepository.save(diary);
        return res.send(await diaryRepository.find());
    });

    // app.put("/users/:id", async function(req: Request, res: Response) {
    //     const user = await diaryRepository.findOne(req.params.id);
    //     await diaryRepository.merge(user, req.body);
    //     const results = await diaryRepository.save(user);
    //     return res.send(results);
    // });

    app.delete("/diary", async function(req: Request, res: Response) {
        const results = await diaryRepository.remove(req.params.id);
        return res.send(results);
    });
    app.use(express.static(path.resolve(__dirname)));
    app.get('/', (request, respons)=>{
        //seendFile - функция, которая позволяет отправить определенный файл
        respons.sendFile(__dirname + '/index.html')
    });
    // start express server
    app.listen(3000);
});