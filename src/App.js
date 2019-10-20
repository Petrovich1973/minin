import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ModeChange from "./Components/ModeChange";
import Home from "./Components/Home";
import ModeMarket from "./Components/ModeMarket";

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/mode-change' component={ModeChange}/>
                <Route path='/mode-market' component={ModeMarket}/>
            </Switch>
            <Footer/>
        </React.Fragment>
    </BrowserRouter>
)

export default App;
