import React from "react";
import TableHeader from "./TableHeader";
import {TypeDiary} from "./Constants";
import TableRow from "./TableRow";

export interface TableTextProps {
    listDiary: TypeDiary[];
    onClickDeleleRow: (row: TypeDiary)=> void;
    onClickReady: (row: TypeDiary)=> void;
    showing: boolean;
}
export interface TableTextState{
    // rowReady: string;
}

class Table extends React.Component<TableTextProps, TableTextState>{
    state: TableTextState = {
        rowReady: ""
    };

    render() {
        return <div style={{ display: (this.props.showing ? 'block' : 'none') }}>
            <TableHeader/>
            <TableRow onClickReady={this.props.onClickReady}
            onClickDeleleRow={this.props.onClickDeleleRow}
            showing={this.props.showing}
            listDiary={this.props.listDiary}/>
        </div>
    }
}
export default Table;