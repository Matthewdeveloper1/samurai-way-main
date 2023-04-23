import React, { useRef } from "react";
import OnePost from "./Post/OnePost";
import p from './MyPosts.module.css'
import Posts from "./Post/OnePost";


const MyPosts = (props: any) => {

  // const posts = [
  //   {id: 1, message: 'Hi, how are you?', likesCount: 21},
  //   {id: 2, message: 'Sup, fine ', likesCount: 12},
  //   {id: 3, message: 'cool ', likesCount: 13},
  //   {id: 4, message: 'yeah ', likesCount: 1}
  // ]

  let postsElements = props.posts.map((p: { message: string; likesCount: number; }) => <Posts message={p.message} likesCount = {p.likesCount}/>)
  
  let newPostElement = useRef<HTMLTextAreaElement>(null);
  
  const addPost = () => {
    if (newPostElement.current !== null) {
        props.dispatch({type: 'ADD-POST', message: newPostElement.current.value});
    }
}
  return (
    <div className = {p.postsBlock}>
      My posts
      <div>
        <div>
        <textarea ref={newPostElement}></textarea>
        </div>
        <div>
        <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={p.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
