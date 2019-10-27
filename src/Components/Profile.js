import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const Profile = () => {

    useEffect(() => {

        const elements = document.querySelectorAll('.drop-down')
        elements.forEach(el => {
            el.style.display = 'none'
            setTimeout(() => el.style.display = null, 100)
        })

        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">You profile</h3>

                <div className="profile-page container">
                    <div>
                        <div className="avatar">
                            <img
                                src={/*`data:image/png;base64,
                                    iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcS
                                    JAAAADUlEQVR42mNsaGj8DwAFiwKCS2XWTgAAAABJRU5ErkJggg==`*/'https://cdn.pixabay.com/photo/2016/11/24/21/39/sexy-1857310_960_720.jpg'}
                                width={500}
                                height={500}
                                alt=""/>
                        </div>
                    </div>
                    <div className="list-scroll" style={{flex: 1}}>
                        <div className="metrics">
                            <table>
                                <tbody>
                                <tr>
                                    <td>Login</td>
                                    <td><i className="fa fa-edit"/></td>
                                    <td>minin-deniska@gmail.com</td>
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
                                    <td><Link to={'/transactions'}>Транзакции</Link></td>
                                    <td/>
                                    <td/>
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