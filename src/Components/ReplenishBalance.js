import React, {useEffect, useState} from 'react'
import Step0 from "./PaymentSteps/Step_0"
import Step1 from "./PaymentSteps/Step_1"
import Step2 from "./PaymentSteps/Step_2"

const initialSateResult = {
    current: 0,
    paySystem: '',
    payment: 0
}
const initialSateWizard = {
    steps: {
        0: {
            title: 'Выбрать способ оплаты',
            status: null
        },
        1: {
            title: 'Выбрать сумму пополнения',
            status: null
        },
        2: {
            title: 'Проверьте введенные данные',
            status: null
        }
    }
}

const ReplenishBalance = () => {

    useEffect(() => {

        const elements = document.querySelectorAll('.drop-down')
        elements.forEach(el => {
            el.style.display = 'none'
            setTimeout(() => el.style.display = null, 100)
        })

        // eslint-disable-next-line
    }, [])

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

    const [result, setResult] = useState(initialSateResult)

    const [wizard, setWizard] = useState(initialSateWizard)

    const handleChangeStep = current => {
        setResult(result => ({...result, current}))
    }

    const handleChangePaySystem = paySystem => {
        setResult(result => ({...result, paySystem}))
        setWizard(wizard => ({
            ...wizard,
            steps: {...wizard.steps, 0: {...wizard.steps[0], status: 'done'}}
        }))
    }

    const handleChangePayment = payment => {
        setResult(result => ({...result, payment}))
        if (payment > 9) {
            setWizard(wizard => ({
                ...wizard,
                steps: {...wizard.steps, 1: {...wizard.steps[1], status: 'done'}}
            }))
        }
    }

    const handleChangeGetLink = () => {
        setWizard(wizard => ({
            ...wizard,
            steps: {...wizard.steps, 2: {...wizard.steps[2], status: 'done'}}
        }))
    }

    const handleReset = () => {
        setResult({...initialSateResult})
        setWizard({...initialSateWizard})
    }

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">Пополнение баланса</h3>

                <div className="container">
                    <p className="align-center">
                        Пополняйте баланс любым удобным способом с новой системой бонусов!
                    </p>
                </div>

                <div className="list-scroll">
                    <div className="container">

                        {result.current === 0 ?
                            <Step0 {...{
                                paySystems,
                                payments,
                                result,
                                handleChangePaySystem,
                                handleChangeStep
                            }}/> : null}

                        {result.current === 1 ?
                            <Step1 {...{
                                paySystems,
                                payments,
                                result,
                                handleChangePayment,
                                handleChangeStep
                            }}/> : null}

                        {result.current === 2 ?
                            <Step2 {...{
                                paySystems,
                                payments,
                                result,
                                handleChangeStep,
                                handleChangeGetLink,
                                handleReset
                            }}/> : null}

                    </div>
                </div>

            </div>
        </main>
    )
}

export default ReplenishBalance