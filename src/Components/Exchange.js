import React, {useState, useEffect} from 'react'
import Step0 from "./ExchangeSteps/Step_0"
import Step1 from "./ExchangeSteps/Step_1"
import Step2 from "./ExchangeSteps/Step_2"

const initialSateResult = {
    current: 0,
    paymentBot: 0,
    paymentUser: 0,
    payment: 0
}
const initialSateWizard = {
    steps: {
        0: {
            title: 'Подготовка к обмену',
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

const Exchange = ({
                      skinsBot = [],
                      skinsUser = [],
                      handleReset = () => {
                          console.log('handleReset')
                      }
                  }) => {

    useEffect(() => {
        onChangePayment()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [skinsBot, skinsUser])

    const [result, setResult] = useState(initialSateResult)

    const [wizard, setWizard] = useState(initialSateWizard)

    const handleChangeStep = current => {
        setResult(result => ({...result, current}))
    }

    const handleChangeGetLink = () => {
        setWizard({
            ...wizard,
            steps: {...wizard.steps, 2: {...wizard.steps[2], status: 'done'}}
        })
    }

    const paymentBot = () => {
        return skinsBot.reduce((prev, current) => {
            return (prev + current.price)
        }, 0)
    }

    const paymentUser = () => {
        return skinsUser.reduce((prev, current) => {
            return (prev + current.price)
        }, 0)
    }

    const onChangePayment = () => {
        setResult(result => ({
            ...result,
            paymentUser: paymentUser(),
            paymentBot: paymentBot(),
            payment: paymentUser() - paymentBot()
        }))
    }

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">Обмен скинами</h3>

                <div className="container">

                    {result.current === 0 ?
                        <Step0 {...{
                            handleChangeStep,
                            handleReset
                        }}/> : null}

                    {result.current === 1 ?
                        <Step1 {...{
                            result,
                            skinsBot,
                            skinsUser,
                            handleChangeStep,
                            handleReset
                        }}/> : null}

                    {result.current === 2 ?
                        <Step2 {...{
                            result,
                            skinsBot,
                            skinsUser,
                            handleChangeStep,
                            handleChangeGetLink,
                            handleReset
                        }}/> : null}

                </div>

            </div>
        </main>
    )
}

export default Exchange