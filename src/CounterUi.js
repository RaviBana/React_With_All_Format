import React from "react";

function CounterUi(props){
    return (
    <p>oye {props.count}
    <button onClick={props.plus}>click</button></p>
    )
}

export default CounterUi