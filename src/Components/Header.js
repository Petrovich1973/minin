import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({user = {
    auth: false,
    login: 'UserLogin',
    password: 'password',
    avatar_img: 'https://cdn.pixabay.com/photo/2016/11/24/21/39/sexy-1857310_960_720.jpg'
}}) => (
    <header>
        <div>
            <div className="app-logo">
                <Link to={'/'}>Logo$type</Link>
            </div>
        </div>
        <div className="group-center">
            <div className="nav">
                <ul className="navbar">
                    {user.auth ? <li className="medium-hide1000">
                        <Link to="/profile"><i className="fa fa-angle-double-down color-green"/>
                            <nobr className="color-green">5% комиссия</nobr>
                        </Link>
                    </li> : null}
                </ul>
            </div>
            {user.auth ? <div className="user">
                <div className="user-balance">
                    <nobr>$ 2 000.34</nobr>
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
                            <Link className="item" to="/replenish-balance">
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
            </div> : null}
        </div>
        <div className="align-right">
            {user.auth ? <Link className="logout" to="/">Log out</Link> : null}
        </div>
    </header>
)

export default Header