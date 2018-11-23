import React from 'react';

export default class Loadcalc extends React.Component{
    constructor(props){
        super(props)
        this.state = {amount:'',week_fees:'',total:'',weeks:1,outstandingAmount:0};
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.currencyFormator = this.currencyFormator.bind(this);
    }
    /**
    * @description Method triggen on state change in week drop down.
    * @param {*} e event
    * @returns No Return
    */
    handleChange(e){
        let curr_weeks = Number(e.target.selectedIndex + 1);
        let week_fees = Number(this.state.amount) * 0.00375;
        let total = (week_fees + Number(this.state.amount)) / Number(curr_weeks);
        let outstandingAmount = Number(this.state.amount) + (Number(curr_weeks) * week_fees)
        this.setState({weeks:curr_weeks,amount: this.state.amount, total:total,week_fees:this.state.week_fees, outstandingAmount:outstandingAmount});
    }
    /**
    * @description Method trigger on amount enter.
    * @param {*} e event
    * @returns No Return
    */
    handleChangeText(e){
        const re = /^[0-9\b]+$/;
        if ((e.target.value === '' || re.test(e.target.value))&& e.target.value.length <= 6) {
            let week_fees = Number(e.target.value) * 0.00375;
            let total = (week_fees + Number(e.target.value)) / Number(this.state.weeks);
            let outstandingAmount = Number(e.target.value) + (Number(this.state.weeks) * week_fees)
            this.setState({ amount: e.target.value, total:total, week_fees:week_fees, outstandingAmount:outstandingAmount });
        }
    }
    /**
     * @description Method to convert numeric value to currency of particular country
     * @param {*} currencyValue Number
     * @returns Currency value
     */
    currencyFormator(currencyValue){
        return new Intl.NumberFormat('en-SG', {style: 'currency', currency: 'SGD',maximumSignificantDigits: 10}).format(currencyValue)
    }

    render(){
        return(
            <div className="main-section">
            <form>
            <div className="loan">
            <h2 className='text-center'>How much can Aspire provide you with?</h2>
            <div className='text-center'>Simply enter an amount you want to draw to find out.</div>
            <div className="form-left app-col-12 form_operation" >
              <div className="form-row">
                <div className="app-col-6 form-left">
                    <label>Say you wanted to draw</label>
                    <input type="text" required name="amount" onChange={(e)=>this.handleChangeText(e)} value={this.state.amount} />
                </div>
                <div className="app-col-6">
                        <label>  Weeks needed for Repayments </label>
                        <select className="dropDown-Week" value={this.state.weeks} onChange={(e)=>this.handleChange(e)}>
                            <option value="1">1 Week</option>
                            <option value="2">2 Weeks</option>
                            <option value="3">3 Weeks</option>
                            <option value="4">4 Weeks</option>
                            <option value="5">5 Weeks</option>
                            <option value="6">6 Weeks</option>
                            <option value="7">7 Weeks</option>
                            <option value="8">8 Weeks</option>
                            <option value="9">9 Weeks</option>
                            <option value="10">10 Weeks</option>
                            <option value="11">11 Weeks</option>
                            <option value="12">12 Weeks</option>
                            <option value="13">13 Weeks</option>
                            <option value="14">14 Weeks</option>
                            <option value="15">15 Weeks</option>
                            <option value="16">16 Weeks</option>
                            <option value="17">17 Weeks</option>
                            <option value="18">18 Weeks</option>
                            <option value="19">19 Weeks</option>
                            <option value="20">20 Weeks</option>
                            <option value="21">21 Weeks</option>
                            <option value="22">22 Weeks</option>
                            <option value="23">23 Weeks</option>
                            <option value="24">24 Weeks</option>
                        </select>
                    {/* </div> */}
                </div>
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
            <div className="line"></div>
            <div className="form_description">
                <div className="app-col-6 form-left">
                    <div className="form-row">
                        <span className="text-x-large">Fees would start at <span className="text-xx-large">{this.currencyFormator(this.state.week_fees)}</span> per week</span>
                    </div>
                </div>
                <div className="app-col-6 border-left">
                    <div className="form-row">
                        <span className="text-x-large">This puts my weekly repayment at</span>
                            <br/>
                        <span className="text-xx-large">{this.currencyFormator(this.state.total)}</span>
                    </div>
                    <div className="form-row">
                        <span className="text-x-large">and brings the total outstanding to </span>
                            <br/>
                        <span className="text-xx-large">{this.currencyFormator(this.state.outstandingAmount)}</span>
                    </div>
                    
                </div>
                <div className="clear"></div>
            </div>
            
          </div>
            <div className="form-caption template">
                <p>*Fees in pricing calculator shows the minimum rate. Fees may vary for each customer. One time origination fees applies. Monthly repayment amount might differ slightly for each month.</p>
            </div>
           <div className="form-row text-center">
              <button className="submit-btn" onClick={() => {}}>
                Apply Now
              </button>
            </div>

            </form>
          </div>
        )
    }
}