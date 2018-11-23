import * as actionTypes from '../action/actionType';

export default (state = [], action) => {
    switch (action.type){
      case actionTypes.SAVE_LOAN_DETAILS:
        return action.loanDetails;
      default:
            return state;
    }
    };