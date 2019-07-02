import React from "react";
import {Button, Modal} from "react-bootstrap";
import ModalEdit from "./ModalEdit";
import { TypeDiary} from "./Constants";
import {OnChangeTextHandler} from "../Diary";

export interface ModalEditProps {
    isOpenModalTextEditor: boolean;
    onCloseModalWindow: ()=> void;
    valueTextarea: string;
    valueDate: Date;
    listDiary: TypeDiary[]
    onChangeTextEditModal:OnChangeTextHandler;
    onClickSaveModal: ()=> void;
}

class ModalWindow extends React.Component<ModalEditProps>{

    render() {
        return <Modal onHide={this.props.onCloseModalWindow} show={this.props.isOpenModalTextEditor}>
            <Modal.Header closeButton={this.props.isOpenModalTextEditor}
                          onClick={this.props.onCloseModalWindow}
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