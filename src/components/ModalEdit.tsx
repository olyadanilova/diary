import React from "react";
import {InputGroup} from "react-bootstrap";
import DatePicker from "react-datepicker"
import {OnChangeTextHandler} from "../Diary";
// import {OPTIONS_DATA} from "./Constants";

export interface ModalEditProps {
    valueTextareaModal: string;
    valueDateModal: Date;
    onChange:OnChangeTextHandler;
}
class ModalEdit extends React.Component<ModalEditProps>{

    // изменение значения заметки и сохранение его в свойство верхнего компонена valueTextarea
    onChangeText = (event:React.ChangeEvent<any>) => {
        console.log("event.target/text", event.target.value);
        this.props.onChange("valueTextarea")(event.target.value);
    };
    // изменение знаяения поля даты и сохранение его в свойство верхнего компонена valueDate
    onChangeDate = (date: Date) => {
        console.log("event.target/date", date);
        this.props.onChange("valueDate")(date);
    };

    render() {
        return <div>
            <InputGroup size="sm" >
                <InputGroup.Prepend>
                    <InputGroup.Text  id="inputGroup-sizing-sm">Заметка
                        <p >*</p>
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <textarea placeholder={"Введите текст..."}
                          value={this.props.valueTextareaModal}
                          onChange={this.onChangeText}
                />
            </InputGroup>
            <br />
            <InputGroup size="sm" >
                <InputGroup.Prepend >
                    <InputGroup.Text id="inputGroup-sizing-default">Дата</InputGroup.Text>
                </InputGroup.Prepend>
                <DatePicker
                    dateFormat={"dd.MM.yyyy"}
                    selected={this.props.valueDateModal}
                    onChange={this.onChangeDate}
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
export default ModalEdit;