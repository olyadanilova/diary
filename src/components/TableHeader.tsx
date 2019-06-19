import React from "react";
import {Col, Row} from "react-bootstrap";
import {tableHeader} from "./Constants";

class TableHeader extends React.Component<any>{

    render() {
        return <div>
            <Row className={"table-header"}>
                {tableHeader.map((el, index)=>
                    <Col className={el.mdCol} key={index} >{el.name}</Col>
                )}
            </Row>
        </div>
    }
}
export default TableHeader;