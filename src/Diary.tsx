import * as React from "react";
import { hot } from "react-hot-loader/root";
import Title from "./components/Title";
import Table from "./components/Table";
import {TypeDiary, mesageSaveTestArea} from "./components/Constants";
import {Button} from "react-bootstrap";
import TestEdit from "./components/TestEdit";
// import {dateformat} from "./components/utils/utils";

export interface DiaryProps {
}

export interface DiaryState {
    valueDate: Date;
    valueTextarea: string;
    listDiary: TypeDiary[];
    listDiaryUbdate: TypeDiary[];
    showing: boolean;
    isOpenModalTextEditor: boolean
}
export class Diary extends React.Component<DiaryProps, DiaryState>{

    state: DiaryState = {
        valueDate: new Date,
        valueTextarea: "",
        listDiary: [],
        listDiaryUbdate:[],
        showing: false,
        isOpenModalTextEditor: false,
    };

    componentDidMount(): void{
        //  ('form')! - добавлена проверка, так как localStorage.getItem() может возвращать строку или ноль.
        // JSON.parse () требует строку, поэтому нужно проверить результат localStorage.getItem ()
        // this.state.listDiary = JSON.parse(localStorage.getItem('form')!);
        this.setState({
            listDiary: JSON.parse(localStorage.getItem('form')!)
        })
        // this.state.valueDate = new Date().toLocaleString("ru", OPTIONS_DATA);
    }

    // Сохранение значений даты и текста в listDiary
    onClickSave= () =>{
        this.state.valueTextarea.length>0?
            this.saveList(this.state.valueTextarea, this.state.valueDate):
            alert(mesageSaveTestArea)
    };
    saveList = (text: string, date: Date) =>{
        // console.log("date и textArea", date + "   " + text);
        this.setState({
            listDiary: [
                ...this.state.listDiary,
                {
                    note: text,
                    date: date
                }
            ]}, () =>{
            localStorage.setItem('form', JSON.stringify(this.state.listDiary));
            // console.log("onClickSave_form", localStorage.getItem('form'))
        });
    };
    // Изменение стиля строки - "Выполнено"
    onClickReady =(row: TypeDiary) => {
        // console.log("onClickReady", row);
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
                // console.log("onClickReady_form", localStorage.getItem('form'))
            });
        })
    };
    onClickDeleleRow = (row: TypeDiary) => {

        this.setState({
            listDiary: this.state.listDiary.filter((el) => el!=row)
        },()=>{
            localStorage.setItem('form', JSON.stringify(this.state.listDiary));
            // console.log("onCheckChois_form", this.state.listDiary.toLocaleString());
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
    onChangeTextEdit = (valueTextEdit: Date|string) =>{
        console.log("valueTextEdit", valueTextEdit);
        typeof valueTextEdit == "string"?
        this.setState({
            valueTextarea: valueTextEdit,
        }):
            this.setState({
                valueDate: valueTextEdit,
            })
    };
    // onChangeTextArea = (text: string) => {
    //     // console.log("onChangeTextArea", text);
    //     this.setState({
    //         valueTextarea: text
    //     });
    // };
    // onChangeDate = (date: Date|null) => {
    //     // console.log("onChangeDate", date);
    //     this.setState({
    //         valueDate: date
    //     });
    // };
    // очистка поля ввода textarea и сброс даты на текущую
    onClickClear = () => {
        this.setState({
            valueTextarea: "",
            valueDate: new Date,
        })
    };
    // onClickEdit = (row: TypeDiary) => {
    //     this.setState({
    //         isOpenModalTextEditor: true,
    //         valueTextarea: row.note,
    //         valueDate: row.date
    //     });
    //     console.log("ROW", row);
    //
    // };
    // onOpenModalTextEditor = (open: boolean) => {
    //     if (open) {
    //         this.setState({
    //             isOpenModalTextEditor: false
    //         })
    //     } else{
    //         this.setState({
    //             isOpenModalTextEditor: true
    //         })
    //     }
    // };

    // onClickEdit = (row: TypeDiary) => {
    //     console.log("ROW", row)
    //
    //     // if (this.state.isOpenModalTextEditor) {
    //     //     this.setState({
    //     //         isOpenModalTextEditor: false
    //     //     })
    //     // } else{
    //     //     this.setState({
    //     //         isOpenModalTextEditor: true
    //     //     })
    //     // }
    // };

    render(){
        // let showBtnModalWindow: boolean = this.state.showBtnTextEdit;
            return <div>
                {/*<ModalEdit isOpenModalTextEditor={this.state.isOpenModalTextEditor}/>*/}
                <Title/>
                <TestEdit onChangeTextEdit={this.onChangeTextEdit}
                          // onChangeTextArea={this.onChangeTextArea}
                          valueDate={this.state.valueDate}
                          valueTextarea={this.state.valueTextarea}
                          // onChange={this.onChange}
                          // showBtnTextEdit={true}
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
                       // onClickEdit={this.onClickEdit}
                       // valueTextarea={this.state.valueTextarea}
                       // valueDate={this.state.valueDate}
                       // onCloseModalTextEditor={this.onCloseModalTextEditor}
                       // isOpenModalTextEditor={this.state.isOpenModalTextEditor}
                />
            </div>
    }
}
export default hot(Diary);