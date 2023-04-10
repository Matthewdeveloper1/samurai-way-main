import axios from "axios";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";






const Dialogs = (props: any) => { 

  // const dialogs = [
  //   {id: 1, name: 'Matthew'},
  //   {id: 2, name: 'Vasya'},
  //   {id: 3, name: 'Vlad'},
  //   {id: 4, name: 'Ilya'},
  //   {id: 5, name: 'Timofei'},
  //   {id: 6, name: 'Asya'},
  //   {id: 7, name: 'Valera'},
  //   {id: 8, name: 'Sveta'},
  // ]

  // const messages = [
  //   {id: 1, message: 'Hi'},
  //   {id: 2, message: 'how is your day'},
  //   {id: 3, message: 'great, wbu'},
  //   {id: 4, message: 'fine, ty'},
  // ]

  return( 
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {
          props.state.dialogs.map((d: { name: any; id: any; }) => 
            <DialogItem name = {d.name} id = {d.id}/>
          )
        }
        <div className={s.dialog}>
        </div>
      </div>
      <div className={s.messages}>
       {props.state.messages.map((m: { message: any; id: any; }) => <Message message = {m.message} id = {m.id}/>)}
      </div>
    </div>
  )
}
export default Dialogs;