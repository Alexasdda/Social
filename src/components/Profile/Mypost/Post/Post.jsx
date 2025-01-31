import classes from "./Post.module.css";

const Post = (props) => {
    return (

        <div className={classes.item}>
            <img
                src="https://steamuserimages-a.akamaihd.net/ugc/1684893251099717200/CCEE102CF0C9F1F9470A0F87ED9365C6D9E89895/"/>
            {props.massage}
            <div>
                <span>Like {props.like}</span>
            </div>


        </div>

    )
}
export default Post;


