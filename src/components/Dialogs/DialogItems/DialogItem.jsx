import React from 'react';
import classes from './../Dialogs.module.css'
import NavLink from "react-router-dom/NavLink.js";

const DialogItems = (props) => {
    let path = '/dialog/' + '' + props.id;
    return (
        <div className={classes.dialog}><NavLink to={path}> <img
            src="https://zefirka.club/uploads/posts/2022-10/thumbs/1666674249_56-zefirka-club-p-rik-sanches-avatarka-74.png"/> {props.name}
        </NavLink></div>
    )
}
export default DialogItems;