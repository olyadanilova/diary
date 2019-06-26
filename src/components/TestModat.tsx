import React from "react";
import {FormControl, InputGroup} from "react-bootstrap";
import {TypeDiary} from "./Constants";

export interface ModalEditProps {
    onChangeTextArea: (valueTextarea: string) => void;
    onDateChange: (dateDiary: string) => void;
}
export interface ModalEditState {
    listDiary: TypeDiary[];
}
//Удалить!!!
class ModalEdit extends React.Component<ModalEditProps, ModalEditState>{
    // state: ModalEditState = {
    //     text: "",
    // };

    render() {
        return <div>
            <InputGroup size="sm" >
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Заметка</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <br />
            <InputGroup size="sm" >
                <InputGroup.Prepend >
                    <InputGroup.Text id="inputGroup-sizing-default">Дата</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                />
            </InputGroup>
            <br />
            {/*<InputGroup size="sm" >*/}
            {/*    <InputGroup.Prepend>*/}
            {/*        <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>*/}
            {/*    </InputGroup.Prepend>*/}
            {/*    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />*/}
            {/*</InputGroup>*/}
        </div>
    }
}
export default ModalEdit;

