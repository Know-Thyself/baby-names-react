import React, {useState} from "react";

const BoysAndGirlsNames = (props) => {
    const [searchInput, setSearchInput] = useState([]);
    const [babyNames, setBabyNames] = useState(props.babyNames);
    const sortedNames = babyNames.sort((a,b)=> {
        let a1 = a.name.toLowerCase();
        let b1 = b.name.toLowerCase();
        return a1 < b1 ? -1: a1 > b1 ? 1:0;
    })
    function handleSearchInput (e) {
        setSearchInput(e.target.value)
        console.log(searchInput)
        const filteredSearch = babyNames.filter(kid => {
          return kid.name.toLowerCase().includes(searchInput)
    
        });
        setBabyNames(filteredSearch);
        if (e.target.value === "") {
          window.location.reload();
        }
    }

    return (
      <div className="names baby-names-container">
        <div className="col">
          <form className="form-group search-box">
            <input
              type="text"
              id="babyName"
              className="baby-name-search"
              placeholder="Search a baby name"
              value={searchInput}
              onChange={handleSearchInput}
            />
          </form>
        </div>
        <ul>{sortedNames.map(baby => ( 
          <li className={baby.sex}>{baby.name}</li>
          ))}
        </ul>
      </div>
    );
}

export default BoysAndGirlsNames;