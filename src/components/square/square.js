import React from 'react';
import classes from './square.module.css';

const Square = (props) => (
    <div className={classes.Square}>
        <span>{props.value}</span>
    </div>
);
export default Square;
