import React, {useState} from "react";

const BoysAndGirlsNames = (props) => {
    
  const [babyNames, setBabyNames] = useState(props.babyNames);
  const [searchInput, setSearchInput] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  const sortedNames = babyNames.sort((a,b)=> {
    let a1 = a.name.toLowerCase();
    let b1 = b.name.toLowerCase();
    return a1 < b1 ? -1: a1 > b1 ? 1:0;
  }) 

  function handleSearchInput (e) {
    setSearchInput(e.target.value);

    const filteredSearch = babyNames.filter(kid => {
      return kid.name.toLowerCase().includes(searchInput);
    });
    setBabyNames(filteredSearch);
    if (e.target.value === "") window.location.reload();
  }
    
  const favoritesListHandler = (id) => {
    const newList = babyNames.filter((item) => {
      return item.id !== id;
    });
    const favList = babyNames.filter((item) => {
      return item.id === id;
    })
    setBabyNames(newList);
    setFavorites((favorites) => favorites.concat(favList));
  }
    
  const favoritesListRemover = (id) => {
    const updatedList = favorites.filter((item) => item.id !== id);
    setFavorites(updatedList);
    const removed = favorites.filter((item) => item.id === id);
    const merged = [...babyNames, ...removed];

    const filteredList = merged.reduce((accumulator, current) => {
      const x = accumulator.find(item => item.id === current.id);
        if (!x) return accumulator.concat([current]);
        else return accumulator;
    }, []);
    setBabyNames(filteredList);
  }

  return (

    <div className="names baby-names-container">
      <div className="favorite-names">
        <h2 className="section-header">Click your favorite baby names to create your own collection</h2>
        <ul>
          {favorites && favorites.map(favorite =><li key={favorite.id} id={favorite.id} className={favorite.sex}><button onClick={() => favoritesListRemover(favorite.id)} className="favorite-button">{favorite.name}</button></li>)} 
        </ul>
      </div>

      <div className="col">
        <form>
          <input 
            type="text"
            className="search-bar"
            placeholder="Search for a baby name..."
            value={searchInput}
            onChange={handleSearchInput}
          />
        </form>
      </div>

      <ul>
        {babyNames && sortedNames.map(baby =>(
        <li key={baby.id} id={baby.id} className={baby.sex}><button key={baby.id} id={baby.id} onClick={() => favoritesListHandler(baby.id)} className="favorite-button">{baby.name}</button></li>
                ))}
      </ul>

    </div>
  );
}

export default BoysAndGirlsNames;