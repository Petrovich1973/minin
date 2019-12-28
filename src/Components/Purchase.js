import React, {useState, useEffect} from 'react'
import Step0 from "./PurchaseSteps/Step_0"
import Step1 from "./PurchaseSteps/Step_1"
import Step2 from "./PurchaseSteps/Step_2"

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

const Purchase = ({
                      skins = [],
                      handleReset = () => {
                          console.log('handleReset')
                      }
                  }) => {

    useEffect(() => {
        onChangePayment()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [skins])

    const [paySystems] = useState({
        mastercard: {name: 'mastercard', icon: 'fa fa-cc-mastercard', bonus: 1.3},
        visa: {name: 'visa', icon: 'fa fa-cc-visa', bonus: 1.3},
        paypal: {name: 'paypal', icon: 'fa fa-cc-paypal', bonus: 1.3},
        credit: {name: 'credit', icon: 'fa fa-credit-card-alt', bonus: 1.3}
    })

    const [result, setResult] = useState(initialSateResult)

    const [wizard, setWizard] = useState(initialSateWizard)

    const handleChangeStep = current => {
        setResult(result => ({...result, current}))
    }

    const handleChangePaySystem = paySystem => {
        setResult(result => ({...result, paySystem}))
        setWizard({
            ...wizard,
            steps: {...wizard.steps, 0: {...wizard.steps[0], status: 'done'}}
        })
    }

    const handleChangeGetLink = () => {
        setWizard({
            ...wizard,
            steps: {...wizard.steps, 2: {...wizard.steps[2], status: 'done'}}
        })
    }

    const onChangePayment = () => {
        const payment = skins.reduce((prev, current) => {
            return (prev + current.price)
        }, 0)
        setResult(result => ({...result, payment}))
    }

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">Покупка скинов</h3>

                <div className="container">

                    {result.current === 0 ?
                        <Step0 {...{
                            paySystems,
                            result,
                            handleChangePaySystem,
                            handleChangeStep,
                            handleReset
                        }}/> : null}

                    {result.current === 1 ?
                        <Step1 {...{
                            paySystems,
                            result,
                            skins,
                            handleChangeStep,
                            handleReset
                        }}/> : null}

                    {result.current === 2 ?
                        <Step2 {...{
                            paySystems,
                            result,
                            skins,
                            handleChangeStep,
                            handleChangeGetLink,
                            handleReset
                        }}/> : null}

                </div>

            </div>
        </main>
    )
}

export default Purchase