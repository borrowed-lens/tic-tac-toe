import * as actionTypes from './actionTypes';

const initialState = {
    result: false,
    squares: {
        square1: '',
        square2: '',
        square3: '',
        square4: '',
        square5: '',
        square6: '',
        square7: '',
        square8: '',
        square9: '',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MARK_POSITION: {
            return {
                ...state,
                player: action.player,
                squares: {
                    ...state.squares,
                    [action.position]: action.player,
                },
            };
        }
        case actionTypes.CHECK_RESULT: {
            return {
                ...state,
                player: action.result,
            };
        }
        default:
            return state;
    }
};

export default reducer;
