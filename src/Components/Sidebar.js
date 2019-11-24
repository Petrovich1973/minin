import React from 'react'
import {Link} from 'react-router-dom'
import IconChange from "./Icons/IconChange"
import IconBuy from "./Icons/IconBuy"
import IconSell from "./Icons/IconSell"
import IconWithdraw from "./Icons/IconWithdraw"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <p><Link to={'/mode-buy'}><IconBuy/></Link></p>
            <p><Link to={'/mode-change'}><IconChange/></Link></p>
            <p><Link to={'/mode-market'}><IconSell/></Link></p>
            <p><Link to={'/mode-move-to-steam'}><IconWithdraw/></Link></p>
            <hr/>
            <div>
                <p className="align-center" style={{fontSize: 32}}>
                    <Link to="/faq"><i className="fa fa-question-circle-o"/></Link>
                </p>
                <p className="align-center" style={{fontSize: 32}}>
                    <Link to="/settings"><i className="fa fa-cogs"/></Link>
                </p>
                <p className="align-center">
                    <Link to="/profile">RU</Link>
                </p>
                <p className="align-center" style={{fontSize: 32}}>
                    <Link to="/profile"><i className="fa fa-usd"/></Link>
                </p>
            </div>
        </div>


    )
}

export default Sidebar