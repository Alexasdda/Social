import Post from "./Post/Post";


const MyProfil = () => {
    const PostData = [
        {id: 0, message: 'Hi how', likeCount: 11},
        {id: 1, message: 'Yes', likeCount: 12},
        {id: 2, message: 'Hi', likeCount: 13}
    ]
    let PostElement = PostData.map(props => <Post massage={props.message} like={props.likeCount}/>);
    return (
        <div>
            {PostElement}

        </div>
    )
}
export default MyProfil;


