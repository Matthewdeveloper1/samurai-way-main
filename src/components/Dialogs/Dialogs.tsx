import React from "react"
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css"

const Dialogs = () => { 
  return(
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to ='/dialogs/1'>Matthew</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to ='/dialogs/2'>Vasya</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to ='/dialogs/3'>Vlad</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to ='/dialogs/4'>Ilya</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to ='/dialogs/5'>Timofei</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to ='/dialogs/6'>Asya</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to ='/dialogs/7'>Valera</NavLink>
        </div>
        <div className={s.dialog}>
        <NavLink to ='/dialogs/8'>Sveta</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>
          Hi
        </div>
        <div className={s.message}>
          How is your day
        </div><div className={s.message}>
          Fine, wbu
        </div>
        <div className={s.message}>
          great, ty!
        </div>

      </div>
    </div>
  )
}
export default Dialogs;