


export type AddPostActionType = {
  type: 'ADD-POST'
  message: string
}

export type ActionType = AddPostActionType
type NewPostType = {
  id: number
  message: string
  likesCount: number
}
let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 21 },
        { id: 2, message: 'Sup, fine ', likesCount: 12 },
        { id: 3, message: 'cool ', likesCount: 13 },
        { id: 4, message: 'yeah ', likesCount: 1 }
      ]
    },
    messagesPage: {
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'how is your day' },
        { id: 3, message: 'great, wbu' },
        { id: 4, message: 'fine, ty' },
      ],
      dialogs: [
        { id: 1, name: 'Matthew' },
        { id: 2, name: 'Vasya' },
        { id: 3, name: 'Vlad' },
        { id: 4, name: 'Ilya' },
        { id: 5, name: 'Timofei' },
        { id: 6, name: 'Asya' },
        { id: 7, name: 'Valera' },
        { id: 8, name: 'Sveta' },
      ]
    }

  },

  rerenderEntireTree() {
    console.log('')
  },

  dispatch(action: ActionType){
    if(action.type === "ADD-POST"){
      const newPost: NewPostType= {
        id: 5,
        message: action.message,
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this.rerenderEntireTree()
    }
  },



  subscribe(observer: () => void) {
    this.rerenderEntireTree = observer
  },

  getState() {
    return this._state
  },

  
}

export type AppStateType = typeof store._state
export type AddPostType = (message: string) => void

//   NewPost{state.profilePage.posts.push(newPost)
//   rerenderEntireTree(state)}
// }

// export const subscribe = (observer: () => void) => {
//   rerenderEntireTree = observer
// }
export default store;