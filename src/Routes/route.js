import React from 'react'
import {Switch,Route} from 'react-router-dom'
import loan from '../Components/loan/loan'
import repay from '../Components/repay/repay'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"


export default class Main extends React.Component{
    constructor(props){
        super();
        this.state = {};
    }
    render(){
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={loan}/>
                    <Route path='/repay' component={repay}/>
                </Switch>
            </main>
        )
    }

}