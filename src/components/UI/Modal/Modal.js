import React from 'react';

import classes from './Modal.module.css';

const Modal = (props) => {
    return (
        <div className={classes.Modal} onClick={props.close}>
            <div>winner is {props.winner}</div>
        </div>
    );
};
export default Modal;
