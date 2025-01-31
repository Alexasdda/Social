import './ProfileInfo.module.css'
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.fonFotos}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ-MpBBiZlrzhCyX5Q5BF-6IphUptEJdeJ9Q&s"/>
            </div>
            <div className="app-avatar"><img
                src="https://pm1.aminoapps.com/7167/9cf283ea5488712e00e8322b9fc9866ad3da98fcr1-895-895v2_uhq.jpg"/>
            </div>

        </div>
    )
}
export default ProfileInfo;