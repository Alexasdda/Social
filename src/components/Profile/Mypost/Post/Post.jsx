import classes from "./Post.module.css";

export const Post = (props) => {

    return (

        <div className={classes.item}>
            <div></div>
            {props.message}
            <div className={classes.myAvatar}><img src={props.myAvatar}/></div>
            {props.name}


            <div className={classes.postImg}><img src={props.postImageUrl}/></div>

            <div>
                <span>Like {props.likes}</span>
            </div>


        </div>

    )
}



