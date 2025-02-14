import {ProfileInfo} from './ProfilInfo/ProfileInfo.jsx';
import {MyPost} from "./Mypost/MyPost.jsx";

export const Profile = (props) => {
    const {posts, comment} = props.posts;

    return (
        <div>
            {/* Информация о профиле */}
            <ProfileInfo
                avatarUrl={posts.imgUrl}
                name={posts.name}
                status="STATUS:"
                description="Мои пиадатые друзья считают меня гадом"
            />

            {/* Посты и комментарии */}
            <MyPost posts={posts} comment={comment}/>
        </div>
    );
};