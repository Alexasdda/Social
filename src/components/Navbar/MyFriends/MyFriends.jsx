import classes from './MyFriends.module.css';
import {Friend} from "./Friend/Friend.jsx";


export const MyFriends = (props) => {
    
    let friendsElement = props.friends.map(f => <Friend name={f.name}
                                                        avatarUrl={f.imgUrl}/>);

    return (
        <div className={classes.friedNavbar}>
            {friendsElement}
        </div>
    )
}