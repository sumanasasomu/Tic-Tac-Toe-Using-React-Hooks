import React, {useState, useContext} from 'react';
import './Cell.css';
import { CellsContext } from '../Contexts/CellsContext';


function Cell(props){

    const [cellValues, setCellValues, nextPlayer, setNextPlayer, INITIALSTATE] = useContext(CellsContext);

    // React.useEffect( () => {
    //     console.log("re-render");
    // }, [cellValues]);

    const cellClicked = () => {
        console.log(`The cell ${props.id} is clicked`);
        if(cellValues[props.id]){
            console.log('Incorrect Move');
        }
        else{
            const nextCellValues = cellValues.slice();
            nextCellValues[props.id] = nextPlayer;
            setCellValues(nextCellValues);
            (nextPlayer=='X') ? setNextPlayer('O') : setNextPlayer('X');
        }
    }

    return (
        <button className="cellType" id={props.id} onClick={cellClicked}>
           {cellValues[props.id]}
        </button>
    )
}

export default Cell;