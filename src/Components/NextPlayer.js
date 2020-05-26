import React, {useState, useContext} from 'react';
import './NextPlayer.css';
import { CellsContext } from '../Contexts/CellsContext';

function NextPlayer(){

    const [cellValues, setCellValues, nextPlayer, setNextPlayer, INITIALSTATE] = useContext(CellsContext);

    return (
        <p className="NextPlayerType">
           {`Next player = ${nextPlayer}`}
        </p>
    )
}

export default NextPlayer;