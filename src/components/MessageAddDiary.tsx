import * as React from "react";

export interface MessageAddDiaryProps {
    showingMessage: boolean;
    onClickCloseMessage:()=>void;
}

class MessageAddDiary extends React.Component<MessageAddDiaryProps, any> {

    onClickCloseMessage=()=> {
        this.props.onClickCloseMessage();
    };

    render(){
        return <div style={{ display: (this.props.showingMessage ? 'block' : 'none') }}
                    className="alert alert-danger alert-dismissible fade show" role="alert">
            <h4 className="alert-heading">Не введено поле "Заметка"</h4>
            {/*<p>Это основное уведомление — check it out!</p>*/}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.onClickCloseMessage}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    }
}

export default MessageAddDiary;