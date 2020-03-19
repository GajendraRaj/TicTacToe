import React from 'react';

export const Square = (props) => {
    return (<button className="square-button">{props.activePlayer}</button>); 
}