import React from 'react';

import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <div
            className={classes.Modal}
            onClick={props.close}
            style={
                props.winner === 'X'
                    ? { backgroundColor: '#9fd4ff' }
                    : props.winner === 'O'
                    ? { backgroundColor: '#296392' }
                    : !props.winner
                    ? { backgroundColor: '#ffffff' }
                    : null
            }>
            {props.winner ? (
                <div>winner is {props.winner}</div>
            ) : (
                <div>game is a draw</div>
            )}
        </div>
    );
};
export default Modal;
