import React from "react"; 
import MyPosts from "./MyPosts/MyPosts";
import p from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


 const Profile = (props: any) => {

  return( 
    <div className={p.content}>
      <ProfileInfo/>
      <MyPosts
      posts = {props.state.posts}
      addPost ={props.addPost}
      />
    </div>
  )
 } 

 export default Profile;
