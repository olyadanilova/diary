import React from "react";


export interface TableProps {
    // listDiary: TypeDiary[];
    // onClickDeleleRow: (row: TypeDiary)=> void;

}
export interface TableTextState{
    modalOpen: false;
}

class ModalEdit extends React.Component<any, TableTextState>{
    // state: TableTextState = {
    //     rowReady: ""
    // };

    render() {
        return
        <div className={"modalClass"}>
            <div className={"modal-header"}>
                заголовок окна
            </div>
        </div>
    }
}
export default ModalEdit;