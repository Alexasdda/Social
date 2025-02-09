import classes from "./Header.module.css";

export const Header = () => {
    return (
        <header className={classes.appHeader}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Rust_vector_logo.svg/1280px-Rust_vector_logo.svg.png"
                className="Applogo"
                alt="gogo"/>
        </header>

    )
}
