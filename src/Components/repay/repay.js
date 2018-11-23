import React from 'react';
import { connect } from 'react-redux';
import * as service from '../../API/service'

class Repay extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
        this.repalyVal = service.createRepayTable(this.props.loanDetails.loanDetails[0].weeks,this.props.loanDetails.loanDetails[0].outstandingAmount);
    }


    listView(data, index){
        return (
            <tr key={index}>
                <td>{data.Week}</td>
                <td>{service.currencyFormator(data.Repaying_Amount)}</td>
                <td>{service.currencyFormator(data.Remaing_to_Pay)}</td>
                <td>{service.currencyFormator(data.To_Pay)}</td>
                <td><button className="button orange">Pay</button></td>
            </tr>
        )
      }

    render(){
        return(
            <div className="main-section">
            <div className="loan">
            <h2 className='text-center'>Repaying Amount Details</h2>
            <div className='text-center'>Get the details in the below table</div>
            <div className="clear"></div>
            <div className="line"></div>
            <table className="zui-table form-caption template">
               <thead>
                  <tr>
                     <th>Week</th>
                     <th>Amount to Pay</th>
                     <th>OutStanding Amount</th>
                     <th>To Pay</th>
                     <th>Pay</th>
                  </tr>
               </thead>
               <tbody>
               {this.repalyVal.map((data, i) => this.listView(data, i))}
               </tbody>
            </table>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        loanDetails: state
    }
  };

export default connect(mapStateToProps)(Repay);