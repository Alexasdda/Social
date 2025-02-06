import React from 'react';
import classes from './../Dialogs.module.css'

const Messages = (props) => {
    let path = '/dialog/' + '' + props.id;
    return (
        <div className={classes.dialog}> {props.message} </div>
    )
}
export default Messages;