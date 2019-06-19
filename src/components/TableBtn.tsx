import React from "react";
import {Button, Row} from "react-bootstrap";

class TableBtn extends React.Component<any>{

    render() {
        return <div>
            <Row>
                <Button className="btn-purple btn-left" >Удалить</Button>
                <Button className="btn-purple" >Выполнено</Button>
                <Button className="btn-purple btn-right" >Редактировать</Button>
            </Row>
        </div>
    }
}
export default TableBtn;