import React from "react";
import {Button, Modal} from "react-bootstrap";
// import TestEdit from "./TestEdit";

export interface ModalEditProps {
    isOpen: boolean;
    onClose: ()=> void;
    // onChangeTextArea: (valueTextarea: string) => void;
    // onChangeDate: (dateDiary: Date|null) => void;
    valueTextarea: string;
    valueDate: Date|null;
    // onClickSave: (event: React.ChangeEvent<any>) => void;
    // showBtnTextEdit: boolean;
    // valueTextarea: string;
    // valueDate: Date|null;
    // onChange:(valueDateEdit: Date|null, valueTextarea: string) => void;
    // onChangeTextArea: (valueTextarea: string) => void;
    // onChangeDate: (dateDiary: string) => void;
    // onClickSave: (event: React.ChangeEvent<any>) => void;
}

class ModalWindow extends React.Component<ModalEditProps>{

    render() {
        return <Modal show={this.props.isOpen}>
            <Modal.Header closeButton={this.props.isOpen} onClick={() => {this.props.onClose()}}>
                <Modal.Title >Редактирование</Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-table"
                        title={"Принять изменения"}
                        >
                    <img src={"img/check_v1.png"}
                         />
                </Button>
            </Modal.Footer>
        </Modal>
    }
}
export default ModalWindow;