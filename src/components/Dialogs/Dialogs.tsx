import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

const DialogItem = (props: any) => {
  let path = '/dialogs/' + props.id
  return (
    <div className={s.dialog + ' ' + s.active}>
          <NavLink to ={path}>{props.name}</NavLink>
        </div>
  )
}


const Message = (props: any) =>{
  return <div className={s.message}>
     {props.message}
  </div>
}


const Dialogs = (props: any) => { 
  
  const dialogsData = [
    {id: 1, name: 'Matthew'},
    {id: 2, name: 'Vasya'},
    {id: 3, name: 'Vlad'},
    {id: 4, name: 'Ilya'},
    {id: 5, name: 'Timofei'},
    {id: 6, name: 'Asya'},
    {id: 7, name: 'Valera'},
    {id: 8, name: 'Sveta'},
  ]
  const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'how is your day'},
    {id: 3, message: 'great, wbu'},
    {id: 4, message: 'fine, ty'},
  ]

  return( 
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
        <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id}/>
        <DialogItem name = {dialogsData[2].name} id = {dialogsData[2].id}/>
        <DialogItem name = {dialogsData[3].name} id = {dialogsData[3].id}/>
        <DialogItem name = {dialogsData[4].name} id = {dialogsData[4].id}/>
        <DialogItem name = {dialogsData[5].name} id = {dialogsData[5].id}/>
        <DialogItem name = {dialogsData[6].name} id = {dialogsData[6].id}/>
        <DialogItem name = {dialogsData[7].name} id = {dialogsData[7].id}/>
        <div className={s.dialog}>
        </div>
      </div>
      <div className={s.messages}>
        <Message message = {messagesData[0].message} id = {messagesData[0].id}/>
        <Message message = {messagesData[1].message} id = {messagesData[1].id}/>
        <Message message = {messagesData[2].message} id = {messagesData[2].id}/>
        <Message message = {messagesData[3].message} id = {messagesData[3].id}/>

      </div>
    </div>
  )
}
export default Dialogs;