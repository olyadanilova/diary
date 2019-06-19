import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {TypeDiary} from "./Constants";

export interface TableProps {
    listDiary: TypeDiary[];
    onClickDeleleRow: (row: TypeDiary)=> void;
    onClickReady: (row: TypeDiary)=> void;
    showing: boolean;
}

class TableRow extends React.Component<TableProps, any>{

    render() {
        let arrayList = this.props.listDiary;
        // console.log("arrayList", arrayList);
        let tableDiary = arrayList.map((el, index)=> {
            let styleRowReady = "table-with-border " + el.rowReady;
            return <div key={index}>
                <Row className={styleRowReady} key={index} >
                    <Col md={8} xs={8} className="text-center"> {el.note} </Col>
                    <Col md={2} xs={2} className="text-center">
                        {el.date}
                    </Col>
                    <Col className="text-center">
                        <Button className="btn-table" key={index} title={"Удалить"}
                                onClick={() => {
                                    this.props.onClickDeleleRow(el)
                                }}>
                            <img src={"img/delete.png"}/>
                        </Button>
                        <Button className="btn-table" title={"Выполнено"}
                                onClick={() => {
                                    this.props.onClickReady(el)
                                }}>
                            <img src={"img/check.png"}/>
                        </Button>
                        <Button className="btn-table" title={"Редактировать"}>
                            <img src={"img/edit.png"}/>
                        </Button>
                    </Col>
                </Row>
            </div>
        });
        return <div>{tableDiary}</div>
    }
}
export default TableRow;