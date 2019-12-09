import React, {useState} from 'react'
import { connect } from 'react-redux'
import Filter from "../../Components/Filter"
import ListScroll from "../../Components/ListScroll"

const ModeBuy = ({skins = [], dispatch}) => {
    const [popoverId, setPopoverId] = useState(null)
    const [selected, setSelected] = useState([])

    const onClickSkinBot = id => {
        setPopoverId(null)
        if(selected.length < 20) {
            setSelected(selected.concat(skins.find(el => el.id === id)))
            dispatch({
                type: 'SKINS_UPDATE',
                payload: {
                    bot: skins.filter(el => el.id !== id)
                }
            })
        } else {
            alert('Выбрать можно не более 20 скинов')
        }
    }
    const onClickSkinSelected = id => {
        setPopoverId(null)
        setSelected(selected.filter(el => el.id !== id))
        dispatch({
            type: 'SKINS_UPDATE',
            payload: {
                bot: skins.concat(selected.find(el => el.id === id))
            }
        })
    }
    const onRightClickSkin = id => {
        setPopoverId(id)
    }
    return (
        <main>
            <section>
                <h3 className="title-block row-group">Скины бота</h3>
                <Filter/>
                <ListScroll {...{
                    direction: 'rtl',
                    list: skins,
                    handleClickSkin: onClickSkinBot,
                    handleRightClickSkin: onRightClickSkin,
                    popoverId
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
                    popoverId
                }}/>
            </aside>
        </main>
    )
}

const mapStateToProps = state => {
    return {
        skins: state.skins.bot
    }
}

export default connect(mapStateToProps)(ModeBuy)