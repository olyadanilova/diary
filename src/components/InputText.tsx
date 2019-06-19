import React from "react";
import {Button, Row} from "react-bootstrap";

export interface InputTextProps {
    onChangeTextArea: (valueTextarea: string) => void;
}

export interface InputTextState {
    valueTextarea: string;
}

class InputText extends React.Component<InputTextProps, InputTextState>{

    state: InputTextState = {
        valueTextarea: "",
    };

    // очистка поля ввода textarea
    onClickClear = (event:React.ChangeEvent<any>) => {
        this.setState({
            valueTextarea: ""
        }, () => this.props.onChangeTextArea(this.state.valueTextarea));
    };

    onChangeTextArea =(event:React.ChangeEvent<any>)=>{
        this.setState({
            valueTextarea: event.target.value
        }, () => this.props.onChangeTextArea(this.state.valueTextarea));
        console.log("onChangeTextArea", this.state.valueTextarea)
    };

    render() {
        return <div>
            <Row >
                <textarea placeholder={"Введите текст..."} value={this.state.valueTextarea} onChange={this.onChangeTextArea} />
            </Row>
            <Row>
                <Button className="btn-purple btn-left" onClick={this.onClickClear} >Очистить</Button>
            </Row>
        </div>
    }
}
export default InputText;