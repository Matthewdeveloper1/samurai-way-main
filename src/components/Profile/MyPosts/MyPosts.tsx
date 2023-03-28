import React from "react";
import OnePost from "./Post/OnePost";
import p from './MyPosts.module.css'


const MyPosts = () => {
  return (
    <div className = {p.postsBlock}>
      My posts
      <div>
        <div>
        <textarea></textarea>
        </div>
        <div>
        <button>Add post</button>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;
