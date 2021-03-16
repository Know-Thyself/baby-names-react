import React from "react";

const GirlsNames = (props) => {
    return (
        <div className="boys-names">
            <h3>Awesome Girls Names</h3>
            {props.girlsNames.filter(kids => kids.sex === 'f').map(girls => (
                <li>{girls.name}</li>
            ))}
        </div>
    )
}

export default GirlsNames;