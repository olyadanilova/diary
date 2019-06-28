import React from "react";
import {Button, Modal} from "react-bootstrap";
import ModalEdit from "./ModalEdit";
import { TypeDiary} from "./Constants";

export interface ModalEditProps {
    isOpenModalTextEditor: boolean;
    onCloseModalWindow: ()=> void;
    valueTextarea: string;
    valueDate: Date;
    listDiary: TypeDiary[]
    onChangeTextEditModal:(valueDateEdit: Date|string) => void;
    onClickSaveModal: ()=> void;
}
export interface ModalEditState {
    // listDiary: TypeDiary[]
    // valueTextareaModal: string;
    // valueDateModal: Date;
}

class ModalWindow extends React.Component<ModalEditProps, ModalEditState>{

    // state: ModalEditState = {
    //     // listDiary: []
    //     valueTextareaModal: "string",
    //     valueDateModal: new Date
    // };
    // componentDidMount(): void{
    //     this.setState({
    //         valueTextareaModal: this.props.valueTextarea,
    //         valueDateModal: this.props.valueDate
    //     })
    //
    // }
    // onChange = (val: string|Date) => {
    //     console.log("onChange", val);
    //     typeof val == "string"?
    //         this.setState({
    //             valueTextareaModal: val,
    //         }):
    //         this.setState({
    //             valueDateModal: val,
    //         })
    // };

    // onClickSave= () =>{
        // this.state.valueTextarea.length>0?
            // this.saveList(this.state.valueTextarea, this.state.valueDate):
            // alert(mesageSaveTestArea)
    // };
    // saveList = (text: string, date: Date) =>{
    //     // console.log("date и textArea", date + "   " + text);
    //     this.setState({
    //         listDiary: [
    //             ...this.state.listDiary,
    //             {
    //                 note: text,
    //                 date: date
    //             }
    //         ]}, () =>{
    //         localStorage.setItem('form', JSON.stringify(this.state.listDiary));
    //         // console.log("onClickSave_form", localStorage.getItem('form'))
    //     });
    // };

    render() {
        return <Modal show={this.props.isOpenModalTextEditor}>
            <Modal.Header closeButton={this.props.isOpenModalTextEditor}
                          onClick={this.props.onCloseModalWindow}
                          // onHide={this.props.onCloseModalWindow}
            >
                <Modal.Title >Редактирование</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ModalEdit valueTextareaModal={this.props.valueTextarea}
                           valueDateModal={this.props.valueDate}
                           onChange={this.props.onChangeTextEditModal}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-table"
                        title={"Принять изменения"}>
                    <img src={"img/check_v1.png"}
                         onClick={this.props.onClickSaveModal}/>
                </Button>
            </Modal.Footer>
        </Modal>
    }
}
export default ModalWindow;