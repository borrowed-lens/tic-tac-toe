import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import Squares from './components/Squares/squares';
import * as actionTypes from './store/actionTypes';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Modal from './components/UI/Modal/Modal';

class App extends Component {
    constructor(props) {
        super(props);
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
        this.squareStates = { ...this.props.squares };
        this.player = 'X';
        this.gameOver = false;
    }
    componentDidUpdate() {
        if (!this.result && !this.gameOver) {
            this.player = this.player === 'X' ? 'O' : 'X';
        }
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
                this.gameOver = true;
                return this.player;
            }
        }
        this.gameOver = this.checkGameStatus();
        return false;
    };
    markPositionHandler = (position) => {
        if (!this.squareStates[position]) {
            this.squareStates[position] = this.player;
            this.winner = this.checkWinnerHandler();
            this.props.markPosition(position, this.player);
        }
    };
    render() {
        return (
            <div className={classes.App}>
                {/* <Backdrop /> */}
                <Modal />
                {this.winner ? `winner is ${this.winner}` : ''}
                {this.gameOver ? 'game over' : ''}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
