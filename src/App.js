import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ModeChange from "./Components/ModeChange";
import Home from "./Components/Home";
import ModeMarket from "./Components/ModeMarket";
import ModeBuy from "./Components/ModeBuy";
import ModeMoveToSteam from "./Components/ModeMoveToSteam";
import Transactions from "./Components/Transactions";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";
import Faq from "./Components/Faq";

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/mode-change' component={ModeChange}/>
                <Route path='/mode-market' component={ModeMarket}/>
                <Route path='/mode-buy' component={ModeBuy}/>
                <Route path='/mode-move-to-steam' component={ModeMoveToSteam}/>
                <Route path='/transactions' component={Transactions}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/faq' component={Faq}/>
            </Switch>
            <Footer/>
        </React.Fragment>
    </BrowserRouter>
)

export default App;
