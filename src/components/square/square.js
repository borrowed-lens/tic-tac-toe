import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import classes from './square.module.css';

const Square = (props) => {
    let inProp = Boolean(props.squares[`square${props.value}`]);
    let nodeRef = useRef(null);
    let squareClasses = [
        classes.Square,
        props.squares[`square${props.value}`] === 'X'
            ? classes.SquareX
            : props.squares[`square${props.value}`] === 'O'
            ? classes.SquareO
            : null,
    ];
    return (
        <CSSTransition
            in={inProp}
            timeout={300}
            classNames={{
                enter: classes.SquareValueEnter,
                enterActive: classes.SquareValueEnterActive,
            }}
            nodeRef={nodeRef}>
            <div
                ref={nodeRef}
                className={squareClasses.join(' ')}
                onClick={() => props.markPosition(`square${props.value}`)}>
                <span className={classes.SquareSpan}>
                    {props.squares[`square${props.value}`]}
                </span>
            </div>
        </CSSTransition>
    );
};

const mapStateToProps = (state) => {
    return {
        squares: state.squares,
    };
};
export default connect(mapStateToProps)(Square);
