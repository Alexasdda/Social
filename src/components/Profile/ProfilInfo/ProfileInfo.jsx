import './ProfileInfo.module.css'
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classes.profile}>
            <img className={classes.avatarka}
                 src='https://c.wallhere.com/photos/9a/9c/selective_coloring_black_background_dark_background_simple_background_anime_girls-2219470.jpg!d'/>
            <h1 className={classes.title}>ALEX DEMIN</h1>
            <h2 className={classes.titleStatus}>STATUS:</h2>
            <p className={classes.description}>Мои пиадатые друзья считают меня гадом</p>
            <div className={classes.buttons}>
                <button className={classes.button}>Message</button>
                <button className={classes.button}>Подробнее</button>
            </div>
            <div className={classes.separator}></div>
            <button className={classes.editButton}>Редактировать профиль</button>
        </div>
    );
};
export default ProfileInfo;