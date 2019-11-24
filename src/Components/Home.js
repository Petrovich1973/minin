import React from 'react'
import {Link} from 'react-router-dom'
import {UserConsumer} from '../UserContext'
import IconBuy from "./Icons/IconBuy";
import IconChange from "./Icons/IconChange";
import IconSell from "./Icons/IconSell";
import IconWithdraw from "./Icons/IconWithdraw";

const Home = () => {

    return (
        <UserConsumer>
            {props => {
                const {user} = props

                const styles = {
                    background: user.background,
                    color: user.color
                }

                return (
                    <main id="home" style={{...styles}}>
                        <h2 className="align-center">Выберите действие</h2>
                        <ul className="select-action">
                            <li>
                                <Link to={'/mode-buy'}><IconBuy/><span>Купить</span></Link>
                            </li>
                            <li>
                                <Link to={'/mode-change'}><IconChange/><span>Обменять</span></Link>
                            </li>
                            <li>
                                <Link to={'/mode-market'}><IconSell/><span>Продать</span></Link>
                            </li>
                            <li>
                                <Link to={'/mode-move-to-steam'}><IconWithdraw/><span>Вывести в Steam</span></Link>
                            </li>
                        </ul>
                    </main>
                )
            }}
        </UserConsumer>
    )
}

export default Home