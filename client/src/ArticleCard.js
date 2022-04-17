import React, {useState, useEffect} from 'react'

function ArticleCard({article, user}) {

    const [favorited, setFavorited] = useState(true);

    function handleFavoriteButton(e) {
        e.preventDefault();
        setFavorited(!favorited);
        
        fetch("/favorites", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({ 
            article_id: article.id,
            user_id: user.id
        }),
        }).then((r) => r.json());
    }
    console.log(user)

  return (
    <div className = "card">
        <p className = "title">{article.title}</p> 
        <p>{article.content}</p> 
        {favorited && (
        <button onClick={handleFavoriteButton} className="like_button">
            Favorite
        </button>
        )}
        {!favorited && (
        <button onClick={handleFavoriteButton} className="like_button">
            Added!
        </button>
        )} 
    </div>
  )
}

export default ArticleCard;




//   <button onClick={handleFavoriteButton} className="like_button">
//             Favorite
//         </button> 