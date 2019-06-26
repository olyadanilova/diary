import React from "react";
import {Row} from "react-bootstrap";
import {OPTIONS_DATA} from "./Constants";

export interface InputDateProps {
    onDateChange: (dateDiary: string) => void;
}

export interface InputDateState {
    dateDiary: string;
}

class InputDate extends React.Component<InputDateProps, InputDateState>{

    state:InputDateState = {
        dateDiary: new Date().toLocaleString('en-US',  OPTIONS_DATA),
    };

    // componentDidMount(): void {
    //     this.state.valueDate = new Date().toLocaleString('en-US',  OPTIONS_DATA)
    // }

    // изменение знаяения поля ввода даты
    onDateChange =(event:React.ChangeEvent<any>) => {
        console.log("onDateChange в InputDate", event.target.value.toLocaleString('en-US',  OPTIONS_DATA));

        this.setState({
            dateDiary: event.target.value
        }, () => this.props.onDateChange(this.state.dateDiary));
    };

    render() {
        // let dateNow = new Date();
        // let year = dateNow.getFullYear();
        // let month = dateNow.getMonth()+1;
        // let day = dateNow.getDate();
        // let wer = year+ "-" + month + "-" + day;
        console.log("wer", this.state.dateDiary);
        return <Row>
            {/*<input type={"date"} className="dataSelect date"/>*/}
            <label className="labelDate">Введите дату:</label>
            <input type="date" className="form-control dataSelect"
                   onChange={this.onDateChange} value={this.state.dateDiary} />
        </Row>
    }
}

export default InputDate;