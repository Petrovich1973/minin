import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import store from './store'
import App from './App'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)