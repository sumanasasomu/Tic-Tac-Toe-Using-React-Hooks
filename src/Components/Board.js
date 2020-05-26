import React from 'react';
import Cell from './Cell.js';
import './Board.css';

function Board(){
    return (
        <div className="boardType">
            <div className="rowType">
                <Cell id="0"></Cell>
                <Cell id="1"></Cell>
                <Cell id="2"></Cell>
            </div>
            <div className="rowType">
                <Cell id="3"></Cell>
                <Cell id="4"></Cell>
                <Cell id="5"></Cell>
            </div>
            <div className="rowType">
                <Cell id="6"></Cell>
                <Cell id="7"></Cell>
                <Cell id="8"></Cell>
            </div>            
        </div>
    )
}

export default Board;