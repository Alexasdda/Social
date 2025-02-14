import React from 'react';
import classes from './../Dialogs.module.css'
import NavLink from "react-router-dom/NavLink.js";

const DialogItems = (props) => {
    let path = '/dialog/' + '' + props.id;
    return (
        <div className={classes.dialog}><NavLink to={path}> <img
            src={props.imgUrl}/> {props.name}
        </NavLink></div>
    )
}
export default DialogItems;