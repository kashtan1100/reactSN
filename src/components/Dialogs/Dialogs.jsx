import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom"
import AddMessageForm from "./AddMessageForm/AddMessageForm";


let Dialogs = (props) => {

    let state = props.dialogsPage;

    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
}



export default Dialogs;