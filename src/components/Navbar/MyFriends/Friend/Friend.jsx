import classes from "./Friend.module.css";

export const Friend = (props) => {
        return (
            <div className={classes.friendItem}>
                <img className={classes.friendAvatar} src={props.avatarUrl}/>
                <p className={classes.friendName}>{props.name}</p>
            </div>
        )
    }

;