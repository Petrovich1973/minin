import React from 'react'
import classnames from "classnames";
import ListScroll from "../ListScroll";

const Step_1 = ({
                    skins = [],
                    result: {
                        current = 0,
                        paySystem = '',
                        payment = ''
                    },
                    paySystems = {},
                    handleChangeStep,
                    handleReset
                }) => (
    <div className="wizard-current">
        <h4>Выбрано скинов на сумму $ {payment}</h4>
        <p className="align-center">
            <i
                style={{fontSize: '400%'}}
                className={classnames([paySystem] in paySystems && paySystems[paySystem].icon)}/>
        </p>
        <div className="skinsWrapCenter">
            <ListScroll list={skins}/>
        </div>
        <p style={{display: 'inline-flex'}}>
            <button
                className="btn"
                onClick={() => handleChangeStep(0)}>
                <i className="fa fa-arrow-left"/>
                <span>Назад</span>
            </button>
            {payment > 0 ?
                <>
                    &nbsp;
                    <button
                        className="btn"
                        onClick={() => handleChangeStep(2)}>
                        <span>Далее</span>
                        <i className="fa fa-arrow-right"/>
                    </button>
                </> : null}
        </p>
        <p
            className="align-center pointer effect_01"
            style={{fontSize: '300%'}}
            onClick={handleReset}><span>&#10005;</span></p>
    </div>
)

export default Step_1