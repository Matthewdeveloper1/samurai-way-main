import React from "react"; 
import Posts from "../MyPosts/MyPosts";
import p from './ProfileInfo.module.css'


 const ProfileInfo = () => {
  return(
    <div>
        <div>
          <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' />
        </div>
        <div className={p.descriptionBlock}>
          Ava + description
        </div>
    </div> 
  )
 }

 export default ProfileInfo;