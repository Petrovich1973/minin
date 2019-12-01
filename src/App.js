import React, {useEffect, useState} from 'react'
import {UserProvider} from './UserContext'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.scss'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import ModeChange from "./Components/ModeChange"
import Home from "./Components/Home"
import ModeMarket from "./Components/ModeMarket"
import ModeBuy from "./Components/ModeBuy"
import ModeMoveToSteam from "./Components/ModeMoveToSteam"
import Transactions from "./Components/Transactions"
import Profile from "./Components/Profile"
import Settings from "./Components/Settings"
import Faq from "./Components/Faq"
import NotFound from "./Components/NotFound"
import ReplenishBalance from "./Components/ReplenishBalance"
import Sidebar from "./Components/Sidebar"

const appName = 'mininDenisApp'

const App = () => {

    useEffect(() => {

        const ls = localStorage.getItem(appName)

        if(ls) {
            const payload = JSON.parse(ls)
            setUser(user => ({
                ...user,
                ...payload
            }))
        } else {
            localStorage.setItem(appName, JSON.stringify({}))
        }

        // eslint-disable-next-line
    }, [])

    const [user, setUser] = useState({
        auth: false,
        login: null,
        password: null,
        avatar_img: 'https://cdn.pixabay.com/photo/2016/11/24/21/39/sexy-1857310_960_720.jpg',
        background: 'transparent',
        color: 'inherit',
        isVisibleFloat: true,
        virtualExchange: true,
        skinSize: 1
    })

    const handleChangeLogin = value => {
        setUser(value)
        localStorage.setItem(appName, JSON.stringify({...value}))
    }


    return (
        <UserProvider value={{user, handleChangeLogin}}>
            <BrowserRouter>
                <>
                    <Header {...{user}}/>

                    <div className="main">

                        <Sidebar/>

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
                            <Route path='/replenish-balance' component={ReplenishBalance}/>
                            <Route path='**' component={NotFound}/>
                        </Switch>

                    </div>

                    <Footer/>
                </>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App;
