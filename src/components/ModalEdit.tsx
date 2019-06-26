import React from "react";
// import 'semantic-ui-css/semantic.min.css';
import InputText from "./InputText";
import InputDate from "./InputDate";
import {TypeDiary} from "./Constants";



export interface ModalEditProps {
    onChangeTextArea: (valueTextarea: string) => void;
    onDateChange: (dateDiary: string) => void;
}
export interface ModalEditState {
    listDiary: TypeDiary[];
}
// Удалить!!!
class ModalEdit extends React.Component<ModalEditProps, ModalEditState>{
    // state: ModalEditState = {
    //     text: "",
    // };
    state: ModalEditState ={
        listDiary: [],
    };


    render() {
        return <div>
            <InputDate onDateChange={this.props.onDateChange} />
            <InputText onChangeTextArea={this.props.onChangeTextArea}/>
            {/*<Button className="btn-purple" onClick={this.props.onClickSave} >Сохранить</Button>*/}
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