import React, {useState} from 'react'
import classnames from 'classnames'

const Step_2 = ({
                    paySystems = {},
                    payments = {},
                    result: {
                        current = 0,
                        paySystem = '',
                        payment = ''
                    },
                    handleChangeStep,
                    handleChangeGetLink,
                    handleReset
                }) => {

    const [isLink, setIsLink] = useState(false)
    const [loader, setLoader] = useState(false)

    const countBonus = value => {
        return (value * 30 / 100)
    }

    const toSend = async () => {

        setLoader(true)

        await new Promise(resolve => setTimeout(
                () => {
                    setLoader(false)
                    setIsLink(true)
                    handleChangeGetLink()
                }, 2000
            ))
    }

    return (
        <div className="wizard-current">
            <h4>Проверьте введенные данные</h4>
            <p>
                <button onClick={() => handleChangeStep(1)}>Назад</button>
            </p>
            <div className="paymentResult">
                <div>
                    <span>Платежная система:</span>
                    <i
                        style={{fontSize: '300%'}}
                        className={classnames([paySystem] in paySystems && paySystems[paySystem].icon)}/>
                </div>
                <div>
                    <span>Сумма:</span>
                    <span>{Object.keys(payments).includes(payment) ?
                        <span>{payment} + ${payments[payment].bonus} bonus</span> :
                        <span>{payment} + ${countBonus(payment)} bonus</span>} = ${payment + countBonus(payment)}
                        </span>
                </div>
                <div>
                    <button
                        onClick={toSend}
                        className={'btn'}>
                        {loader ?
                            <i className="fa fa-spinner fa-spin"/> :
                            isLink ? <i className="fa fa-check"/> : null}
                        {!isLink ?
                            <span>{loader ? 'Ожидание ответа' : 'Получить ссылку на оплату'}</span> :
                            <span>Ссылка на оплату</span>}
                    </button>
                </div>
            </div>

            <p
                className="align-center pointer effect_01"
                style={{fontSize: '300%'}}
                onClick={handleReset}><span>&#10005;</span></p>

        </div>
    )
}

export default Step_2