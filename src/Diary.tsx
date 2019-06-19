import * as React from "react";
import { hot } from "react-hot-loader/root";
import Title from "./components/Title";
import Table from "./components/Table";
import TextEditor from "./components/TextEditor";
import {OPTIONS_DATA, TypeDiary} from "./components/Constants";
import {Button} from "react-bootstrap";

export interface DiaryProps {
}

export interface DiaryState {
    dateDiary: string;
    listDiary: TypeDiary[];
    listDiaryUbdate: TypeDiary[];
    // choice: boolean;
    valueTextarea: string;
    showing: boolean;
    // rowReady: boolean;
}
// let DatePicker = require("react-bootstrap-date-picker");
export class Diary extends React.Component<DiaryProps, DiaryState>{

    state: DiaryState = {
        listDiary: [],
        listDiaryUbdate:[],
        dateDiary: "",
        // choice: false,
        valueTextarea: "",
        showing: false,
        // rowReady: false
    };

    componentDidMount(): void{
        //  ('form')! - добавлена проверка, так как localStorage.getItem() может возвращать строку или ноль.
        // JSON.parse () требует строку, поэтому нужно проверить результат localStorage.getItem ()
        this.state.listDiary = JSON.parse(localStorage.getItem('form')!);
        this.state.dateDiary = new Date().toLocaleString("ru", OPTIONS_DATA);
    }
    onChangeTextArea=(valueTextarea:string) => {
            console.log("onValueTextareaChange", valueTextarea);
            this.setState({
                valueTextarea: valueTextarea
            });
        };

    // componentDidMount(): void {
    //     this.setState(JSON.parse(localStorage.getItem("form")));
    // }

    // сохранение знаяения даты полученного из поля ввода
    onDateChange =(dateDiary: string) => {
        // console.log("onDateChange", dateDiary);
        this.setState({
            dateDiary: dateDiary
        });
    };

    // Сохранение значений даты и текста в listDiary
    onClickSave= (event: React.ChangeEvent<any>) =>{
        this.setState({
                listDiary: [
                    ...this.state.listDiary,
                    {
                        note: this.state.valueTextarea,
                        // choice: true,
                        date: this.state.dateDiary
                    }
                ]}, () =>{
            localStorage.setItem('form', JSON.stringify(this.state.listDiary));
                console.log("onClickSave_form", localStorage.getItem('form'))
        });
    };
    // Изменение стиля строки - "Выполнено"
    onClickReady =(row: TypeDiary) => {
        console.log("onClickReady", row);
        let rowReadyCurrent:string;
        if (row.rowReady){
            rowReadyCurrent = ""
        } else{
            rowReadyCurrent= "row-ready"
        }
        this.setState({
            listDiaryUbdate: this.state.listDiary.filter((el) => el!=row ),
        }, () =>{
            this.setState({
                listDiary:[
                    ...this.state.listDiaryUbdate,
                    {
                        note: row.note,
                        rowReady: rowReadyCurrent,
                        date: row.date
                    }
                ]}, () =>{
                localStorage.setItem('form', JSON.stringify(this.state.listDiary));
                console.log("onClickReady_form", localStorage.getItem('form'))
            });
        })
    };
    onClickDeleleRow = (row: TypeDiary) => {
        this.setState({
            listDiary: this.state.listDiary.filter((el) => el!=row)
        },()=>{
            localStorage.setItem('form', JSON.stringify(this.state.listDiary));
            console.log("onCheckChois_form", this.state.listDiary.toLocaleString());
        });
    };
    onClickShow = () => {
        if (this.state.showing) {
            this.setState({
                showing: false
            })
        } else{
            this.setState({
                showing: true
            })
        }
    };

    render(){
            return <div>
                <Title/>
                <TextEditor onDateChange={this.onDateChange }
                            onChangeTextArea={this.onChangeTextArea}
                            onClickSave={this.onClickSave}/>
                <Button className="btn-show" onClick={this.onClickShow} >Показать/Скрыть список</Button>
                <div className="modalDialog"/>
                <Table showing={this.state.showing}
                       listDiary={this.state.listDiary}
                       onClickDeleleRow={this.onClickDeleleRow}
                       onClickReady={this.onClickReady}/>
            </div>
    }
}
export default hot(Diary);