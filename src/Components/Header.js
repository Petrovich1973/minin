import React from 'react'
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";

const Header = ({user: {
                    login = 'UserLogin',
                    avatar = 'https://cdn.pixabay.com/photo/2016/11/24/21/39/sexy-1857310_960_720.jpg',
                    balance = '',
                    currency = ''
                }}) => (
    <header>
        <div>
            <div className="app-logo">
                <span>Logo$type</span>
            </div>
        </div>
        <div className="group-center">
            <div className="nav">
                <ul className="navbar">
                    <li className="medium-hide1000">
                        <Link to="/profile"><i className="fa fa-angle-double-down color-green"/>
                            <nobr className="color-green">5% комиссия</nobr>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="user">
                <div className="user-balance">
                    <nobr>{currency} {balance}</nobr>
                </div>
                <div className="user-avatar">
                    <img src={avatar} alt=""/>
                </div>
                <div className="user-name" title={login || "minin-deniska@gmail.com"}>
                    <nobr>{login || "minin-deniska@gmail.com"}</nobr>
                </div>
                <div className="drop-down">
                    <ul>
                        <li>
                            <Link className="item" to="/balance-replenishment">
                                <i className="fa fa-plus-circle"/>
                                <nobr>Пополнить баланс</nobr>
                            </Link>
                        </li>
                        <li>
                            <Link className="item" to="/profile">
                                <i className="fa fa-user-o"/>
                                <nobr>You profile</nobr>
                            </Link>
                        </li>
                        <li>
                            <Link className="item" to="/transactions">
                                <i className="fa fa-exchange"/>
                                <nobr>Проведенные транзакции</nobr>
                            </Link>
                        </li>
                        <li className="item box-green">
                            <i className="fa fa-check"/>
                            <nobr>Ссылка на обмен</nobr>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="align-right">
            <Link className="logout" to="/">Log out</Link>
        </div>
    </header>
)

const mapStateToProps = function(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Header)