import React from 'react'
import classnames from "classnames";

const Step_0 = ({
                    paySystems = {},
                    payments = {},
                    result: {
                        current = 0,
                        paySystem = '',
                        payment = ''
                    },
                    handleChangePaySystem,
                    handleChangeStep
                }) => (
    <div className="wizard-current">
        <h4>Выберите способ оплаты</h4>
        <p>
            <button onClick={() => handleChangeStep(1)}>Далее</button>
        </p>
        <ul className="payList selectItem">
            {Object.keys(paySystems).map((pay, idx) => {
                const isActive = paySystem === pay
                return (
                    <li
                        key={idx}
                        onClick={() => handleChangePaySystem(pay)}
                        className={classnames({'active': isActive})}>
                        <i className={paySystems[pay].icon}/>
                    </li>
                )
            })}
        </ul>
    </div>
)

export default Step_0