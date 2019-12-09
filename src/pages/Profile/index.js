import React from 'react'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import './Profile.scss'

const Profile = ({profile = {}, dispatch}) => {
    return (
        <main>
            <div className="Profile">
                <h1 className="title-block row-group">Profile</h1>
                <div className="block">
                    <div>
                        <div className="avatar">
                            <img
                                src={profile.avatar}
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
                                    <td>
                                        <input
                                            className="input"
                                            value={profile.login || ''}
                                            onChange={e => (
                                                dispatch({
                                                    type: 'USER_CURRENT_UPDATE',
                                                    payload: {login: e.target.value}
                                                })
                                            )}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Баланс</td>
                                    <td><i className="fa fa-plus-circle"/></td>
                                    <td>{profile.currency} {profile.balance}</td>
                                </tr>
                                <tr>
                                    <td>Бонус -2% комиссии</td>
                                    <td/>
                                    <td>
                                        {profile.bonus ?
                                            <i className="fa fa-check color-green"/> :
                                            <span>—</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Steam Guard</td>
                                    <td/>
                                    <td>
                                        {profile.steamGuard ?
                                            <i className="fa fa-check color-green"/> :
                                            <span>—</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Trade URL</td>
                                    <td><i className="fa fa-edit"/></td>
                                    <td>
                                        <input
                                            className="input"
                                            value={profile.tradeUrl || ''}
                                            onChange={e => (
                                                dispatch({
                                                    type: 'USER_CURRENT_UPDATE',
                                                    payload: {tradeUrl: e.target.value}
                                                })
                                            )}/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Seller Link</td>
                                    <td><i className="fa fa-copy"/></td>
                                    <td>{profile.sellerLink}</td>
                                </tr>
                                <tr>
                                    <td>SteamID64</td>
                                    <td/>
                                    <td>{profile.steamID64}</td>
                                </tr>
                                <tr>
                                    <td>Язык</td>
                                    <td/>
                                    <td>{profile.language}</td>
                                </tr>
                                <tr>
                                    <td>Валюта</td>
                                    <td/>
                                    <td>{profile.currency}</td>
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

const mapStateToProps = state => {
    return {
        profile: state.user
    }
}

export default connect(mapStateToProps)(Profile)