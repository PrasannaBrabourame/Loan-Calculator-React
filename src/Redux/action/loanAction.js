import * as actionTypes from './actionType';

  export const saveLoan = (loanDetails) => {
    return {
      type: actionTypes.SAVE_LOAN_DETAILS,
      loanDetails: loanDetails
    }
  };