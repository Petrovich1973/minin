import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Filter from "../../Components/Filter"
import ListScroll from "../../Components/ListScroll"
import Popover from "../../Components/Popover";
import DialogAction from "../../Components/DialogAction";
import Purchase from "../../Components/Purchase";

const ModeBuy = ({skins: {bot = [], popover = {}}, dispatch}) => {

    const [selected, setSelected] = useState([])
    const [purchase, setPurchase] = useState({
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

    const onClickSkinBot = id => {
        onHidePopover()
        if (selected.length < 20) {
            setSelected(selected.concat(bot.find(el => el.id === id)))
            dispatch({
                type: 'SKINS_UPDATE',
                payload: {
                    bot: bot.filter(el => el.id !== id)
                }
            })
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
                bot: bot.concat(selected.find(el => el.id === id))
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
    const onPurchase = () => {
        setPurchase(state => ({
            ...state,
            isActive: true
        }))
    }
    const handleReset = () => {
        setPurchase(state => ({
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
                <section>
                    <h3 className="title-block row-group">Скины бота</h3>
                    <Filter/>
                    <ListScroll {...{
                        direction: 'rtl',
                        list: bot,
                        handleClickSkin: onClickSkinBot,
                        handleRightClickSkin: onRightClickSkin,
                        onHidePopover,
                        popoverId: popover.id
                    }}/>
                </section>
                <aside className="side-right">
                    <h3 className="title-block row-group">Выбрано ({selected.length}) {selected.length ?
                        `$ ${onTotalPrice(selected)}.00` : null}</h3>
                    <div
                        onClick={onPurchase}
                        className="btn actionBtn align-center box-primary">
                        <span>Купить</span>
                    </div>
                    <ListScroll {...{
                        direction: 'ltr',
                        list: selected,
                        handleClickSkin: onClickSkinSelected,
                        handleRightClickSkin: onRightClickSkin,
                        onHidePopover,
                        popoverId: popover.id
                    }}/>
                </aside>
                {purchase.isActive ? (
                    <DialogAction>
                        <Purchase skins={selected} handleReset={handleReset}/>
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

export default connect(mapStateToProps)(ModeBuy)