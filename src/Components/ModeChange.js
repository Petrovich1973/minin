import React, {useState} from 'react'
import Aside from "./Aside"
import MainSection from "./MainSection"
import DialogAction from "./DialogAction";
import ListScroll from "./ListScroll";

const ModeChange = () => {

    const [skins, setSkins] = useState({
        left: {
            balance: 50,
            selected: 0
        },
        right: {
            balance: 500,
            selected: 0
        }
    })

    const [btn] = useState({
        label: 'Обменять',
        isDisabled: false
    })

    const [stepCurrent, setStepCurrent] = useState(0)

    const handleClickBtn = () => {
        setStepCurrent(1)

        setTimeout(() => setStepCurrent(2), 3000)
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

    const [activeList, setActiveList] = useState('left')

    const handleSwitchList = value => setActiveList(value)

    return (
        <main>

            <Aside
                disabled={activeList !== 'left'}
                handleSwitchList={handleSwitchList}
                handleClickSkin={handleSelectSkin}
                title={'Выбрано'}
                btn={<div
                    className="btn box-primary"
                    style={{padding: '0 1rem', fontSize: 'inherit'}}
                    disabled={btn.isDisabled}
                    onClick={handleClickBtn}><p>$203.00 {btn.label}</p></div>}
                side={'left'}
                list={[...Array(skins.left.selected).keys()]}/>

            <MainSection
                title={<h3 className="title-block row-group">
                    <span>{activeList === 'left' ? 'мои скины' : 'скины бота'}</span>
                </h3>}
                handleClickBtn={handleClickBtn}
                activeList={activeList}
                handleClickSkin={handleSelectSkin}
                list={[...Array(skins[activeList].balance).keys()]}/>

            <Aside
                disabled={activeList !== 'right'}
                handleSwitchList={handleSwitchList}
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
                    <i className="fa fa-spinner fa-spin fa-4x"/>
                    <h2>Подготовка обмена</h2>
                </DialogAction> :
                stepCurrent === 2 ? <DialogAction>
                    <h2>Все готово к виртуальному обмену!</h2>
                    <h3
                        className="align-center"
                        style={{width: 500}}>
                        Скины будут отправлены в ваш виртуальный инвентарь
                        CS. MONEY. Вы сможете их вывести.
                    </h3>
                    <div className="align-center">
                        <div>Вы обмениваете:</div>
                        <div style={{width: 500}}><ListScroll
                            list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}/></div>
                    </div>
                    <div>
                        <button
                            className="btn btnConfirm box-primary"
                            onClick={handleClickConfirm}>Подтвердить обмен</button>
                    </div>
                    <div>
                        <button
                            className="btn btnConfirm"
                            onClick={closeModal}>Отменить обмен</button>
                    </div>

                </DialogAction> : null}
            {stepCurrent === 3 ?
                <DialogAction>
                    <div className="align-center pointer effect_01" onClick={closeModal}>
                        <h2>Спасибо за обмен!</h2>
                        <p style={{fontSize: '300%'}}><span>&#10005;</span></p>
                    </div>
                </DialogAction> :
                null}

        </main>
    )
}

export default ModeChange