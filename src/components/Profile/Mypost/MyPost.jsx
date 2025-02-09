import Post from "./Post/Post";


const MyPost = (props) => {

    let PostElement = props.posts.posts.map(props => <Post massage={props.message} like={props.likeCount}/>);
    return (
        <div>
            {PostElement}

        </div>
    )
}
export default MyPost;


