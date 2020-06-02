import React from 'react';
import { connect } from 'react-redux';

import classes from './square.module.css';

const Square = (props) => {
    return (
        <div
            className={classes.Square}
            onClick={() => props.markPosition(`square${props.value}`)}>
            <span>{props.squares[`square${props.value}`]}</span>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        squares: state.squares,
    };
};
export default connect(mapStateToProps)(Square);
