import React, {useState} from 'react'
import Aside from "./Aside";
import MainSection from "./MainSection";
import DialogAction from "./DialogAction";
import ListScroll from "./ListScroll";

const ModeBuy = () => {

    const [skins, setSkins] = useState({
        right: {
            balance: 500,
            selected: 0
        }
    })

    const [btn] = useState({
        label: 'Купить',
        isDisabled: false
    })

    const [stepCurrent, setStepCurrent] = useState(0)

    const handleClickBtn = () => {
        setStepCurrent(1)
    }

    const handleClickNext = () => {
        setStepCurrent(2)
    }

    const handleClickConfirm = () => {
        setStepCurrent(3)
    }

    const closeModal = () => {
        setStepCurrent(0)
    }

    const handleSelectSkin = (name, from) => {

        const obj = {...skins[name]}

        if (from === 'balance') {
            const count = obj.selected < 20 ? 1 : 0
            obj.balance -= count
            obj.selected += count
            if (!count) alert('Это предел!')
        }
        if (from === 'selected') {
            obj.balance += 1
            obj.selected -= 1
        }

        setSkins({
            ...skins,
            [name]: {...obj}
        })
    }

    const [activeList] = useState('right')

    return (
        <main>

            <MainSection
                title={<h3 className="title-block row-group">
                    <span>скины бота</span>
                </h3>}
                handleClickBtn={handleClickBtn}
                activeList={activeList}
                handleClickSkin={handleSelectSkin}
                list={[...Array(skins[activeList].balance).keys()]}/>

            <Aside
                disabled={false}
                handleClickSkin={handleSelectSkin}
                title={'Выбрано'}
                btn={<div
                    className="btn box-primary"
                    style={{padding: '0 1rem', fontSize: 'inherit'}}
                    disabled={btn.isDisabled}
                    onClick={handleClickBtn}><p>$203.00 {btn.label}</p></div>}
                side={'right'}
                list={[...Array(skins.right.selected).keys()]}/>

            {stepCurrent === 1 ? <DialogAction>
                    <h2>Выбор платежной системы</h2>
                    <div className="payList">
                        <i className="fa fa-cc-mastercard" onClick={handleClickNext}/>
                        <i className="fa fa-cc-visa" onClick={handleClickNext}/>
                        <i className="fa fa-money" onClick={handleClickNext}/>
                    </div>
                </DialogAction> :
                stepCurrent === 2 ? <DialogAction>
                    <div className="align-center">
                        <div>Вы выбрали платежную систему:</div>
                        <i className="fa fa-cc-mastercard" style={{fontSize: '300%'}}/>
                    </div>
                    <div>&nbsp;</div>
                    <div className="align-center">
                        <div>Вы покупаете:</div>
                        <div style={{width: 500}}><ListScroll
                            list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/></div>
                    </div>
                    <div>&nbsp;</div>
                    <div className="align-center">
                        <div>На сумму: <strong>$ 12 000</strong></div>
                    </div>
                    <h2>Введите контактные данные, чтобы совершить платеж.</h2>
                    <div className="payForm">
                        <div>
                            <label>
                                <nobr>Номер телефона</nobr>
                            </label>
                            <input
                                type="text"/>
                        </div>
                        <div>
                            <label>Почта</label>
                            <input
                                type="text"/>
                        </div>
                    </div>
                    <button
                        className="btn btnConfirm box-primary"
                        onClick={handleClickConfirm}>Подтвердить покупку
                    </button>
                </DialogAction> : null}
            {stepCurrent === 3 ?
            <DialogAction>
                <div className="align-center pointer effect_01" onClick={closeModal}>
                    <h2>Спасибо за покупку!</h2>
                    <p style={{fontSize: '300%'}}><span>&#10005;</span></p>
                </div>
            </DialogAction> :
            null}

        </main>
    )
}

export default ModeBuy