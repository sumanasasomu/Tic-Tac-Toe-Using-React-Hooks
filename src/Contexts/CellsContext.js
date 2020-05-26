import React, {useState, createContext, useContext} from 'react';

export const CellsContext = createContext();

export const CellsContextProvider = (props) => {
    const INITIALSTATE = Array(9).fill(null);
    const [cellValues, setCellValues] = useState(() => INITIALSTATE);
    const [nextPlayer, setNextPlayer] = useState(() => 'X');

    return (
        <CellsContext.Provider value={[cellValues, setCellValues, nextPlayer, setNextPlayer, INITIALSTATE]}>{props.children}</CellsContext.Provider>
    )
}