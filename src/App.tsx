import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Posts from './components/Profile/MyPosts/Posts';
import Profile from './components/Profile/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}


export default App;
