 import React from "react"; 
import Posts from "./MyPosts/Post/OnePost";
 import p from './Profile.module.css'


 const Profile = () => {
  return(
    <div className={p.content}>
        <div>
          <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div>
          Ava + description
        </div>
          <textarea></textarea>
          <button>Add post</button>
        <Posts message = 'Hi, how are you' />
        <Posts message = 'Its my first post'/>
    </div>
  )
 }

 export default Profile;
