import { combineReducers } from 'redux';
import loanDetails from './loanReducer';

export default combineReducers({
    loanDetails: loanDetails
});