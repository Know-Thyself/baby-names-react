import React from "react";

const GirlsNames = (props) => {
    const filteredGirlsNames = props.girlsNames.filter(kids => kids.sex === 'f').map(girls => girls.name); 
    const alphabeticallySortedGirlsNames = filteredGirlsNames.sort();
    return (
        <div className="names girls-names-container">
            <h3 className="girls-header">Awesome Girls Names</h3>
            <ul>{alphabeticallySortedGirlsNames.map(girl => (
                <li className="girls-names">{girl}</li>
            ))}
            </ul>
        </div>
    )
}

export default GirlsNames;