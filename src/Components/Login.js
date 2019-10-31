import React, {useEffect, useState} from 'react'

const Login = ({user, handleChangeLogin}) => {

    const [data, setData] = useState({
        login: '',
        password: ''
    })

    useEffect(() => {

        // eslint-disable-next-line
    }, [])

    const isDisabled = Object.keys(data).some(item => data[item].length < 3)

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">Авторизация</h3>

                <div className="form-authorization">
                    <div>
                        <label>Login</label>
                        <input
                            type="text"
                            value={data.login}
                            onChange={e => setData({...data, login: e.target.value.trim()})}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={data.password}
                            onChange={e => setData({...data, password: e.target.value.trim()})}/>
                    </div>
                    <div>
                        <button
                            onClick={() => handleChangeLogin({...user, auth: true, ...data})}
                            disabled={isDisabled}
                            style={{padding: '1rem'}}
                            className="btn login">Войти</button>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Login