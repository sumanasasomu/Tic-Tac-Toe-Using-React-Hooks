import React, {useState, useContext} from 'react';
import './Result.css';
import { CellsContext } from '../Contexts/CellsContext';

function Result(){

    const [cellValues, setCellValues, nextPlayer, setNextPlayer, INITIALSTATE] = useContext(CellsContext);

    const possibleLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const winners = {'X': false, 'O':false};
    for(let i=0; i<possibleLines.length; i++){
        const [p,q,r] = possibleLines[i];
        if(cellValues[p] === cellValues [q] && cellValues[q] === cellValues[r]){
            console.log(`Winner ${cellValues[p]}`);
            winners[cellValues[p]] = true;
        }
    }

    if(cellValues.includes(null) && winners['X']===false && winners['O']===false){
        return <p className="ResultType">Keep Playing</p>;
    }
    else{
        if((winners['X']===true && winners['O']===true) || (winners['X']===false && winners['O']===false)){
            return <p className="ResultType">{`Thats a draw! Well Played.`}</p>
        }
        else if(winners['X'] === true){
            return <p className="ResultType">{`Player - X is the Winner`}</p>
        }
        else{
            return <p className="ResultType">{`Player - O is the Winner`}</p>
        }
        setNextPlayer(' ')
    }
}

export default Result;
