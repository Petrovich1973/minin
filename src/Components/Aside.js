import React from 'react'
import classnames from 'classnames'
import ListScroll from "./ListScroll";

const Aside = ({
                   side = '',
                   title = 'Title aside',
                   list = [],
                   btn = null,
                   disabled = false,
                   handleSwitchList,
                   handleClickSkin
               }) => {

    const handleClick = () => handleClickSkin(side, 'selected')

    return (
        <aside className={classnames(side === 'right' ? 'side-right' : 'side-left')}>
            <h3 className={classnames(
                "title-block",
                side === 'right' ? 'align-center' : 'align-center'
            )}>{title}({list.length})</h3>
            {btn}
            <ListScroll
                handleClickSkin={handleClick}
                list={list} direction={side === 'right' ? 'ltr' : 'rtl'}/>
            {disabled ? <div className="maskList" onClick={() => handleSwitchList(side)}>
                <div className="align-center">Выбрать</div>
            </div> : null}
        </aside>
    )
}

export default Aside