import React from 'react';

import classes from './Modal.module.css';

const Modal = (props) => {
    let modalClasses = [classes.Modal, props.showModal ? classes.ModalOpen : null]
    return (
        <div className={modalClasses.join(' ')}>
            <div>winner is {props.winner}</div>
        </div>
    );
};
export default Modal;
