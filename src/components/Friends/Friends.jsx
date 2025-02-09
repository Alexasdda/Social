import classes from "./Friends.module.css";
import NavLink from "react-router-dom/NavLink.js";

export const Friends = (props) => {

    return (
        <div className={classes.friendsList}>
            <div className={classes.friend}>

            </div>
            <div className={classes.friend}>
                <NavLink></NavLink>
            </div>
            <div className={classes.friend}>
                <NavLink></NavLink>

            </div>
        </div>
    )
}
