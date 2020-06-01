import React from 'react';

import Square from '../Square/square';
import classes from './squares.module.css';

const Squares = (props) => (
    <div className={classes.Squares}>
        <Square value={props.row} />
        <Square value={props.row + 1} />
        <Square value={props.row + 2} />
    </div>
);
export default Squares;
