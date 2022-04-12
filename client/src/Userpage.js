import React, {useState, useEffect} from 'react'
import {Routes, Route } from 'react-router';
import ArticleCard from './ArticleCard';
import Postarticle from './Postarticle';
import { Link } from 'react-router-dom';
import Logout from './Logout';
import UserpageNav from './UserpageNav';

function UserPage({articles, user, setUser}) {

    
  return (

    <div>
        <h2>Welcome back, {user.username}!</h2>
        <UserpageNav/>
        <Routes>
            <Route path="/article" element={<Postarticle />} />
        </Routes>
        <h2>Articles</h2>
        <div >
       {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            user={user}
          />
        ))}
        </div>
    </div>
  )
}

export default UserPage;
