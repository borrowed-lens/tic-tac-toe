import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import Squares from './components/Squares/squares';
import * as actionTypes from './store/actionTypes';

class App extends Component {
    ruleSet = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
    ];
    squareStates = { ...this.props.squares };
    player = 'X';
    componentDidUpdate() {
        if (!this.result) {
            this.player = this.player === 'X' ? 'O' : 'X';
        }
    }
    checkWinnerHandler = () => {
        for (let [a, b, c] of this.ruleSet) {
            if (
                this.squareStates[`square${a}`] &&
                this.squareStates[`square${a}`] ===
                    this.squareStates[`square${b}`] &&
                this.squareStates[`square${b}`] ===
                    this.squareStates[`square${c}`]
            ) {
                return this.player;
            }
        }
        return false;
    };
    markPositionHandler = (position) => {
        this.squareStates[position] = this.player;
        this.winner = this.checkWinnerHandler();
        this.props.markPosition(position, this.player);
    };
    render() {
        return (
            <div className={classes.App}>
                {this.winner}
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
        player: state.player,
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
        checkResult: (result) =>
            dispatch({ type: actionTypes.CHECK_RESULT, result: result }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
