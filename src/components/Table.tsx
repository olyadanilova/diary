import React from "react";
import TableHeader from "./TableHeader";
import {TypeDiary} from "./Constants";
import TableRow from "./TableRow";
// import ModalWindow from "./ModalWindow";

export interface TableTextProps {
    listDiary: TypeDiary[];
    onClickDeleleRow: (row: TypeDiary)=> void;
    onClickReady: (row: TypeDiary)=> void;
    // onClickEdit: (row: TypeDiary) => void;
    showing: boolean;
    valueTextarea: string;
    valueDate: Date|null;
    // onChangeTextArea: (valueTextarea: string) => void;
    // onChangeDate: (dateDiary: string) => void;
    // onClickSave: (event: React.ChangeEvent<any>) => void;
}
export interface TableTextState{
    // rowReady: string;
    isOpen: boolean;
}

class Table extends React.Component<TableTextProps, TableTextState>{
    state: TableTextState = {
        // rowReady: ""
        isOpen: false,
    };

    onClickEdit = (row: TypeDiary) => {
        if (this.state.isOpen) {
            this.setState({
                isOpen: false
            })
        } else{
            this.setState({
                isOpen: true
            })
        }
    };
    onClose=()=>{
        this.setState({
            isOpen: false
        })
    };
    render() {
        return <div style={{ display: (this.props.showing ? 'block' : 'none') }}>
            {/*<ModalWindow isOpen={this.state.isOpen}*/}
            {/*             onClose={this.onClose}*/}
            {/*             valueTextarea={this.props.valueTextarea}*/}
            {/*             valueDate={this.props.valueDate}*/}
            {/*             // onChangeDate={this.props. }*/}
            {/*             // onChangeTextArea={this.props.onChangeTextArea}*/}
            {/*             // onClickSave={this.props.onClickSave}*/}
            {/*/>*/}
            <TableHeader/>
            <TableRow onClickReady={this.props.onClickReady}
                      onClickDeleleRow={this.props.onClickDeleleRow}
                      onClickEdit={this.onClickEdit}
                      showing={this.props.showing}
                      listDiary={this.props.listDiary}/>
        </div>
    }
}
export default Table;