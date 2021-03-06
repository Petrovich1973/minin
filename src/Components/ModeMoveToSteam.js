import React, {useState} from 'react'
import Aside from "./Aside";
import MainSection from "./MainSection";
import DialogAction from "./DialogAction";

const ModeMoveToSteam = () => {

    const [skins, setSkins] = useState({
        left: {
            balance: 50,
            selected: 0
        }
    })

    const [btn] = useState({
        label: 'Вывести в Steam',
        isDisabled: false
    })

    const [stepCurrent, setStepCurrent] = useState(0)

    const [outList, setOutList] = useState({list: [1, 2, 3], done: []})

    const handleClickBtn = () => {
        setSkins({
            left: {
                balance: 50,
                selected: 0
            }
        })
        setOutList({list: [1, 2, 3], done: []})
        setStepCurrent(3)
    }

    const handleClickConfirm = () => {
        setStepCurrent(1)
        setOutList({...outList, list: [...Array(skins.left.selected).keys()]})
        setTimeout(() => setStepCurrent(2), 2000)
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

    const [activeList] = useState('left')

    return (
        <main>
            {stepCurrent === 0 ? <React.Fragment>
                <Aside
                    disabled={false}
                    handleClickSkin={handleSelectSkin}
                    title={'Выбрано'}
                    btn={<div
                        className="btn box-primary"
                        style={{padding: '0 1rem', fontSize: 'inherit'}}
                        disabled={btn.isDisabled}
                        onClick={handleClickConfirm}><p>{btn.label}</p></div>}
                    side={'left'}
                    list={[...Array(skins.left.selected).keys()]}/>

                <MainSection
                    title={<h3 className="title-block row-group">
                        <span>мои скины</span>
                    </h3>}
                    handleClickBtn={handleClickConfirm}
                    activeList={activeList}
                    handleClickSkin={handleSelectSkin}
                    list={[...Array(skins[activeList].balance).keys()]}/>
            </React.Fragment> : null}

            {stepCurrent === 1 ? <DialogAction>
                <i className="fa fa-spinner fa-spin fa-4x"/>
                <h2>Подготовка вывода</h2>
            </DialogAction> : null}

            {stepCurrent === 2 ? <DialogAction>
                <h2>Все готово к выводу</h2>
                <ul className="outList list-scroll">
                    {outList.list.map((item, idx) => (
                        <li key={idx} className={outList.done.includes(item) ? 'complete' : ''}>
                            <span className="skin"><i className="fa fa-check"/></span>

                            {outList.done.includes(item) ?
                                <span>Вывод подтвержден</span> :
                                <button
                                    className="btn"
                                    onClick={() => setOutList({
                                        ...outList,
                                        done: [...outList.done, item]
                                    })}>
                                    Подтвердить вывод скина
                                </button>}
                        </li>
                    ))}
                </ul>
                <button
                    className="btn"
                    onClick={handleClickBtn}>Завершить вывод
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

export default ModeMoveToSteam