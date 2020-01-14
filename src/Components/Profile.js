import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {UserConsumer} from '../UserContext'

const Profile = () => {

    const [modeEditLogin, setModeEditLogin] = useState(false)

    useEffect(() => {

        const elements = document.querySelectorAll('.drop-down')
        elements.forEach(el => {
            el.style.display = 'none'
            setTimeout(() => el.style.display = null, 100)
        })

        // eslint-disable-next-line
    }, [])

    return (
        <UserConsumer>
            {props => {
                const {user, handleChangeLogin} = props

                const styles = {
                    background: user.background,
                    color: user.color
                }

                const handleDown = e => {
                    if (e.keyCode === 13) {
                        setModeEditLogin(false)
                    }
                }

                return (
                    <main>
                        <div style={{flex: 1, ...styles}}>

                            <h3 className="title-block row-group">You profile</h3>

                            <div className="profile-page container">
                                <div>
                                    <div className="avatar">
                                        <img
                                            src={user.avatar_img}
                                            alt=""/>
                                    </div>
                                </div>
                                <div className="list-scroll" style={{flex: 1}}>
                                    <div className="metrics">
                                        <table>
                                            <tbody>
                                            <tr>
                                                <td>Login</td>
                                                <td>
                                                    {!modeEditLogin ?
                                                        <i
                                                            className="fa fa-edit pointer"
                                                            onClick={() => setModeEditLogin(true)}/> :
                                                        null}
                                                </td>
                                                <td>{modeEditLogin ?
                                                    <input
                                                        className="input"
                                                        type="text"
                                                        value={user.login}
                                                        onKeyDown={handleDown}
                                                        onBlur={() => setModeEditLogin(false)}
                                                        onChange={e => handleChangeLogin({
                                                            ...user,
                                                            login: e.target.value.trim()
                                                        })}/> :
                                                    <span>{user.login || 'minin-deniska@gmail.com'}</span>}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Баланс</td>
                                                <td><i className="fa fa-plus-circle"/></td>
                                                <td>$ 2 000.34</td>
                                            </tr>
                                            <tr>
                                                <td>Бонус -2% комиссии</td>
                                                <td/>
                                                <td><i className="fa fa-check color-green"/></td>
                                            </tr>
                                            <tr>
                                                <td>Steam Guard</td>
                                                <td/>
                                                <td><i className="fa fa-check color-green"/></td>
                                            </tr>
                                            <tr>
                                                <td>Trade URL</td>
                                                <td><i className="fa fa-edit"/></td>
                                                <td>https://steamcommunity.com/traseoffer/new/?partner=34676787&token=Wk4u9PHw</td>
                                            </tr>
                                            <tr>
                                                <td>Seller Link</td>
                                                <td><i className="fa fa-copy"/></td>
                                                <td>https://steamcommunity.com/traseoffer/new/?partner=34676787&token=Wk4u9PHw</td>
                                            </tr>
                                            <tr>
                                                <td>SteamID64</td>
                                                <td/>
                                                <td>76561197998942485</td>
                                            </tr>
                                            <tr>
                                                <td>Язык</td>
                                                <td/>
                                                <td>RU</td>
                                            </tr>
                                            <tr>
                                                <td>Валюта</td>
                                                <td/>
                                                <td>$</td>
                                            </tr>
                                            <tr>
                                                <td>History</td>
                                                <td/>
                                                <td><Link className="color-light" to={'/transactions'}>Транзакции</Link></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                )
            }}
        </UserConsumer>
    )
}

export default Profile