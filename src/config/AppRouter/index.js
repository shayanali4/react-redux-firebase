import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterPage from '../../components/Register';
import SignInPage from '../../components/SignIn';
import Home from '../../components/Home'

export default class Routers extends Component {
       render() {
        return (
            <div className="main">
                <Router>
                    <Route path='/' exact component={Home} />
                    <Route path='/Register'  component={RegisterPage} />
                    <Route path='/Signin'  component={SignInPage} />
                </Router>
            </div>    
       )
    }
}