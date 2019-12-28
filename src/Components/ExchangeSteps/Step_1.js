import React from 'react'
import ListScroll from "../ListScroll";

const Step_1 = ({
                    skinsBot = [],
                    skinsUser = [],
                    result: {
                        current = 0,
                        paymentBot = 0,
                        paymentUser = 0,
                        payment = ''
                    },
                    handleChangeStep,
                    handleReset
                }) => (
    <div className="wizard-current">
        <h4>Скины твои $ {paymentUser} - ({payment > 0 ?
            <span className="color-green">+{payment}</span> :
            <span className="color-red">{payment}</span>}) - Скины бота $ {paymentBot}</h4>
        <div style={{width: 800}}>
            <div className="skinsWrapCenter" style={{background: 'rgba(0,0,0,0.1)'}}>
                <ListScroll list={skinsUser}/>
            </div>
            <div className="skinsWrapCenter" style={{background: 'rgba(0,0,0,0.1)'}}>
                <ListScroll list={skinsBot}/>
            </div>
        </div>

        <p className="align-center">Все готово к виртуальному обмену</p>

        <p style={{display: 'inline-flex'}}>
            <button
                className="btn"
                onClick={() => handleChangeStep(2)}>
                <span>Подтвердить обмен</span>
            </button>
        </p>
        <p
            className="align-center pointer effect_01"
            style={{fontSize: '300%'}}
            onClick={handleReset}><span>&#10005;</span></p>
    </div>
)

export default Step_1