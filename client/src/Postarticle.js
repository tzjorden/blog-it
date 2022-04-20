import React, {useState, useEffect} from 'react'
import { render } from 'react-dom';
import { useNavigate} from 'react-router-dom';


 function Postarticle() {

     const[content, setContent] = useState("")
     const[title, setTitle] = useState("")

     let navigate = useNavigate();


     const handleSubmit = (e) => {
        e.preventDefault();
    
       
        fetch("/articles", {
          method: "POST",
          headers: { "Content-Type": "application/json",
                      Accept: "application/json",
                    },
          body: JSON.stringify({content,title}),
      }).then((r) => r.json());
        navigate("/user");
        
}
    

  return (
    <div className = "post-article">
        <h2>Share your Article</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <h2 className = "postarticle-label">Title</h2>
                <input value={title} onChange={(e) => setTitle(e.target.value)}  type = "text"/>
            </label>
            <h2 className = "postarticle-label">Content</h2>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} className = "content" rows={30}/>
            
              <button className="post-button" type="submit"> 
                  Publish 
              </button>
        </form>
    </div>
  )
}

export default Postarticle;
