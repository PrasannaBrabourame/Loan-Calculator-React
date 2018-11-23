import React, { Component } from 'react';
import './App.css';
import Main from './Routes/route';


class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <a href="#test">
                <img src="https://aspire-cap.com/static/images/logo.png" alt="Logo" className="logo"/>
            </a>
            <div className="headerRight">
                <div></div>
                <button type="button" className="btn">
                    <span>Loan Repayments</span>
                </button>
            </div>
            
        </div>
        <Main/>
    </div>
      
    );
  }
}

export default App;
