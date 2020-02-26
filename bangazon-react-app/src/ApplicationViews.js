import React, { Component } from 'react';
import {Route, Redirect} from "react-router-dom";
import Home from './components/home/Home.js'
import SellForm from './components/home/OrderForm'
import Location from './components/home/Location'
import Register from './components/auth/register.js';



class ApplicationViews extends Component {
    render() {
        console.log("AppViews props", this.props)
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />

                <Route exact path="/register" render={(props) => {
                    return <Register 
                                {...props}
                                {...this.props}/>
                }} />

                <Route exact path="/sell" render={(props) => {
                    if (this.props.user) {
                        return <SellForm />
                        } else {
                            return <Redirect to="/login" />
                        }
                }} />

                <Route exact path="/location" render={(props) => {
                    return <Location />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews;