import React from "react";
import s from './OnePost.module.css'


const OnePost = (props: { message: string, likesCount: number}) => {
  return (
      <div className={s.item}>
          <img className={s.img} src ="https://bitprice.ru/sites/default/files/styles/mt_photo/public/img/logo/brands/447105.png?itok=uchLL3-4"/>
          {props.message}
        <div>
          <span>like </span>
          {props.likesCount}
        </div>
      </div>
  )
}

export default OnePost;
 