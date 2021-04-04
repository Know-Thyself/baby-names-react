import React, { useState } from "react";

const BoysAndGirlsNames = (props) => {
    
  const [babyNames, setBabyNames] = useState(props.babyNames);
  const [searchInput, setSearchInput] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [gender, setGender] = useState("boys & girls")
  const categories = ["boys & girls", "girls", "boys"];
  
  const sortedNames = babyNames.sort((a,b)=> {
    let a1 = a.name.toLowerCase();
    let b1 = b.name.toLowerCase();
    return a1 < b1 ? -1: a1 > b1 ? 1:0;
  }) 

  function handleSearchInput (e) {
    setSearchInput(e.target.value.toLowerCase());

    const filteredSearch = babyNames.filter(kid => {
      return kid.name.toLowerCase().includes(searchInput);
    });
    setBabyNames(filteredSearch);
    if (e.target.value === "") window.location.reload();
  }
    
  const favoritesListHandler = (id) => {
    const newList = babyNames.filter((list) => {
      return list.id !== id;
    });
    const favList = babyNames.filter((list) => {
      return list.id === id;
    })
    setBabyNames(newList);
    setFavorites((favorites) => favorites.concat(favList));
  }
    
  const favoritesListRemover = (id) => {
    const updatedList = favorites.filter((list) => list.id !== id);
    setFavorites(updatedList);
    const removed = favorites.filter((list) => list.id === id);
    const merged = [...babyNames, ...removed];

    const filteredList = merged.reduce((accumulator, current) => {
      const x = accumulator.find(list => list.id === current.id);
        if (!x) return accumulator.concat([current]);
        else return accumulator;
    }, []);
    setBabyNames(filteredList);
  }

  const boysCategory = props.babyNames.filter(baby => baby.sex === "m");
  const girlsCategory = props.babyNames.filter(baby => baby.sex === "f");

  const RadioButtonsToggler = (e) => {
    if (e.target.value === "boys") {
      return setBabyNames(boysCategory);
    }
    else if (e.target.value === "girls") setBabyNames(girlsCategory);
    else if (e.target.value === "boys & girls") setBabyNames(props.babyNames)
  } 

  return (
    <div key="baby-names-container" className="names">
      <div key="favorites" className="favorite-names">
        <h3 key="main-header" className="section-header">Click your favorite baby names to create your own collection</h3>
        <ul>
          {favorites && favorites.map(favorite =><li key={favorite.id} id={favorite.id} className={favorite.sex}><button onClick={() => favoritesListRemover(favorite.id)} className="favorite-button">{favorite.name}</button></li>)} 
        </ul>
      </div>

      <div key="input-field" className="col">
        <form key="input-form">
          <input 
            key="search-input "
            type="text"
            className="search-bar"
            placeholder="Search for a baby name..."
            value={searchInput}
            onChange={handleSearchInput}
          />
        </form>
  
        <div key="radio" className="radio-container">{categories.map((category, index) => (
          <>
            <input className="radio-input" key={index} type="radio" value={category} name="selector" id={category} checked={gender === category} onChange={(e) => {setGender(e.target.value)}} onClick={RadioButtonsToggler}/><label key={category} htmlFor={category} className="radio-label">{category}</label>
            
          </>
          ))}
        </div>
      </div>

      <ul key="baby-names">
        {babyNames && sortedNames.map(baby =>(
        <li key={baby.id} id={baby.id} className={baby.sex}><button key={baby.id} id={baby.id} onClick={() => favoritesListHandler(baby.id)} className="favorite-button">{baby.name}</button></li>
                ))}
      </ul>
    </div>
  );
}

export default BoysAndGirlsNames;