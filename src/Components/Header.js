import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({user}) => (
    <header>
        <div>
            <div className="app-logo">
                <Link to={'/'}>Logo$type</Link>
            </div>
        </div>
        <div className="group-center">
            <div className="nav">
                <ul className="navbar">
                    <li className="medium-hide768">
                        <Link to="/faq"><i className="fa fa-question-circle-o"/>
                            <nobr>F.A.Q.</nobr>
                        </Link>
                    </li>
                    {user.auth ? <li className="medium-hide1000">
                        <Link to="/profile"><i className="fa fa-angle-double-down color-green"/>
                            <nobr className="color-green">5% комиссия</nobr>
                        </Link>
                    </li> : null}
                </ul>
            </div>
            {user.auth ? <div className="user">
                <div className="user-balance">
                    <nobr>2 000.34</nobr>
                </div>
                <div className="user-avatar">
                    <img src={user.avatar_img} alt=""/>
                </div>
                <div className="user-name" title={user.login || "minin-deniska@gmail.com"}>
                    <nobr>{user.login || "minin-deniska@gmail.com"}</nobr>
                </div>
                <div className="drop-down">
                    <ul>
                        <li>
                            <Link to="/replenish-balance">
                                <i className="fa fa-plus-circle"/>
                                <span>Пополнить баланс</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <i className="fa fa-user-o"/>
                                <span>You profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/transactions">
                                <i className="fa fa-exchange"/>
                                <span>Проведенные транзакции</span>
                            </Link>
                        </li>
                        <li className="box-green">
                            <i className="fa fa-check"/>
                            <span>Ссылка на обмен</span>
                        </li>
                    </ul>
                </div>
            </div> : null}
            {user.auth ? <div className="nav">
                <ul className="navbar">
                    <li className="medium-hide1000">
                        <Link to="/settings"><i className="fa fa-cogs"/>
                            <nobr>View settings</nobr>
                        </Link>
                    </li>
                </ul>
            </div> : null}
        </div>
        <div className="align-right">
            {user.auth ? <a className="logout" href="/">Log out</a> : null}
        </div>
    </header>
)

export default Header