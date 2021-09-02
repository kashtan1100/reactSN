import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom"


let Dialogs = (props) => {

    let state = props.dialogsPage;

    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }
    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea placeholder={'Enter your message'}
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;