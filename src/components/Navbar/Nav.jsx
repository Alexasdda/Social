import classes from "./Navbar.module.css";
import NavLink from "react-router-dom/NavLink.js";
import {MyFriends} from "./MyFriends/MyFriends.jsx";


export const Nav = (props) => {
    return (
        <nav className={classes.appNav}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/profil">PROFIL</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/dialogs">Massages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/news">News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/music">Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/settings">Settings</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to="/fiends">Friends</NavLink>
            </div>
            <div className={classes.friedNavbar}>

                <MyFriends friends={props.sideFriends.friends}/>
            </div>

        </nav>
    )
}
