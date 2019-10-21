import React from 'react'

const Footer = () => (
    <footer>
        <ul className="links medium-hide768">
            <li>
                <a href="/">Условия использования</a>
            </li>
            <li>
                <a href="/">Bug bounty</a>
            </li>
            <li>
                <a href="/">Политика приватности</a>
            </li>
            <li>
                <a href="/">Сookie policy</a>
            </li>
            <li>
                <a href="/">Вакансии</a>
            </li>
            <li>
                <a href="/">Статистика</a>
            </li>
        </ul>
        <ul className="links medium-hide1000">
            <li className="nav-link pay">
                <i className="fa fa-cc-mastercard"/>
                <i className="fa fa-cc-visa"/>
                <i className="fa fa-money"/>
            </li>
            <li className="nav-link social">
                <i className="fa fa-instagram"/>
                <i className="fa fa-twitter"/>
                <i className="fa fa-vk"/>
                <i className="fa fa-facebook"/>
                <i className="fa fa-steam"/>
            </li>
        </ul>
    </footer>
)

export default Footer