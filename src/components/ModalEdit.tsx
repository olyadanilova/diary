import React from "react";
import {InputGroup} from "react-bootstrap";
import DatePicker from "react-datepicker"

export interface ModalEditProps {
    // onChangeTextEdit:(valueDateEdit: Date|string) => void;
    // onChangeTextArea: (valueTextarea: string) => void;
    // onChangeDate: (dateDiary: Date|null) => void;
    valueTextareaModal: string;
    valueDateModal: Date;
    onChange:(valueDateEdit: Date|string) => void;
}
export interface ModalEditState {
    // valueTextareaEdit: string;
    // valueDateEdit: Date;
}

class ModalEdit extends React.Component<ModalEditProps, ModalEditState>{
    state:ModalEditState={
        // valueTextareaEdit: "",
        // valueDateEdit: new Date
    };
    componentDidMount(): void{
        // this.setState({
        //     valueTextareaEdit: this.props.valueTextarea,
        //     valueDateEdit: this.props.valueDate
        // })

    }
    // изменение значения заметки и сохранение его в свойство верхнего компонена valueTextarea
    onChangeText = (event:React.ChangeEvent<any>) => {
        // console.log("event.target/text", event.target.value);
        // this.props.onChangeTextEdit(event.target.value);
        this.props.onChange(event.target.value);
        // this.setState({
        //     valueTextareaEdit: event.target.value,
        // })
    };
    // изменение знаяения поля даты и сохранение его в свойство верхнего компонена valueDate
    onChangeDate = (date: Date) => {
        // console.log("event.target/date", date);
        this.props.onChange(date);
        // this.setState({
        //     valueDateEdit: date,
        // })
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
                          value={this.props.valueTextareaModal}
                          onChange={this.onChangeText}
                //
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