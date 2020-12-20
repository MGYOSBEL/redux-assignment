import { combineReducers } from "redux";
import personsReducer from './personsReducer';

const rootReducer = combineReducers(
    {
        persons: personsReducer
    }
);

export default rootReducer;