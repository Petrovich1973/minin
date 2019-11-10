import React, {useState} from 'react'
import classnames from "classnames";
import Step_0 from "./PaymentSteps/Step_0";
import Step_1 from "./PaymentSteps/Step_1";
import Step_2 from "./PaymentSteps/Step_2";

const ReplenishBalance = () => {

    const [paySystems] = useState({
        mastercard: {name: 'mastercard', icon: 'fa fa-cc-mastercard', bonus: 1.3},
        visa: {name: 'visa', icon: 'fa fa-cc-visa', bonus: 1.3},
        paypal: {name: 'paypal', icon: 'fa fa-cc-paypal', bonus: 1.3},
        credit: {name: 'credit', icon: 'fa fa-credit-card-alt', bonus: 1.3}
    })

    const [payments] = useState({
        10: {bonus: 3},
        25: {bonus: 7.5},
        50: {bonus: 15},
        100: {bonus: 30},
        200: {bonus: 60}
    })

    const [result, setResult] = useState({
        current: 0,
        paySystem: '',
        payment: 0
    })

    const [wizard, setWizard] = useState({
        steps: {
            0: {
                title: 'Выберите способ оплаты',
                status: null
            },
            1: {
                title: 'Выберите сумму пополнения',
                status: null
            },
            2: {
                title: 'Проверьте введенные данные',
                status: null
            }
        }
    })

    const handleChangeStep = current => {
        setResult(result => ({...result, current}))
    }

    const handleChangePaySystem = paySystem => {
        setResult(result => ({...result, paySystem}))
        setWizard(wizard => ({...wizard, steps: {...wizard.steps, 0: {...wizard.steps[0], status: 'done'}}}))
    }

    const handleChangePayment = payment => {
        setResult(result => ({...result, payment}))
        if(payment > 9) {
            setWizard(wizard => ({...wizard, steps: {...wizard.steps, 1: {...wizard.steps[1], status: 'done'}}}))
        }
    }

    const handleChangeGetLink = () => {
        setWizard(wizard => ({...wizard, steps: {...wizard.steps, 2: {...wizard.steps[2], status: 'done'}}}))
    }

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">Пополнение баланса</h3>

                <div className="container x-1000">
                    <p className="align-center">
                        Пополняйте баланс любым удобным способом с новой системой бонусов!
                    </p>
                </div>

                <div className="list-scroll">
                    <div className="container x-1000">
                        <ul className="wizard-nav">
                            {Object.keys(wizard.steps).map((item, idx) => {
                                const isActive = result.current === +item
                                return (
                                    <li
                                        className={classnames({'active': isActive})}
                                        onClick={() => handleChangeStep(+item)}
                                        key={idx}>
                                        <i className={classnames(
                                            wizard.steps[item].status === 'done' ?
                                                'fa fa-check' :
                                                'fa fa-circle'
                                        )}/>
                                        <span>{wizard.steps[item].title}</span>
                                    </li>
                                )
                            })}
                        </ul>

                        {result.current === 0 ?
                            <Step_0 {...{
                                paySystems,
                                payments,
                                result,
                                handleChangePaySystem,
                                handleChangeStep
                            }}/> : null}

                        {result.current === 1 ?
                            <Step_1 {...{
                                paySystems,
                                payments,
                                result,
                                handleChangePayment,
                                handleChangeStep
                            }}/> : null}

                        {result.current === 2 ?
                            <Step_2 {...{
                                paySystems,
                                payments,
                                result,
                                handleChangeStep,
                                handleChangeGetLink
                            }}/> : null}

                    </div>
                </div>

            </div>
        </main>
    )
}

export default ReplenishBalance