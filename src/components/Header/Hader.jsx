import classes from "./Header.module.css";

export const Header = () => {
    return (
        <header className={classes.appHeader}>
            <img
                src="https://images.squarespace-cdn.com/content/v1/627cb6fa4355783e5e375440/b47ec50e-bc8b-4801-87cb-dee12da27748/default-light.png?format=1500w"
                className="Applogo"
                alt="gogo"/>
        </header>

    )
}
