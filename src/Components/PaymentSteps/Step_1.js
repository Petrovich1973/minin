import React from 'react'
import classnames from "classnames";

const Step_1 = ({
                    paySystems = {},
                    payments = {},
                    result: {
                        current = 0,
                        paySystem = '',
                        payment = ''
                    },
                    handleChangePayment,
                    handleChangeStep
                }) => (
    <div className="wizard-current">
        <h4>Выберите сумму пополнения</h4>
        <p>
            <button onClick={() => handleChangeStep(0)}>Назад</button>
            <button onClick={() => handleChangeStep(2)}>Далее</button>
        </p>
        <ul className="paymentList">
            {Object.keys(payments).map((pay, idx) => {
                const isActive = payment === +pay
                return (
                    <li
                        key={idx}
                        onClick={() => handleChangePayment(+pay)}
                        className={classnames({'active': isActive})}>
                        <strong>{pay}</strong>
                        <span>(+ ${payments[pay].bonus} bonus)</span>
                    </li>
                )
            })}
        </ul>
        <p><
            label><em>Или введите свою сумму</em></label>
            <input
                className="input"
                value={payment}
                placeholder={'$ 1 000 000 000'}
                onChange={e => {
                    if (Number.isInteger(+e.target.value.trim())) {
                        handleChangePayment(+e.target.value.trim())
                    }
                }}
                onKeyDown={e => {
                    if (e.keyCode === 13) {
                        handleChangeStep(2)
                    }
                }}/>
        </p>
    </div>
)

export default Step_1