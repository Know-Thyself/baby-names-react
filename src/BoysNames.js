//import { render } from "@testing-library/react";
import React from "react";

const BoysNames = (props) => {
    return (
        <div className="boys-names">
            <h3>Awesome Boys Names</h3>
            {props.boysNames.filter(kids => kids.sex === 'm').map(boys => (
                <li>{boys.name}</li>
            ))}
        </div>
    )
}

export default BoysNames;