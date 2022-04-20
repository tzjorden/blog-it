import React from "react";

function FavoriteCard({ getFavorited, favoriteId, setGetFavorited }) {
    function handleDelete() {
    fetch(`favorites/${favoriteId}`, {
      method: "DELETE",
    });
    setGetFavorited((getFavorited) => {
     return getFavorited.filter((e) => e.favorite_id !== favoriteId)
    });
  }
  console.log(favoriteId)

  return (
    <div className = "container">
    <div className="card">
      <p className = "title">{getFavorited.title}</p> 
        <p>{getFavorited.content}</p> 
        <button onClick={handleDelete} className="emoji-button-delete">
            🗑
        </button>
    </div>
    </div>
  );
}

export default FavoriteCard;