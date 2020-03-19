import React from 'react';

export const Square = (props) => {
    return (<button className="square-button" onClick={props.clickNotification}>{props.value}</button>); 
}
