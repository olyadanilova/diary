import React from "react";
import {Button, Row} from "react-bootstrap";

class TableBtn extends React.Component<any>{

    render() {
        return <div>
            <Row>
                <Button className="btn-form btn-left" >Удалить</Button>
                <Button className="btn-form" >Выполнено</Button>
                <Button className="btn-form btn-right" >Редактировать</Button>
            </Row>
        </div>
    }
}
export default TableBtn;