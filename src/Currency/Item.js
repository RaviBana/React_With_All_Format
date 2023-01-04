import React from 'react';
import './Currency.css'

function Item(props){
    console.log('props',props)
    return (
        <>
        <div id='item'>
        <div className='para'>{props.items.symbol}{props.items.name}</div>
        <div className='para'>{props.items.rate}</div>
        <div className='para'>{(props.items.rate*props.Value).toFixed(2)}</div>
       </div>
         </>
    )
}
export default Item;