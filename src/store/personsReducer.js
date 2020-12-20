import * as actionTypes from './personsActionTypes';

const initialState = {
    persons: []
}

const personsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state, 
                persons: state.persons.concat(action.person)
            };
        case actionTypes.DELETE:
            return { 
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            };
        default:
            break;
    }
    return state;
} 

export default personsReducer;