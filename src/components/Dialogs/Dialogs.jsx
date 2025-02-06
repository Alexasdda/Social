import React from 'react';
import classes from './Dialogs.module.css'
import Messages from "./Messages/Message.jsx";
import DialogItem from "./DialogItems/DialogItem.jsx";

const Dialogs = (props) => {
    let dialogsData = [
        {id: 0, name: 'Nikita'},
        {id: 1, name: 'Macks'},
        {id: 2, name: 'Macksat'},
        {id: 3, name: 'Alecksei'},
        {id: 4, name: 'Valera'}
    ];

    let messagesData = [
        {id: 0, message: 'Kik'},
        {id: 1, message: 'AAA'},
        {id: 2, message: 'asda'},
        {id: 3, message: 'gfgs'},
        {id: 4, message: 'gsgsg'},
    ];

    let messagesElement = messagesData.map(message => <Messages message={message.message}/>);
    let dialogsElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;