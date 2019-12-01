import React from 'react'
import {NavLink} from 'react-router-dom'
import IconChange from "./Icons/IconChange"
import IconBuy from "./Icons/IconBuy"
import IconSell from "./Icons/IconSell"
import IconWithdraw from "./Icons/IconWithdraw"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <p>
                <NavLink title="Купить" to={'/mode-buy'}>
                    <IconBuy/>
                </NavLink>
            </p>
            <p>
                <NavLink title="Обменять" to={'/mode-change'}>
                    <IconChange/>
                </NavLink>
            </p>
            <p>
                <NavLink title="Продать" to={'/mode-market'}>
                    <IconSell/>
                </NavLink>
            </p>
            <p>
                <NavLink title="Вывести в Steam" to={'/mode-move-to-steam'}>
                    <IconWithdraw/>
                </NavLink>
            </p>
            <hr/>
            <div>
                <p className="align-center" style={{fontSize: 32}}>
                    <NavLink
                        title="Вопросы и ответы"
                        to="/faq">
                        <i className="fa fa-question-circle-o"/>
                    </NavLink>
                </p>
                <p className="align-center" style={{fontSize: 32}}>
                    <NavLink
                        title="Настройки"
                        to="/settings">
                        <i className="fa fa-cogs"/>
                    </NavLink>
                </p>
                <p className="align-center">
                    <NavLink
                        title="Изменить язык"
                        to="/profile">RU</NavLink>
                </p>
                <p className="align-center" style={{fontSize: 32}}>
                    <NavLink
                        title="Изменить валюту"
                        to="/profile"><i className="fa fa-usd"/></NavLink>
                </p>
            </div>
        </div>


    )
}

export default Sidebar