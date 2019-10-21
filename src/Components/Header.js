import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <header>
        <div>
            <div className="app-logo">
                <Link to={'/'}>Logo.type</Link>
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
                    <li className="medium-hide1000">
                        <Link to="/profile"><i className="fa fa-angle-down color-green"/>
                            <nobr className="color-green">5% комиссия</nobr>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="user">
                <div className="user-balance">
                    <nobr>2 000.34</nobr>
                </div>
                <div className="user-avatar"/>
                <div className="user-name" title="minin-deniska@gmail.com">
                    <nobr>minin-deniska@gmail.com</nobr>
                </div>
                <div className="drop-down">
                    <ul>
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
            </div>
            <div className="nav">
                <ul className="navbar">
                    {/*<li className="medium-hide768">
                        <a href="/"><i className="fa fa-user-o"/>
                            <nobr>You profile</nobr>
                        </a>
                    </li>*/}
                    <li className="medium-hide1000">
                        <Link to="/settings"><i className="fa fa-cogs"/>
                            <nobr>Settings</nobr>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="align-right">
            <a className="logout" href="/">Log out</a>
        </div>
    </header>
)

export default Header