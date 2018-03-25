import React, {Component} from 'react';
import './App.css';
import Homepage from "./modules/Homepage/Homepage";
import AboutMe from "./modules/AboutMe/AboutMe";
import {Route, Switch} from "react-router-dom";
import MenuHeader from "./modules/Header/MenuHeader/MenuHeader";
import Footer from "./modules/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div>
                <MenuHeader/>
                <Switch>
                    <Route exact path='/' component={Homepage}/>
                    <Route path='/about' component={AboutMe}/>
                </Switch>

                <Footer/>
            </div>
        );
    }
}

export default App;
