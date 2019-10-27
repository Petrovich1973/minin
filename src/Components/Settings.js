import React, {useEffect} from 'react'
import {UserConsumer} from '../UserContext'

const Settings = () => {

    useEffect(() => {

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

                return (
                    <main>
                        <div style={{flex: 1, ...styles}}>

                            <h3 className="title-block row-group">View Settings</h3>

                            <div className="settings-page container list-scroll" style={{flex: 1}}>
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>Avatar</td>
                                        <td><input
                                            type="text"
                                            className="input"
                                            onChange={e => handleChangeLogin({
                                                ...user,
                                                avatar_img: e.target.value
                                            })}
                                            value={user.avatar_img}/></td>
                                    </tr>
                                    <tr>
                                        <td>Background-color</td>
                                        <td><input
                                            type="text"
                                            className="input"
                                            onChange={e => handleChangeLogin({
                                                ...user,
                                                background: e.target.value
                                            })}
                                            value={user.background}/></td>
                                    </tr>
                                    <tr>
                                        <td>Font Color</td>
                                        <td><input
                                            type="text"
                                            className="input"
                                            onChange={e => handleChangeLogin({
                                                ...user,
                                                color: e.target.value
                                            })}
                                            value={user.color}/></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                )
            }}
        </UserConsumer>
    )
}

export default Settings