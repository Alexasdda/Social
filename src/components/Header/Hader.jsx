import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.appHeader}>
            <img src="https://upload.wikimedia.org/wikipedia/ru/b/b4/Puma_logo.svg"
                 className="App-logo"
                 alt="gogo"/>
        </header>

    )
}
export default Header;