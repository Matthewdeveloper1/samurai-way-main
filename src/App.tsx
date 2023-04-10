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


const App = (props: any) => {


  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={() => <Dialogs
            state={props.state.messagesPage}/>} />

          <Route path='/profile' render={() => <Profile
            state={props.state.profilePage}
            addPost= {props.addPost}
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
