import React from 'react';
import Cell from './Cell';

function Stage(props) {
    return (
        <div>
            {props.stages.map((row, rowIndex) =>
                row.map((cell, cellIndex) => (
                    <Cell key={cellIndex} type={cell[0]} />
                ))
            )}
        </div>
    );
}

export default Stage;
