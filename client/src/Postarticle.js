import React, {useState, useEffect} from 'react'

 function Postarticle() {

     const[content, setContent] = useState("")
     const[title, setTitle] = useState("")

     const handleSubmit = (e) => {
        e.preventDefault();
    
       
        fetch("/articles", {
          method: "POST",
          headers: { "Content-Type": "application/json",
                    //   Accept: "application/json",
                    },
          body: JSON.stringify({content,title}),
      }).then((r) => r.json());

    }


  return (
    <div>
        <h2>Share your Article!</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Title</span>
                <input onChange={(e) => setTitle(e.target.value)}  type = "text"/>
            </label>
            <label >
                <span>Content</span>
                <textarea onChange={(e) => setContent(e.target.value)} className = "content" rows={30}/>
            </label>
            <button className = "button" type="submit">Add</button>
        </form>
    </div>
  )
}

export default Postarticle;