const createRepayTable =  (weeks, outStandingAmount) =>{
    var singleRepayValu = outStandingAmount /weeks;
    var repayObj = [];
    for (let i = 0; i < weeks; i++) {
        outStandingAmount =  outStandingAmount - singleRepayValu
        repayObj.push({'Week':i+1, 'Repaying_Amount':(singleRepayValu * (i+1)),'Remaing_to_Pay':outStandingAmount,'To_Pay':singleRepayValu});
    }
    return repayObj
}

    /**
     * @description Method to convert numeric value to currency of particular country
     * @param {*} currencyValue Number
     * @returns Currency value
     */
const currencyFormator = (currencyValue) =>{
    return new Intl.NumberFormat('en-SG', {style: 'currency', currency: 'SGD',maximumSignificantDigits: 10}).format(currencyValue)
}

module.exports = {
    createRepayTable, 
    currencyFormator,
};