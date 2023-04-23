import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Posts from './components/Profile/MyPosts/MyPosts';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { ActionType, AddPostType, AppStateType } from './redux/state';


type AppProps ={
  state: AppStateType
  dispatch: (action: ActionType) => void
}


const App = (props: AppProps) => {

  const { state, dispatch } = props

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={() => <Dialogs
            state={state.messagesPage}/>} />

          <Route path='/profile' render={() => <Profile
            state={state.profilePage}
            dispatch= {dispatch}
            />} /> 
            
          <Route path='/news'
           render={() => <News />} />

          <Route path='/music'
           render={() => <Music />} />

          <Route path='/settings'
           render={() => <Settings />} />

        </div>
      </div>
  );
}
export default App;
