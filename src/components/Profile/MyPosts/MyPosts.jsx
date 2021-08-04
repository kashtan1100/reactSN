import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {updateNewPostText} from "../../../redux/state";

let MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        //let text = newPostElement.current.value;
        //props.addPost(text);
        props.dispatch(updateNewPostText());
    }
    let newPostElement = React.createRef();

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //props.updateNewPostText(text);
        let action = updateNewPostText(text);
        props.dispatch(action);
    }

    return (
        <div>
            <div className={s.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea
                            onChange={onPostChange}
                            ref={newPostElement}
                            value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>
                            Add post
                        </button>
                    </div>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>);
}

export default MyPosts;