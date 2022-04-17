import React from 'react'
import Navbar from './Navbar';

function Homepage() {

  return (
    <div className = "homepage" >
        <Navbar/>

        <span className="homepage-text">
            Publish your article to the world!
        </span>
        
        <div className = "quote1">
        Share your knowledge.
            It’s a way
        to achieve immortality.
        </div>
    </div>
  )
}

export default  Homepage;
