import React from 'react'
import IconBuy from "../Components/Icons/IconBuy"
import IconChange from "../Components/Icons/IconChange"
import IconSell from "../Components/Icons/IconSell"
import IconWithdraw from "../Components/Icons/IconWithdraw"
import Faq from "../pages/Faq"
import ModeBuy from "../pages/ModeBuy"
import ModeChange from "../pages/ModeChange"
import ModeMarket from "../pages/ModeMarket"
import ModeMoveToSteam from "../pages/ModeMoveToSteam"
import Settings from "../pages/Settings"
import Profile from "../pages/Profile"
import Transactions from "../pages/Transactions";
import Replenishment from "../pages/Replenishment";

export const routes = [
    {
        component: ModeBuy,
        path: '/mode-buy',
        label: 'Купить',
        icon: <IconBuy/>
    },
    {
        component: ModeChange,
        path: '/mode-change',
        label: 'Обменять',
        icon: <IconChange/>
    },
    {
        component: ModeMarket,
        path: '/mode-market',
        label: 'Продать',
        icon: <IconSell/>
    },
    {
        component: ModeMoveToSteam,
        path: '/mode-move-to-steam',
        label: 'Вывести в Steam',
        icon: <IconWithdraw/>
    },
    {
        component: Profile,
        path: '/profile',
        label: 'Profile',
        icon: <i className="fa fa-user"/>
    },
    {
        component: Settings,
        path: '/settings',
        label: 'Settings',
        icon: <i className="fa fa-cogs"/>
    },
    {
        component: Faq,
        path: '/faq',
        label: 'FAQ',
        icon: <i className="fa fa-question-circle-o"/>
    },
    {
        component: Transactions,
        path: '/transactions',
        label: 'Проведенные транзакции',
        icon: <i className="fa fa-exchange"/>
    },
    {
        component: Replenishment,
        path: '/balance-replenishment',
        label: 'Пополнение баланса',
        icon: <i className="fa fa-dollar"/>
    },
]