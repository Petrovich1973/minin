import React from 'react'
import {UserConsumer} from '../UserContext'

const options = {
    skinSize: [
        {label: 'Малюсенький', value: 0},
        {label: 'Средненький', value: 1},
        {label: 'Как у слона', value: 2},
    ]
}

const Settings = () => {

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
                                        <td>Отображать Float на скинах</td>
                                        <td>
                                            {user.isVisibleFloat ?
                                                <i
                                                    className="icon fa fa-toggle-on pointer"
                                                    onClick={() => handleChangeLogin({
                                                        ...user,
                                                        isVisibleFloat: !user.isVisibleFloat
                                                    })}/> :
                                                <i
                                                    className="icon fa fa-toggle-off pointer"
                                                    onClick={() => handleChangeLogin({
                                                        ...user,
                                                        isVisibleFloat: !user.isVisibleFloat
                                                    })}/>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Вклчить виртуальный обмен</td>
                                        <td>
                                            {user.virtualExchange ?
                                                <i
                                                    className="icon fa fa-toggle-on pointer"
                                                    onClick={() => handleChangeLogin({
                                                        ...user,
                                                        virtualExchange: !user.virtualExchange
                                                    })}/> :
                                                <i
                                                    className="icon fa fa-toggle-off pointer"
                                                    onClick={() => handleChangeLogin({
                                                        ...user,
                                                        virtualExchange: !user.virtualExchange
                                                    })}/>}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Размер скинов</td>
                                        <td>
                                            <select
                                                className="select"
                                                value={user.skinSize}
                                                onChange={e => handleChangeLogin({
                                                    ...user,
                                                    skinSize: +e.target.value
                                                })}>
                                                {options.skinSize
                                                    .map((option, i) => (
                                                            <option
                                                                key={i}
                                                                value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        )
                                                    )}
                                            </select>
                                        </td>
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