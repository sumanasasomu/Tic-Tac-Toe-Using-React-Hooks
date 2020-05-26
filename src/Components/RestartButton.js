import React, {useContext} from 'react';
import './RestartButton.css';
import { CellsContext } from '../Contexts/CellsContext';


function RestartButton(props){   
    const [cellValues, setCellValues, nextPlayer, setNextPlayer, INITIALSTATE] = useContext(CellsContext);

    function RestartClicked() {
        console.log('Restart Game');
        setCellValues(INITIALSTATE);
        setNextPlayer('X');
    }

    return (
    <button className="RestartButtonType" onClick={RestartClicked}>{props.children}</button>
    );
}

export default RestartButton;