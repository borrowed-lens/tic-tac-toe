import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import classes from './App.module.css';
import Squares from './components/Squares/squares';
import * as actionTypes from './store/actionTypes';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Modal from './components/UI/Modal/Modal';

class App extends Component {
    constructor(props) {
        console.log("App", App)
        super(props);
        this.state = {
            gameStart: false,
            gameOver: false,
        };
        this.ruleSet = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9],
            [1, 5, 9],
            [3, 5, 7],
        ];
        this.buttonRef = createRef();
        this.leftRef = createRef();
        this.rightRef = createRef();
        this.modalRef = createRef();
    }
    checkGameStatus = () => {
        for (let square in this.squareStates) {
            if (this.squareStates[square] === '') {
                return false;
            }
        }
        return true;
    };
    checkWinnerHandler = () => {
        for (let [a, b, c] of this.ruleSet) {
            if (
                this.squareStates[`square${a}`] &&
                this.squareStates[`square${a}`] ===
                    this.squareStates[`square${b}`] &&
                this.squareStates[`square${b}`] ===
                    this.squareStates[`square${c}`]
            ) {
                this.setState({
                    gameOver: true,
                });
                return this.player;
            }
        }
        this.setState({
            gameOver: this.checkGameStatus(),
        });
        return false;
    };
    startGameHandler = () => {
        this.player = 'X';
        this.squareStates = { ...this.props.squares };
        this.setState({
            gameStart: true,
        });
    };
    markPositionHandler = (position) => {
        if (!this.squareStates[position]) {
            this.squareStates[position] = this.player;
            this.winner = this.checkWinnerHandler();
            this.props.markPosition(position, this.player);
            if (!this.result && !this.state.gameOver) {
                this.player = this.player === 'X' ? 'O' : 'X';
            }
        }
    };
    closeModal = () => {
        this.setState({
            gameOver: false,
            gameStart: false,
        });
        this.props.restartGame();
    };
    render() {
        return (
            <div className={classes.App}>
                {this.state.gameOver ? (
                    <Backdrop close={this.closeModal}></Backdrop>
                ) : null}
                <CSSTransition
                    in={this.state.gameOver}
                    timeout={500}
                    mountOnEnter
                    unmountOnExit
                    classNames={{
                        enterActive: classes.ModalEnterActive,
                        exitActive: classes.ModalExitActive,
                    }}>
                    <Modal winner={this.winner} close={this.closeModal}></Modal>
                </CSSTransition>
                <CSSTransition
                    in={!this.state.gameStart}
                    timeout={500}
                    unmountOnExit
                    nodeRef={this.buttonRef}
                    classNames={{
                        exit: classes.PrimaryButton,
                        exitActive: classes.PrimaryButtonActive,
                    }}>
                    <button
                        ref={this.buttonRef}
                        className={classes.PrimaryButton}
                        onClick={this.startGameHandler}>
                        start the game
                    </button>
                </CSSTransition>
                <div className={classes.SquareContainer}>
                    <CSSTransition
                        in={!this.state.gameStart}
                        timeout={500}
                        unmountOnExit
                        nodeRef={this.leftRef}
                        classNames={{
                            exit: classes.LeftDiv,
                            exitActive: classes.LeftDivActive,
                        }}>
                        <div
                            className={classes.LeftDiv}
                            ref={this.leftRef}></div>
                    </CSSTransition>
                    <CSSTransition
                        in={!this.state.gameStart}
                        timeout={500}
                        unmountOnExit
                        nodeRef={this.rightRef}
                        classNames={{
                            exit: classes.RightDiv,
                            exitActive: classes.RightDivActive,
                        }}>
                        <div
                            className={classes.RightDiv}
                            ref={this.rightRef}></div>
                    </CSSTransition>
                    <div>
                        <Squares
                            row={1}
                            onMarkPosition={this.markPositionHandler}
                        />
                        <Squares
                            row={4}
                            onMarkPosition={this.markPositionHandler}
                        />
                        <Squares
                            row={7}
                            onMarkPosition={this.markPositionHandler}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        squares: state.squares,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        markPosition: (position, playerType) =>
            dispatch({
                type: actionTypes.MARK_POSITION,
                position: position,
                player: playerType,
            }),
        restartGame: () => {
            dispatch({
                type: actionTypes.RESTART
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
