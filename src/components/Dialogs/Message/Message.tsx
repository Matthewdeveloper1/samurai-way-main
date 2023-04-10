import React, { useRef } from "react";
import s from "./../Dialogs.module.css"



const Message = (props: any) =>{

  let newMessageElement = useRef<HTMLTextAreaElement>(null);
  
  const addPost = () => {
    if (newMessageElement.current !== null) {
        alert(newMessageElement.current.value)
    }
}

  return (
  <div className={s.message}>
     <div>{props.message}</div>
     <textarea ref={newMessageElement}></textarea>
     <button onClick={addPost}>Sent</button>
  </div>
)
}


export default Message;