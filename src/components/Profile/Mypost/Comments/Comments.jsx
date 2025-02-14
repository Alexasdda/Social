import classes from "./Comments.module.css";

export const Comment = (props) => {
    return (

        <div className={classes.itemComment}>
            <div className={classes.avaComments}><img src={props.imgUrl}/></div>
            <div>
                <span>Like {props.likeCount}</span>
            </div>


        </div>

    )
}


