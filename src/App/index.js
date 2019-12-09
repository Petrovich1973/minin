import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import {routes} from './routes'
import './App.scss'
//////////
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Sidebar from "../Components/Sidebar"
//////////
import NotFound from "../pages/NotFound"
//////////
// const appName = 'mininDenisApp'
//////////

const App = () => {

    // useEffect(() => {
    //
    //     const ls = localStorage.getItem(appName)
    //
    //     if (ls) {
    //         const payload = JSON.parse(ls)
    //         dispatch({
    //             type: 'USER_CURRENT_UPDATE',
    //             payload
    //         })
    //     } else {
    //         localStorage.setItem(appName, JSON.stringify({...userCurrent}))
    //     }
    //
    //     // eslint-disable-next-line
    // }, [])


    return (
        <BrowserRouter>
            <>
                <Header/>

                <div className="main">

                    <Sidebar/>

                    <Switch>
                        <Redirect exact from="/" to="/profile"/>
                        {routes.map((route, i) => (
                            <Route key={i} path={route.path} component={route.component}/>
                        ))}
                        <Route component={NotFound}/>
                    </Switch>

                </div>

                <Footer/>
            </>
        </BrowserRouter>
    )
}

export default App;
