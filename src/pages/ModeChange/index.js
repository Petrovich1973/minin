import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import ListScroll from "../../Components/ListScroll";
import Popover from "../../Components/Popover";
import Filter from "../../Components/Filter";

const ModeChange = ({skins: {bot = [], user = [], popover = {}}, dispatch}) => {

    const [activeSkins, setActiveSkins] = useState('bot')
    const [selectedBot, setSelectedBot] = useState([])
    const [selectedUser, setSelectedUser] = useState([])

    useEffect(() => {
        return (
            resetSkins()
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const resetSkins = () => {
        dispatch({
            type: 'SKINS_RESET'
        })
    }

    const onChangeOperation = () => {

    }

    const onChangeNavActive = active => {
        setActiveSkins(active)
    }

    const onClickSkinSelectedUser = id => {
        onHidePopover()
        setSelectedUser(selectedUser.filter(el => el.id !== id))
        dispatch({
            type: 'SKINS_UPDATE',
            payload: {
                user: user.concat(selectedUser.find(el => el.id === id))
            }
        })
    }

    const onClickSkinUser = id => {
        onHidePopover()
        if (selectedUser.length < 20) {
            setSelectedUser(selectedUser.concat(user.find(el => el.id === id)))
            dispatch({
                type: 'SKINS_UPDATE',
                payload: {
                    user: user.filter(el => el.id !== id)
                }
            })
        } else {
            alert('Выбрать можно не более 20 скинов')
        }
    }

    const onClickSkinSelectedBot = id => {
        onHidePopover()
        setSelectedBot(selectedBot.filter(el => el.id !== id))
        dispatch({
            type: 'SKINS_UPDATE',
            payload: {
                bot: bot.concat(selectedBot.find(el => el.id === id))
            }
        })
    }

    const onClickSkinBot = id => {
        onHidePopover()
        if (selectedBot.length < 20) {
            setSelectedBot(selectedBot.concat(bot.find(el => el.id === id)))
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

    const onTotalPrice = list => {
        return list.reduce((prev, current) => {
            return (prev + current.price)
        }, 0)
    }

    return (
        <>
            <main>
                <aside className="side-right">
                    <h3 className="title-block row-group">Выбрано ({selectedUser.length}) {selectedUser.length ?
                        `$ ${onTotalPrice(selectedUser)}.00` : null}</h3>
                    <div
                        onClick={onChangeOperation}
                        className="btn actionBtn align-center box-primary">
                        <span>Обменять</span>
                    </div>
                    <ListScroll {...{
                        direction: 'rtl',
                        list: selectedUser,
                        handleClickSkin: onClickSkinSelectedUser,
                        handleRightClickSkin: onRightClickSkin,
                        onHidePopover,
                        popoverId: popover.id
                    }}/>
                </aside>
                <section>
                    <h3 className="title-block row-group nav">
                        <span
                            className={classnames('navItem', {'active': activeSkins === 'user'})}
                            onClick={() => onChangeNavActive('user')}>
                            Скины твои
                        </span>
                        <span
                            className={classnames('navItem', {'active': activeSkins === 'bot'})}
                            onClick={() => onChangeNavActive('bot')}>
                            Скины бота
                        </span>
                    </h3>
                    <Filter/>
                    {activeSkins === 'user' ? <ListScroll {...{
                            direction: 'rtl',
                            list: user,
                            handleClickSkin: onClickSkinUser,
                            handleRightClickSkin: onRightClickSkin,
                            onHidePopover,
                            popoverId: popover.id
                        }}/> :
                        <ListScroll {...{
                            direction: 'rtl',
                            list: bot,
                            handleClickSkin: onClickSkinBot,
                            handleRightClickSkin: onRightClickSkin,
                            onHidePopover,
                            popoverId: popover.id
                        }}/>}
                </section>
                <aside className="side-left">
                    <h3 className="title-block row-group">Выбрано ({selectedBot.length}) {selectedBot.length ?
                        `$ ${onTotalPrice(selectedBot)}.00` : null}</h3>
                    <div
                        onClick={onChangeOperation}
                        className="btn actionBtn align-center box-primary">
                        <span>Обменять</span>
                    </div>
                    <ListScroll {...{
                        direction: 'ltr',
                        list: selectedBot,
                        handleClickSkin: onClickSkinSelectedBot,
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

export default connect(mapStateToProps)(ModeChange)