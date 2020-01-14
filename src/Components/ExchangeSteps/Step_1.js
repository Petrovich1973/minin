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
        <h4>Скины твои <strong>$ {paymentUser}</strong> - ({payment > 0 ?
            <strong className="color-green">+{payment}</strong> :
            <strong className="color-red">{payment}</strong>}) - <strong>$ {paymentBot}</strong> Скины бота</h4>
        <div style={{width: 800}}>
            <div className="skinsWrapCenter" style={{background: 'rgba(0,0,0,0.06)'}}>
                {skinsUser.length ? <ListScroll list={skinsUser}/> : <span>Не выбраны скины</span>}
            </div>
            <hr className="box-primary"/>
            <div className="skinsWrapCenter" style={{background: 'rgba(0,0,0,0.06)'}}>
                {skinsBot.length ? <ListScroll list={skinsBot}/> : <span>Не выбраны скины</span>}
            </div>
        </div>

        <p className="align-center">Все готово к виртуальному обмену</p>

        <p style={{display: 'inline-flex'}}>
            <button
                className="btn box-primary"
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