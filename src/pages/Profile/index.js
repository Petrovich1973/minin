import React, {useReducer} from 'react'
import {Link} from "react-router-dom"
import './Profile.scss'
import {initializeUserCurrent, stateUserCurrent} from "../../App/reducerUserCurrent"

const Profile = () => {
    const [userCurrent] = useReducer(stateUserCurrent, initializeUserCurrent)
    return (
        <main>
            <div className="Profile">
                <h1 className="title-block row-group">Profile</h1>
                <div className="block">
                    <div>
                        <div className="avatar">
                            <img
                                src={userCurrent.avatar}
                                alt=""/>
                        </div>
                    </div>
                    <div className="list-scroll">
                        <div className="metrics">
                            <table>
                                <tbody>
                                <tr>
                                    <td>Login</td>
                                    <td><i className="fa fa-edit"/></td>
                                    <td>{userCurrent.login || 'minin-deniska@gmail.com'}</td>
                                </tr>
                                <tr>
                                    <td>Баланс</td>
                                    <td><i className="fa fa-plus-circle"/></td>
                                    <td>{userCurrent.currency} {userCurrent.balance}</td>
                                </tr>
                                <tr>
                                    <td>Бонус -2% комиссии</td>
                                    <td/>
                                    <td>
                                        {userCurrent.bonus ?
                                            <i className="fa fa-check color-green"/> :
                                            <span>—</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Steam Guard</td>
                                    <td/>
                                    <td>
                                        {userCurrent.steamGuard ?
                                            <i className="fa fa-check color-green"/> :
                                            <span>—</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trade URL</td>
                                    <td><i className="fa fa-edit"/></td>
                                    <td>{userCurrent.tradeUrl}</td>
                                </tr>
                                <tr>
                                    <td>Seller Link</td>
                                    <td><i className="fa fa-copy"/></td>
                                    <td>{userCurrent.sellerLink}</td>
                                </tr>
                                <tr>
                                    <td>SteamID64</td>
                                    <td/>
                                    <td>{userCurrent.steamID64}</td>
                                </tr>
                                <tr>
                                    <td>Язык</td>
                                    <td/>
                                    <td>{userCurrent.language}</td>
                                </tr>
                                <tr>
                                    <td>Валюта</td>
                                    <td/>
                                    <td>{userCurrent.currency}</td>
                                </tr>
                                <tr>
                                    <td>History</td>
                                    <td/>
                                    <td>
                                        <Link className="color-light" to={'/transactions'}>Транзакции</Link>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Profile