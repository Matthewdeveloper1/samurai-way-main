import { ActionType, AppStateType, NewPostType } from "./state"

const ADD_POST = 'ADD-POST'

const propfileReducer = (state: any, action: ActionType) => {

   switch(action.type){
    case ADD_POST:
      const newPost: NewPostType= {
        id: 5,
        message: action.message,
        likesCount: 0
      }
      state.profilePage.posts.push(newPost)
      state.rerenderEntireTree()
      return state; 
    default:
      return state
    } 
    
   }

export default propfileReducer;