import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Filter from "../../Components/Filter"
import ListScroll from "../../Components/ListScroll"
import Popover from "../../Components/Popover"
import DialogAction from "../../Components/DialogAction"
import img from "../../anychart.png"
import Market from "../../Components/Market";

const ModeMarket = ({skins: {user = [], popover = {}}, dispatch}) => {

    const [selected, setSelected] = useState([])
    const [metrics, setMetrics] = useState(null)
    const [market, setMarket] = useState({
        isActive: false
    })

    useEffect(() => {
        return () => {
            resetSkins()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const resetSkins = () => {
        dispatch({
            type: 'SKINS_RESET'
        })
    }

    const onClickSkinUser = id => {
        setMetrics(null)
        setSelected(selected.concat(user.find(el => el.id === id)))
        dispatch({
            type: 'SKINS_UPDATE',
            payload: {
                user: user.filter(el => el.id !== id)
            }
        })
    }

    const onSkinMetrics = id => {
        onHidePopover()
        if (selected.length < 20) {
            setMetrics(user.find(skin => skin.id === id))
        } else {
            alert('Выбрать можно не более 20 скинов')
        }
    }

    const onClickSkinSelected = id => {
        onHidePopover()
        setSelected(selected.filter(el => el.id !== id))
        dispatch({
            type: 'SKINS_UPDATE',
            payload: {
                user: user.concat(selected.find(el => el.id === id))
            }
        })
    }
    const onRightClickSkin = (popover) => {
        dispatch({
            type: 'SKINS_UPDATE',
            payload: {
                popover
            }
        })
    }
    const onHidePopover = () => {
        dispatch({
            type: 'POPOVER_RESET'
        })
    }
    const onMarket = () => {
        setMarket(state => ({
            ...state,
            isActive: true
        }))
    }
    const handleReset = () => {
        setMarket(state => ({
            ...state,
            isActive: false
        }))
    }
    const onTotalPrice = list => {
        return list.reduce((prev, current) => {
            return (prev + current.price)
        }, 0)
    }
    return (
        <>
            <main>
                {!metrics ? <>
                        <aside className="side-left">
                            <h3 className="title-block row-group">Выбрано ({selected.length}) {selected.length ?
                                `$ ${onTotalPrice(selected)}.00` : null}</h3>
                            <div
                                onClick={onMarket}
                                className="btn actionBtn align-center box-primary">
                                <span>Продать</span>
                            </div>
                            <ListScroll {...{
                                direction: 'rtl',
                                list: selected,
                                handleClickSkin: onClickSkinSelected,
                                handleRightClickSkin: onRightClickSkin,
                                onHidePopover,
                                popoverId: popover.id
                            }}/>
                        </aside>
                        <section>
                            <h3 className="title-block row-group">Скины твои</h3>
                            <Filter/>
                            <ListScroll {...{
                                direction: 'rtl',
                                list: user,
                                handleClickSkin: onSkinMetrics,
                                handleRightClickSkin: onRightClickSkin,
                                onHidePopover,
                                popoverId: popover.id
                            }}/>
                        </section>
                    </> :
                    <>
                        <aside style={{flex: 0, padding: '0 1rem'}}>
                            <div
                                title="Отменить"
                                className="align-center pointer effect_01"
                                style={{fontSize: '300%'}}
                                onClick={() => setMetrics(null)}><span>&#10005;</span></div>
                        </aside>
                        <aside className="side-left metrics" style={{flex: '0 0 20vw'}}>
                            <h3 className="title-block row-group">{metrics.title}</h3>
                            <Popover {...{
                                position: {x: 0, y: 0},
                                style: {
                                    position: 'relative',
                                    boxShadow: 'none',
                                    border: 'none',
                                    background: 'transparent',
                                    color: 'inherit',
                                    width: '100%',
                                    height: 500,
                                    flexDirection: 'column-reverse'
                                },
                                content: {
                                    title: '',
                                    float_value: metrics.float,
                                    pic: metrics.pic,
                                    price: `$ ${metrics.price}.00`
                                }
                            }}/>
                        </aside>
                        <aside style={{flex: '0 0 15vw', padding: '0 1rem'}}>
                            <h3 className="title-block row-group">Цена продажи</h3>
                            <div style={{padding: '1rem 0'}}>
                                <input
                                    className="input dark"
                                    value={metrics.price}
                                onChange={e => {
                                    setMetrics({
                                        ...metrics,
                                        price: e.target.value
                                    })
                                }}/>
                            </div>
                            <div style={{padding: '1rem 0'}}>
                                <button
                                    style={{padding: '1rem', width: '100%'}}
                                    className="btn btnConfirm box-primary"
                                    onClick={() => onClickSkinUser(metrics.id)}>Добавить для продажи
                                </button>
                            </div>
                        </aside>
                        <section style={{flex: 1, padding: '0 1rem'}}>
                            <h3 className="title-block row-group">График цен на площадке продажи</h3>
                            <div className="list-scroll">
                                <img
                                    style={{display: 'block', width: '100%'}}
                                    alt={''}
                                    src={img}/>
                            </div>
                        </section>
                    </>}
                {market.isActive ? (
                    <DialogAction>
                        <Market handleReset={handleReset}/>
                    </DialogAction>
                ) : null}
            </main>
            {popover.isOpen ? (
                <Popover {...{...popover, onHide: onHidePopover}} />
            ) : null}

        </>
    )
}

const mapStateToProps = state => {
    return {
        skins: state.skins
    }
}

export default connect(mapStateToProps)(ModeMarket)