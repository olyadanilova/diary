import React from "react";
import {InputGroup} from "react-bootstrap";
import DatePicker from "react-datepicker"

export interface TestEditProps {
    // onChangeTextArea: (valueTextarea: string) => void;
    // onChangeDate: (dateDiary: Date|null) => void;
    valueTextarea: string;
    valueDate: Date;
    onChangeTextEdit:(valueDateEdit: Date|string) => void;
}

class TestEdit extends React.Component<TestEditProps>{
    // изменение значения заметки и сохранение его в свойство верхнего компонена valueTextarea
    onChangeTextAreaEdit = (event:React.ChangeEvent<any>) => {
        // console.log("event.target/text", event.target.value);
        this.props.onChangeTextEdit(event.target.value);
    };
    // изменение знаяения поля даты и сохранение его в свойство верхнего компонена valueDate
    onChangeDateEdit = (date: Date) => {
        // console.log("event.target/date", date);
        this.props.onChangeTextEdit(date);
    };
    // onClickSave = () => {
    //     this.props.onChangeTextArea(this.state.valueTextarea);
    //     this.props.onChangeDate(this.state.valueDateEdit);
    // };


    render() {
        // let showBtnModalWindow: boolean = this.props.showBtnTextEdit;
        return <div>
            <InputGroup size="sm" >
                <InputGroup.Prepend>
                    <InputGroup.Text  id="inputGroup-sizing-sm">Заметка
                        <p >*</p>
                        </InputGroup.Text>
                </InputGroup.Prepend>
                <textarea placeholder={"Введите текст..."}
                          value={this.props.valueTextarea}
                          onChange={this.onChangeTextAreaEdit} />
            </InputGroup>
            <br />
            <InputGroup size="sm" >
                <InputGroup.Prepend >
                    <InputGroup.Text id="inputGroup-sizing-default">Дата</InputGroup.Text>
                </InputGroup.Prepend>
                <DatePicker
                    dateFormat={"dd.MM.yyyy"}
                    selected={this.props.valueDate}
                    onChange={this.onChangeDateEdit}
                />
            </InputGroup>
            {/*{ (showBtnModalWindow)?*/}
            {/*    <div>*/}
            {/*        <Button className="btn-form" onClick={this.onClickClear} >Очистить</Button>*/}
            {/*        <Button className="btn-form" onClick={this.onClickSave} >Сохранить</Button>*/}
            {/*    </div> :*/}
            {/*    <Button className="btn-form" onClick={this.onClickClear} >Очистить</Button>*/}
            {/*}*/}
            <br />
        </div>
    }
}
export default TestEdit;

