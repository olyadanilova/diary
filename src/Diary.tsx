import { hot } from "react-hot-loader/root";
import * as React from "react";
import Title from "./components/Title";
import Table from "./components/Table";
import {TypeDiary, mesageSaveTestArea} from "./components/Constants";
import {Button} from "react-bootstrap";
import TextEdit from "./components/TextEdit";
import axios from "axios";

export interface DiaryProps {
}

export type OnChangeTextHandler = (rowName: "valueTextarea" | "valueDate") => (value: any) => void;

export interface DiaryState {
    valueDate: Date;
    valueTextarea: string;
    listDiary: TypeDiary[];
    listDiaryUbdate: TypeDiary[];
    showing: boolean;
}
export class Diary extends React.Component<DiaryProps, DiaryState>{

    state: DiaryState = {
        valueDate: new Date,
        valueTextarea: "",
        listDiary: [],
        listDiaryUbdate:[],
        showing: false,
    };

    componentDidMount(): void{
        axios.get<TypeDiary[]>( 'http://localhost:3000/diary').then(res=>{
            this.setState({
                        listDiary: res.data
                    })
        });
        // fetch("http://localhost:3000/diary", {
        //     method: "get"
        // }).then(res => res.json()).then(array => {
        //     this.setState({
        //         listDiary: array
        //     })
        // })

        //  ('form')! - добавлена проверка, так как localStorage.getItem() может возвращать строку или ноль.
        // JSON.parse () требует строку, поэтому нужно проверить результат localStorage.getItem ()
        // this.state.listDiary = JSON.parse(localStorage.getItem('form')!);
        // if(localStorage.getItem('form')){
        //     this.setState({
        //         listDiary: JSON.parse(localStorage.getItem('form')!)
        //     })
        // }
        // this.state.valueDate = new Date().toLocaleString("ru", OPTIONS_DATA);
    }

    // Сохранение значений даты и текста в listDiary
    onClickSave= () =>{
        this.state.valueTextarea.length>0?
            this.saveList(this.state.valueTextarea, this.state.valueDate):
            alert(mesageSaveTestArea)
    };
    saveList = (text: string, date: Date) =>{
        axios.post<TypeDiary[]>("http://localhost:3000/diary", {
            note: text,
            date: date
        }).then((res)=>{
            this.setState({
                listDiary: res.data
            });
console.log(res.data)
        })
        // console.log("date и textArea", date + "   " + text);
        // this.setState({
        //     listDiary: [
        //         ...this.state.listDiary,
        //         {
        //             note: text,
        //             date: date
        //         }
        //     ]}, () =>{
        //     // localStorage.setItem('form', JSON.stringify(this.state.listDiary));
        // });
    };
    // Изменение стиля строки - "Выполнено"
    onClickReady =(row: TypeDiary) => {
        // console.log("onClickReady", row);
        let rowStyle:string;
        let newList:TypeDiary[]=this.state.listDiary;
        let rowNewStyle:TypeDiary;
        let indexRow:number;
        if (row.rowReady){
            rowStyle = ""
        } else{
            rowStyle= "row-ready"
        }
        indexRow=this.state.listDiary.indexOf(row);
        rowNewStyle = {note: row.note, date: row.date, rowReady: rowStyle};
        newList.splice(indexRow, 1, rowNewStyle);
        // console.log("newList", newList);
        this.setState({
            listDiary: newList
        })
        // , () => localStorage.setItem('form', JSON.stringify(this.state.listDiary)))
        //     this.setState({
        //         listDiary:[
        //             ...this.state.listDiaryUbdate,
        //             {
        //                 note: row.note,
        //                 rowReady: rowStyle,
        //                 date: row.date
        //             }
        //         ]}, () =>{
        //         localStorage.setItem('form', JSON.stringify(this.state.listDiary));
        //     });
    };
    onClickDeleleRow = (row: TypeDiary) => {

        this.setState({
            listDiary: this.state.listDiary.filter((el) => el!=row)
        },()=>{
            // localStorage.setItem('form', JSON.stringify(this.state.listDiary));
        });
    };
    onClickShowTable = () => {
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
// Изменение состояния valueTextarea или valueDate после изменения значения полей ввода Заметка или Дата
    onChangeTextEdit = (rowName: "valueTextarea" | "valueDate") => (value: any) =>{
        // console.log("valueTextEdit", valueTextEdit);
        this.setState({
            [rowName]: value
        } as any);
    };
    // очистка поля ввода textarea и сброс даты на текущую
    onClickClear = () => {
        this.setState({
            valueTextarea: "",
            valueDate: new Date,
        })
    };

    render(){
            return <div>
                <form action={"http://localhost:3000/diary"} method={'GET'}>
                <Title/>
                <TextEdit onChangeTextEdit={this.onChangeTextEdit}
                          valueDate={this.state.valueDate}
                          valueTextarea={this.state.valueTextarea}
                />
                <Button className="btn-form" onClick={this.onClickClear} >Очистить</Button>
                <Button className="btn-form" onClick={this.onClickSave} >Сохранить</Button>
                <br/>
                <Button className="btn-show" onClick={this.onClickShowTable} >Показать/Скрыть список</Button>
                <Table showing={this.state.showing}
                       listDiary={this.state.listDiary}
                       onClickDeleleRow={this.onClickDeleleRow}
                       onClickReady={this.onClickReady}
                       onChangeTextEdit={this.onChangeTextEdit}
                />
                </form>
            </div>
    }
}
export default hot(Diary);