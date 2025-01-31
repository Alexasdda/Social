import React from 'react';
import classes from './Dialogs.module.css'
import NavLink from "react-router-dom/NavLink.js";

const DialogItems = (props) => {
    let path = '/dialog/' + '' + props.id;
    return (
        <div className={classes.dildo}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
const Massages = (props) => {
    return (
        <div className={classes.message}>{props.masseg}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItem}>
                <div className={classes.dialog}>
                    <DialogItems name='Ala' id='1'/>
                    <DialogItems name='Lexa' id='2'/>
                    <DialogItems name='Alkash' id='3'/>
                    <DialogItems name='Olo' id='4'/>
                    <DialogItems name='Ara' id='5'/>
                </div>
            </div>
            <div className={classes.messages}>
                <Massages masseg='kik'/>
                <Massages masseg='Hi'/>
                <Massages masseg='Lol'/>
                <Massages masseg='kik'/>
                <Massages masseg='Domas'/>
            </div>

        </div>
    )
}

export default Dialogs;