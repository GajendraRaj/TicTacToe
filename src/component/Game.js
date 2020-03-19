import React, { useState } from 'react';
import { constants } from '../constants';
import { Square } from './Square';

export const Game = () => {
    const initialState = {
        activePlayer: constants.PLAYER_X 
    }
    const [gameState, setGameState] = useState(initialState)

    const renderSquare = () => {
        let squareList = [];

        for(let i = 0; i < 9; i++) {
            squareList.push(<li key={i}>
                <Square value={gameState.activePlayer} />
            </li>);
        }

        return squareList;
    }

    return (
        <div>
            <h4>{`${constants.PLAYER_NEXT} ${gameState.activePlayer}`}</h4>
            <ul> 
                { renderSquare() }        
            </ul>
        </div>
    );
}