import React from "react";
import TableHeader from "./TableHeader";
import {TypeDiary} from "./Constants";
import TableRow from "./TableRow";
import ModalWindow from "./ModalWindow";

export interface TableTextProps {
    listDiary: TypeDiary[];
    onClickDeleleRow: (row: TypeDiary)=> void;
    onClickReady: (row: TypeDiary)=> void;
    // onClickEdit: (row: TypeDiary)=> void;
    // onCloseModalWindow: ()=> void;
    showing: boolean;
    // valueTextarea: string;
    // valueDate: Date;
    onChangeTextEdit:(valueDateEdit: Date|string) => void;
    // isOpenModalTextEditor: boolean;
}
export interface TableTextState{
    // rowReady: string;
    isOpenModalTextEditor: boolean;
    valueTextarea: string;
    valueDate: Date;
}

class Table extends React.Component<TableTextProps>{
    state: TableTextState = {
        // rowReady: ""
        isOpenModalTextEditor: false,
        valueTextarea: "",
        valueDate: new Date
    };

    onCloseModalWindow=()=>{
        console.log("onCloseModalWindow", this.state.isOpenModalTextEditor)
        this.setState({
            isOpenModalTextEditor: false
        })
    };
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
    onClickEdit = (row: TypeDiary) => {
        this.setState({
            isOpenModalTextEditor: true,
            valueTextarea: row.note,
            valueDate: row.date
        });
        console.log("ROW", row);

    };
    onChangeTextEditModal = (val: string|Date) => {
        console.log("onChangeTextEditModal", val);
        typeof val == "string"?
            this.setState({
                valueTextarea: val,
            }):
            this.setState({
                valueDate: val,
            })
    };
    onClickSaveModal = () => {
        console.log("listDiary", this.props.listDiary);
        let listDiary: TypeDiary[] = this.props.listDiary;
        let text: string = this.state.valueTextarea;
        let date: Date = this.state.valueDate;
        listDiary.forEach((element)=>{
            if (element.note==text && element.date==date)
                {console.log("element", element)}
            }
        );
    }
    //     console.log("listDiary/", this.props.listDiary),
    // console.log("valueDate", this.state.valueDate),
    // console.log("valueTextarea", this.state.valueTextarea)
        // this.props.valueTextarea.length>0?
        //     this.saveList(this.props.valueTextarea, this.props.valueDate):
        //     alert(mesageSaveTestArea)
        // this.state.valueTextarea.length>0?
        // this.saveList(this.state.valueTextarea, this.state.valueDate):
        // alert(mesageSaveTestArea)
        // this.setState({
        //     listDiaryUbdate: this.state.listDiary.filter((el) => el!=row ),
        // }, () =>{
        //     this.setState({
        //         listDiary:[
        //             ...this.state.listDiaryUbdate,
        //             {
        //                 note: row.note,
        //                 rowReady: rowReadyCurrent,
        //                 date: row.date
        //             }
        //         ]}, () =>{
        //         localStorage.setItem('form', JSON.stringify(this.state.listDiary));
        //         // console.log("onClickReady_form", localStorage.getItem('form'))
        //     });
        // })
    ;

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