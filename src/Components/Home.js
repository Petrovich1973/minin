import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
    <main id="home">
        <h2>Выберите действие</h2>
        <ul className="select-action">
            <li>
                <Link to={'/mode-change'}><span>Купить у бота</span></Link>
            </li>
            <li>
                <Link to={'/mode-change'}><span>Обменять</span></Link>
            </li>
            <li>
                <Link to={'/mode-market'}><span>Продать</span></Link>
            </li>
            <li>
                <Link to={'/mode-change'}><span>Вывести в Steam</span></Link>
            </li>
        </ul>
    </main>
)

export default Home