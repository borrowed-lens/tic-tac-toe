import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import classes from './square.module.css';

const Square = (props) => {
    let inProp = Boolean(props.squares[`square${props.value}`]);
    let nodeRef = useRef(null);
    return (
        <div
            className={classes.Square}
            onClick={() => props.markPosition(`square${props.value}`)}>
            <CSSTransition
                in={inProp}
                timeout={300}
                classNames={{
                    enter: classes.SquareValueEnter,
                    enterActive: classes.SquareValueEnterActive,
                }}
                nodeRef={nodeRef}>
                <span ref={nodeRef}>{props.squares[`square${props.value}`]}</span>
            </CSSTransition>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        squares: state.squares,
    };
};
export default connect(mapStateToProps)(Square);
