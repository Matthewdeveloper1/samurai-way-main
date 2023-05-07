import {  MessageAT } from "./state"

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
const messagesReducer = (state: any, action: MessageAT) => {

  switch(action.type){case UPDATE_NEW_MESSAGE_BODY:
    state.messagesPage.newMessageBody = action.message;
    return state
  case SEND_MESSAGE: 
  let body = state.messagesPage.newMessageBody;
    state.messagesPage.newMessageBody = '';
    state.messagesPage.messages.push({id: 6, message: body})
   return state
  default:
    return state}
  
  }

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default messagesReducer;