import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {TypeDiary} from "./Constants";
import {dateFormatter} from "./utils/utils";

export interface TableProps {
    listDiary: TypeDiary[];
    onClickDeleleRow: (index: number)=> void;
    onClickReady: (index: number, row: TypeDiary)=> void;
    onClickEdit: (index: number, row: TypeDiary)=> void;
    showing: boolean;
}

class TableRow extends React.Component<TableProps, any>{

    render() {
        let arrayList: TypeDiary[] = this.props.listDiary;
        // console.log("arrayList", arrayList);
        let tableDiary:any;
        // let arrayListNew: TypeDiary[];
        if (arrayList){
            // arrayListNew = arrayList.sort(function (a:TypeDiary,b: TypeDiary):number {
            //     let dateA:Date = new Date(a.date);
            //     let dateB:Date = new Date(b.date);
            //     return  +dateA-(+dateB);
            // });
        tableDiary = arrayList.map((el, index)=> {
            // console.log("el", el);
            let styleRowReady = "table-with-border " + el.rowReady;
            return <div key={index}>
                <Row className={styleRowReady} key={index} >
                    <Col md={8} xs={8} className="text-center"> {el.note} </Col>
                    <Col md={2} xs={2} className="text-center">
                        {(el.date)? dateFormatter(el.date):""}
                    </Col>
                    <Col className="text-center">
                        <Button className="btn-table" key={index} title={"Удалить"}
                                onClick={() => {
                                    this.props.onClickDeleleRow(index)
                                }}>
                            <img src={"img/delete.png"}/>
                        </Button>
                        <Button className="btn-table" title={"Выполнено"}
                                onClick={() => {
                                    this.props.onClickReady(index, el)
                                }}>
                            <img src={"img/check.png"}/>
                        </Button>
                        <Button className="btn-table" title={"Редактировать"}>
                            <img src={"img/edit.png"}
                                 onClick={() => {
                                this.props.onClickEdit(index, el)
                            }}/>
                        </Button>
                    </Col>
                </Row>
            </div>
        })}
        else null;
        return <div>{tableDiary}</div>
    }
}
export default TableRow;