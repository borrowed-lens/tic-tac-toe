import React, { Component } from 'react';

import classes from './App.module.css';
import Squares from './components/Squares/squares';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <div>
                    <Squares row={1}/>
                    <Squares row={4}/>
                    <Squares row={7}/>
                </div>
            </div>
        );
    }
}

export default App;
