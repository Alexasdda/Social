import {Comment} from "./Comments/Comments.jsx";
import {Post} from "./Post/Post.jsx";
import React from "react";

export const MyPost = (props) => {

    let PostElement = props.posts.map(props => <Post name={props.name} postMassege={props.postMassege}
                                                     myAvatar={props.avatarUrl} postImageUrl={props.postImageUrl}
                                                     likes={props.likes} message={props.message}/>);


    let PostComments = props.comment.map(props => <Comment
        id={props.id}
        name={props.name}
        message={props.message}
        imgUrl={props.imgUrl}
        likeCount={props.likeCount}
    />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div>

            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>####</button>
            </div>

            {PostElement}


            {PostComments}

        </div>
    )
}


