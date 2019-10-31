import React, {useState} from 'react'
import Aside from "./Aside";
import MainSection from "./MainSection";
import DialogAction from "./DialogAction";

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
                btn={btn}
                handleClickBtn={handleClickBtn}
                activeList={activeList}
                handleClickSkin={handleSelectSkin}
                list={[...Array(skins[activeList].balance).keys()]}/>

            <Aside
                disabled={false}
                handleClickSkin={handleSelectSkin}
                title={'Скины Бота'}
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
                    <h2>Введите контактные данные, чтобы совершить платеж.</h2>
                    <div className="payForm">
                        <div>
                            <label><nobr>Номер телефона</nobr></label>
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

        </main>
    )
}

export default ModeBuy