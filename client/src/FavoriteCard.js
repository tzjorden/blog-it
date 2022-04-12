import React from "react";

function FavoriteCard({ getFavorited, favoriteId, setGetFavorited }) {
  
  
    function handleDelete() {
    fetch(`favorites/${favoriteId}`, {
      method: "DELETE",
    });
    setGetFavorited((getFavorited) => {
     return getFavorited.filter((e) => e.id !== favoriteId)
    });
  }


  return (
    <div className="favorite_container">
      <p>{getFavorited.title}</p> 
        <p>{getFavorited.content}</p> 
        <button onClick={handleDelete} className="emoji-button-delete">
            🗑
        </button>
    </div>
  );
}

export default FavoriteCard;