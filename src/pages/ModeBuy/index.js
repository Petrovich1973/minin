import React, {useState} from 'react'
import {connect} from 'react-redux'
import Filter from "../../Components/Filter"
import ListScroll from "../../Components/ListScroll"
import Popover from "../../Components/Popover";

const ModeBuy = ({skins: {bot = [], popover = {}}, dispatch}) => {

    const [selected, setSelected] = useState([])

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
                    <h3 className="title-block row-group">Выбрано ({selected.length})</h3>
                    <div className="btn actionBtn align-center box-primary">
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