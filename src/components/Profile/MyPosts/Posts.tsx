import React from "react";
import OnePost from "./Post/OnePost";
import p from './Posts.module.css'


const Posts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
    </div>
  )
}

export default Posts;
