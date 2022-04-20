import React, {useState, useEffect} from 'react'
import {Routes, Route } from 'react-router';
import ArticleCard from './ArticleCard';
import Postarticle from './PostArticle';
import { Link } from 'react-router-dom';
import Logout from './LogOut';
import UserpageNav from './UserPageNav';

function UserPage({articles, user, setUser}) {

    
  return (

    <div>
        <Logout className="navbar">Logout</Logout>
        <div className="typewriter">
          <h2>Welcome back,{user.username}!</h2>
        </div>
        <UserpageNav />
        <Routes>
            <Route path="/article" element={<Postarticle />} />
        </Routes>
        <h2 className="article-label">Articles</h2>
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
