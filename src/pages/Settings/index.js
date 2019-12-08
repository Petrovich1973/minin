import React, {useReducer} from 'react'
import classnames from 'classnames'
import './Settings.scss'
import {initializeSettings, stateSettings} from "./reducerSettings"

const options = {
    skinSize: [
        {label: 'Малюсенький', value: 0},
        {label: 'Средненький', value: 1},
        {label: 'Как у слона', value: 2},
    ]
}

const Settings = () => {
    const [settings, dispatch] = useReducer(stateSettings, initializeSettings)
    return (
        <main className="Settings">
            <div>

                <h1 className="title-block row-group">Settings</h1>

                <div className="list-scroll">
                    <div className="flexCenter">
                        <table>
                            <tbody>
                            <tr>
                                <td>Отображать Float на скинах</td>
                                <td>
                                    <i
                                        className={classnames("icon pointer fa",
                                            settings.isVisibleFloat ?
                                                'fa-toggle-on' :
                                                'fa-toggle-off')}
                                        onClick={() => dispatch({
                                            type: 'SETTINGS_UPDATE',
                                            payload: {isVisibleFloat: !settings.isVisibleFloat}
                                        })}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Вклчить виртуальный обмен</td>
                                <td>
                                    <i
                                        className={classnames("icon pointer fa",
                                            settings.virtualExchange ?
                                                'fa-toggle-on' :
                                                'fa-toggle-off')}
                                        onClick={() => dispatch({
                                            type: 'SETTINGS_UPDATE',
                                            payload: {virtualExchange: !settings.virtualExchange}
                                        })}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Размер скинов</td>
                                <td>
                                    <select
                                        className="select"
                                        value={settings.skinSize}
                                        onChange={e => dispatch({
                                            type: 'SETTINGS_UPDATE',
                                            payload: {skinSize: +e.target.value}
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
            </div>
        </main>
    )
}

export default Settings