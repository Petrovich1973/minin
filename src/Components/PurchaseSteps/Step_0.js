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
                    handleChangeStep,
                    handleReset
                }) => (
    <div className="wizard-current">
        <h4>Выберите способ оплаты</h4>
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
        <p>
            {paySystem.length ?
                <button className="btn" onClick={() => handleChangeStep(1)}>Далее</button> :
                null}
        </p>
        <p
            className="align-center pointer effect_01"
            style={{fontSize: '300%'}}
            onClick={handleReset}><span>&#10005;</span></p>
    </div>
)

export default Step_0