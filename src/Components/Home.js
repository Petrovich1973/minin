import React from 'react'
import {Link} from 'react-router-dom'
import {UserConsumer} from '../UserContext'

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
                                <Link to={'/mode-buy'}><span>Купить</span></Link>
                            </li>
                            <li>
                                <Link to={'/mode-change'}><span>Обменять</span></Link>
                            </li>
                            <li>
                                <Link to={'/mode-market'}><span>Продать</span></Link>
                            </li>
                            <li>
                                <Link to={'/mode-move-to-steam'}><span>Вывести в Steam</span></Link>
                            </li>
                        </ul>
                    </main>
                )
            }}
        </UserConsumer>
    )
}

export default Home