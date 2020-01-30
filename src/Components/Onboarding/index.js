import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

const Onboarding = ({login = '', tradeUrl = '', dispatch}) => {
    const [tradeUrlValue, setTradeUrlValue] = useState('')
    useEffect(() => {
        setTradeUrlValue(tradeUrl)
    }, [tradeUrl])
    const onClick = value => dispatch({
        type: "USER_CURRENT_UPDATE",
        payload: {
            ...value
        }
    })
    return (
        <div className="onboarding">
            {!login ? <div>
                    <h2>Авторизуйтесь через Steam</h2>
                    <p>
                        <button className="btn" onClick={() => onClick({login: 'user@gmail.com'})}>
                            <span>Авторизация через Steam</span>
                        </button>
                    </p>
                </div> :
                <div>
                    <h3>{login}</h3>
                    <h2>Введите ссылку на обмен</h2>
                    <p className="group">
                        <small>ссылка на обмен</small>
                        <input
                            className="input"
                            value={tradeUrlValue}
                            onChange={e => setTradeUrlValue(e.target.value)}/>
                        <button className="btn" onClick={() => onClick({tradeUrl: tradeUrlValue.trim()})}>
                            <span>Сохранить</span>
                        </button>
                    </p>
                </div>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state.user
    }
}

export default connect(mapStateToProps)(Onboarding)