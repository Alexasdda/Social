import './Profile.module.css'
import MyPost from "./Mypost/MyPost";
import ProfileInfo from "./ProfilInfo/ProfileInfo.jsx";

export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost posts={props.posts}/>
        </div>
    )
}
