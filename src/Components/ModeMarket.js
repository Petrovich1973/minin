import React, {useState} from 'react'
import MainSection from "./MainSection";
import Aside from "./Aside";
import DialogAction from "./DialogAction";
import img from '../anychart.png'
import skin from "../skin.jpg";

const ModeMarket = () => {

    const [skins, setSkins] = useState({
        left: {
            balance: 50,
            selected: 0
        }
    })

    const [btn] = useState({
        label: 'Продать',
        isDisabled: false
    })

    const [stepCurrent, setStepCurrent] = useState(0)

    const handleClickConfirm = () => {
        setStepCurrent(2)
        setTimeout(() => setStepCurrent(3), 2000)
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
            if (!count) {
                alert('Это предел!')
            } else {
                setStepCurrent(1)
            }
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
                        onClick={handleClickConfirm}><p>$203.00 {btn.label}</p></div>}
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

            {stepCurrent === 1 ? <React.Fragment>
                <aside className="side-left" style={{flex: '0 0 30vw'}}>
                    <h3 className="title-block">&nbsp;</h3>
                    <div className="list-scroll" style={{paddingTop: '1rem'}}>
                        <div
                            style={{
                                 width: '100%',
                                 height: '100%',
                                 backgroundColor: 'black',
                                 backgroundImage: `url(${skin})`,
                                 backgroundSize: 'contain',
                                 backgroundPosition: 'center',
                                 backgroundRepeat: 'no-repeat'}}/>
                    </div>
                </aside>
                <section>
                    <h3 className="title-block">График цен на площадке продажи</h3>
                    <div className="list-scroll">
                        <img
                            style={{display: 'block', width: '100%'}}
                            alt={''}
                            src={img}/>
                    </div>
                </section>
                <aside className="side-right">
                    <h3 className="title-block">Цена продажи</h3>
                    <div className="list-scroll">
                        <p style={{fontWeight: 700, fontSize: '200%'}}><strong>$ 2 000.00</strong></p>
                        <button
                            style={{padding: '1rem'}}
                            className="btn btnConfirm box-primary"
                            onClick={() => setStepCurrent(0)}>Добавить для продажи
                        </button>
                    </div>
                </aside>
            </React.Fragment> : null}

            {stepCurrent === 2 ? <DialogAction>
                <i className="fa fa-spinner fa-spin fa-4x"/>
                <h2>Подготовка к продаже</h2>
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

export default ModeMarket