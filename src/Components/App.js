import React from 'react';
import Board from './Board';
import RestartButton from './RestartButton';
import NextPlayer from './NextPlayer';
import { CellsContextProvider } from '../Contexts/CellsContext';
import Result from './Result';

function App() {
  return (
    <CellsContextProvider>
      <div className="App">
        <Board>
        </Board>
        <NextPlayer></NextPlayer> 
        <RestartButton>RESTART</RestartButton>
        <Result></Result>
      </div>
    </CellsContextProvider>  
  );
}

export default App;
