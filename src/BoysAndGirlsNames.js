import React from "react";

const BoysAndGirlsNames = (props) => {
    const kids = props.babyNames.sort((a,b)=> {
        let a1 = a.name.toLowerCase();
        let b1 = b.name.toLowerCase();
        return a1 < b1 ? -1: a1 > b1 ? 1:0;
    })
    return (
        <div className="names baby-names-container">
            <ul>{kids.map(baby => ( 
                <li className={baby.sex}>{baby.name}</li>
                )
            )}
            </ul>
        </div>
    );
}

export default BoysAndGirlsNames;