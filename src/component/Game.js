import React, { useState } from 'react';
import { constants } from '../constants';
import { Square } from './Square';

export const Game = () => {
    const initialState = {
        activePlayer: constants.PLAYER_X 
    }
    const [gameState, setGameState] = useState(initialState)
    const [square, setSquare] = useState([]);

    const renderSquare = () => {
        let squareList = [];

        for(let i = 0; i < 9; i++) {
            squareList.push(<li key={i}>
                <Square clickNotification={clickNotification.bind(this, i)} 
                    value={getFilledSquaresValue(i)} />
            </li>);
        }

        return squareList;
    }

    const clickNotification = (index) => {
        let filledSquares = square;
        
        filledSquares[index] = gameState.activePlayer;
        setSquare(filledSquares);
        setGameState((prevState) => ({
            ...prevState,
            activePlayer: getInactivePlayer() 
        })); 
    }

    const getFilledSquaresValue = (index) => {
        return (square[index] || "");
    }

    const getInactivePlayer = () => {
        return gameState.activePlayer === constants.PLAYER_X ? constants.PLAYER_O : constants.PLAYER_X;
    }

    return (
        <div className="game">
            <h4>{`${constants.PLAYER_NEXT} ${gameState.activePlayer}`}</h4>
            <ul className="board"> 
                { renderSquare() }        
            </ul>
        </div>
    );
}