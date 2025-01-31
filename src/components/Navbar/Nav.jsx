import classes from "./Navbar.module.css";
import NavLink from "react-router-dom/NavLink.js";


const Nav = () => {
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
        </nav>
    )
}
export default Nav;