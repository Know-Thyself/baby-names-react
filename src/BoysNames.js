//import { render } from "@testing-library/react";
import React from "react";

const BoysNames = (props) => {
    const filteredBoysNames = props.boysNames.filter(kids => kids.sex === 'm').map(boys => boys.name); 
    const alphabeticallySortedBoysNames = filteredBoysNames.sort();
    return (
        <div className="names boys-names-container">
            <h3 className="boys-header">Awesome Boys Names</h3>
            <ul>{alphabeticallySortedBoysNames.map(boy => (
                <li className="boys-names">{boy}</li>
            ))}
            </ul>
        </div>
    )
}

export default BoysNames;