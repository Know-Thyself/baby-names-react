import React from "react";

const BoysNames = (props) => {
    const filteredAndAlphabeticallySortedBoysNames = props.boysNames.filter(kids => kids.sex === 'm').map(boys => boys.name).sort(); 
    return (
        <div className="names boys-names-container">
            <h3 className="boys-header">Awesome Boys' Names</h3>
            <ul>{filteredAndAlphabeticallySortedBoysNames.map(boy => (
                <li className="boys-names">{boy}</li>
            ))}
            </ul>
        </div>
    );
}

export default BoysNames;