 import React from "react"; 
import MyPosts from "./MyPosts/MyPosts";
import OnePost from "./MyPosts/Post/OnePost";
import Posts from "./MyPosts/Post/OnePost";
 import p from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


 const Profile = () => {

  const postsData = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'Sup, fine '}
  ]

  return(
    <div className={p.content}>
      <ProfileInfo/>
      <MyPosts/>
      <Posts message={postsData[0].message} />
      <Posts message={postsData[1].message} />
    </div>
  )
 }

 export default Profile;
