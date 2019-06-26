import * as React from "react";
import InputText from "./InputText";
import InputDate from "./InputDate";
import {TypeDiary} from "./Constants";
import {Button} from "react-bootstrap";

export interface TextEditorProps {
    onChangeTextArea: (valueTextarea: string) => void;
    onDateChange: (dateDiary: string) => void;
    onClickSave: (event: React.ChangeEvent<any>) => void;
}

export interface TextEditorState {
    listDiary: TypeDiary[];
}
//Удалить!!!
class TextEditor extends React.Component<TextEditorProps, TextEditorState>{

    state: TextEditorState ={
        listDiary: [],
    };

    render() {
        // let dateNow = new Date();
        // let year = dateNow.getFullYear();
        // let month = dateNow.getMonth()+1;
        // let day = dateNow.getDate();
        // let wer = dateformat(this.state.valueDate);
        // console.log("wer", wer);
        return <div>
            <InputDate onDateChange={this.props.onDateChange} />
            <InputText onChangeTextArea={this.props.onChangeTextArea}/>
            <Button className="btn-form" onClick={this.props.onClickSave} >Сохранить</Button>
        </div>
    }
}
export default TextEditor;