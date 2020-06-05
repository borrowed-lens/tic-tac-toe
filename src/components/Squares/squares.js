import React, { memo } from 'react';

import Square from '../Square/square';
import classes from './squares.module.css';

const Squares = (props) => (
    <div className={classes.Squares}>
        <Square value={props.row} markPosition={props.onMarkPosition}/>
        <Square value={props.row + 1} markPosition={props.onMarkPosition}/>
        <Square value={props.row + 2} markPosition={props.onMarkPosition}/>
    </div>
);
export default memo(Squares);
