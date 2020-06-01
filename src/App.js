import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import Squares from './components/Squares/squares';
import * as actionTypes from './store/actionTypes';

class App extends Component {
    componentDidMount() {
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
    }
    markPositionHandler = (position) => {
        this.props.markPosition(position, this.props.player);
        this.props.togglePlayer(this.props.player === 'X' ? 'O' : 'X');
    };
    render() {
        return (
            <div className={classes.App}>
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
        togglePlayer: (playerType) =>
            dispatch({ type: actionTypes.TOGGLE_PLAYER, player: playerType }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
