import React from "react";
import TableHeader from "./TableHeader";
import {TypeDiary} from "./Constants";
import TableRow from "./TableRow";
import ModalWindow from "./ModalWindow";
import {OnChangeTextHandler} from "../Diary";

export interface TableTextProps {
    listDiary: TypeDiary[];
    onClickDeleleRow: (row: TypeDiary)=> void;
    onClickReady: (row: TypeDiary)=> void;
    showing: boolean;
    onChangeTextEdit: OnChangeTextHandler;
}
export interface TableTextState{
    isOpenModalTextEditor: boolean;
    valueTextarea: string;
    valueDate: Date;
    indexRowEdit: number;
    rowReady: string
}

class Table extends React.Component<TableTextProps, TableTextState>{
    state: TableTextState = {
        isOpenModalTextEditor: false,
        valueTextarea: "",
        valueDate: new Date,
        indexRowEdit: 0,
        rowReady: ""
    };

    onCloseModalWindow=()=>{
        this.setState({
            isOpenModalTextEditor: false
        })
    };

    onClickEdit = (row: TypeDiary) => {
        let indexRow: number = this.props.listDiary.indexOf(row);
        let rowReadyCur: string = row.rowReady?row.rowReady:"";
        console.log("rowReadyCur", rowReadyCur);
        this.setState({
            isOpenModalTextEditor: true,
            valueTextarea: row.note,
            valueDate: row.date,
            indexRowEdit: indexRow,
            rowReady: rowReadyCur
        }, ()=> console.log("ROW", row, this.state.indexRowEdit));

    };
    onChangeTextEditModal:OnChangeTextHandler = (rowName) => value => {
        // console.log("onChangeTextEditModal", val);
        this.setState({
            [rowName]: value
            } as any
        );

    };
    onUbdateListDiary = (listDiary: TypeDiary[], rowNew: TypeDiary) => {
        listDiary.splice(this.state.indexRowEdit, 1, rowNew);
        localStorage.setItem('form', JSON.stringify(listDiary));
    };
    onClickSaveModal = () => {
        let textNew: string = this.state.valueTextarea;
        let dateNew: Date = this.state.valueDate;
        let rowReadyNew: string = this.state.rowReady;
        let rowNew: TypeDiary = {note: textNew, date: dateNew, rowReady:rowReadyNew};
        let rowCur: TypeDiary = this.props.listDiary[this.state.indexRowEdit];
        if (rowCur.note==textNew && rowCur.date==dateNew){
            this.onCloseModalWindow()
        }
        this.onUbdateListDiary(this.props.listDiary, rowNew);
        // console.log("NewList - обновленный listDiary", this.props.listDiary);
        this.onCloseModalWindow()
    };

    render() {
        return <div style={{ display: (this.props.showing ? 'block' : 'none') }}>
            <ModalWindow isOpenModalTextEditor={this.state.isOpenModalTextEditor}
                         onCloseModalWindow={this.onCloseModalWindow}
                         valueTextarea={this.state.valueTextarea}
                         valueDate={this.state.valueDate}
                         listDiary={this.props.listDiary}
                         onChangeTextEditModal={this.onChangeTextEditModal}
                         onClickSaveModal={this.onClickSaveModal}
            />
            <TableHeader/>
            <TableRow onClickReady={this.props.onClickReady}
                      onClickDeleleRow={this.props.onClickDeleleRow}
                      onClickEdit={this.onClickEdit}
                      showing={this.props.showing}
                      listDiary={this.props.listDiary}/>
        </div>
    }
}
export default Table;