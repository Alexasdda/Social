import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem.jsx";
import Message from "./Messages/Message.jsx";

export const Dialogs = (props) => {

    let messagesElement = props.messages.messages.map(p => <Message message={p.message}/>);
    let dialogsElement = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogi}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

