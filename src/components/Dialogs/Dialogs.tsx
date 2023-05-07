import React from "react";
import { sendMessageCreator, updateNewMessageCreator } from "../../redux/state";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";







const Dialogs = (props: any) => { 

  let state = props.store.getState().dialogsPage;
  let newMessageBody = state.state.newMessageBody

  let onSendMessageClick =  () => {
    props.store.dispatch(sendMessageCreator());
  }
  let onNewMessageChange =  (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value
    props.store.dispatch(updateNewMessageCreator(body));
  }

  return( 
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          props.state.dialogs.map((d: { name: string; id: number; }) => 
            <DialogItem name = {d.name} id = {d.id}/>
          )
        }
        <div className={s.dialog}>
        </div>
      </div>
      <div className={s.messages}>
       {props.state.messages.map((m: { message: string; id: number; }) => <Message message = {m.message} id = {m.id}/>)}
       <div><textarea value = {newMessageBody} 
       onChange = {onNewMessageChange}
       placeholder="Enter your message"></textarea></div> 
      <div><button onClick = {onSendMessageClick}>send</button></div>
      </div>
      
    </div>
  )
}
export default Dialogs;