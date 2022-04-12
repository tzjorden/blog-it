import './App.css';
import React,{useState, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Signup from './Signup';
import Navbar from './Navbar';
import Homepage from './Homepage';
import Login from './Login';
import Favorite from './Favorite';
import UserPage from './Userpage';
import Postarticle from './Postarticle';
import Logout from './Logout';


function App() {
  
  const[user, setUser] = useState("")
  const[articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles")
      .then((r) => r.json())
      .then(setArticles);
  }, []);

  console.log(articles)

  useEffect(() => {
      fetch("/me").then((res) => {
      if (res.ok) {
          res.json().then((user) => {
          setUser(user);
          });   
      }
      });
  }, []);

  return (
    <div className="App">
      {/* <Navbar/>  */}
       <Routes>
        <Route path="/logout" element={<Logout user = {user} setUser = {setUser}  />} />
        <Route path="/article" element={<Postarticle />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login onLogin = {setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/user/*" element={<UserPage key = {articles.id} articles = {articles} user = {user} setUser = {setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
