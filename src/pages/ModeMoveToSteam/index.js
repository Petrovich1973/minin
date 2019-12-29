import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import ListScroll from "../../Components/ListScroll";
import Popover from "../../Components/Popover";
import Filter from "../../Components/Filter";
import DialogAction from "../../Components/DialogAction";
import Steam from "../../Components/Steam";

const ModeMoveToSteam = ({skins: {user = [], popover = {}}, dispatch}) => {

    const [selectedUser, setSelectedUser] = useState([])
    const [steam, setSteam] = useState({
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

    const onChangeOperation = () => {
        setSteam(state => ({
            ...state,
            isActive: true
        }))
    }

    const handleReset = () => {
        setSteam(state => ({
            ...state,
            isActive: false
        }))
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
                <aside className="side-right">
                    <h3 className="title-block row-group">Выбрано ({selectedUser.length})</h3>
                    <div
                        onClick={onChangeOperation}
                        className="btn actionBtn align-center box-primary">
                        <span>Вывести</span>
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
                        Скины твои
                    </h3>
                    <Filter/>
                    <ListScroll {...{
                        direction: 'rtl',
                        list: user,
                        handleClickSkin: onClickSkinUser,
                        handleRightClickSkin: onRightClickSkin,
                        onHidePopover,
                        popoverId: popover.id
                    }}/>
                </section>
                {steam.isActive ? (
                    <DialogAction>
                        <Steam skinsUser={selectedUser} handleReset={handleReset}/>
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

export default connect(mapStateToProps)(ModeMoveToSteam)