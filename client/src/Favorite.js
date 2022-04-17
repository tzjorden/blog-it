import React, {useState, useEffect} from 'react'
import FavoriteCard from './FavoriteCard';

function Favorite() {
  const [getFavorited, setGetFavorited] = useState([]);
  
  useEffect(() => {
    fetch("/favorites")
      .then((r) => r.json())
      .then(setGetFavorited);
  }, []);
  
  console.log(getFavorited);

 
  return (
      <div>
        <h2>Liked Articles</h2>
          {getFavorited.map((favorite) => (
            <FavoriteCard key={favorite.id} getFavorited={favorite} favoriteId={favorite.id}  setGetFavorited = {setGetFavorited}/>
          ))}
      </div>
  )
}


export default  Favorite;

