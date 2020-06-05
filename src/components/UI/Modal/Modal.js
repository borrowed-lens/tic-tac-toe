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
                    ? { backgroundColor: '#fdea93' }
                    : null
            }>
            <div>winner is {props.winner}</div>
        </div>
    );
};
export default Modal;
