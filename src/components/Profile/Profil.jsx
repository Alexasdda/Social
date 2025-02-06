import './Profile.module.css'
import MyPost from "./Mypost/MyPost";
import ProfileInfo from "./ProfilInfo/ProfileInfo.jsx";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost/>
        </div>
    )
}
export default Profile;