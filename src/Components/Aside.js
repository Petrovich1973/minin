import React from 'react'
import classnames from 'classnames'
import ListScroll from "./ListScroll";

const Aside = ({
                   side = '',
                   title = 'Title aside',
                   list = [],
                   disabled = false,
                   handleSwitchList,
                   handleClickSkin
               }) => {

    const handleClick = () => handleClickSkin(side, 'selected')

    return (
        <aside className={classnames(side === 'right' ? 'side-right' : 'side-left')}>
            <h3 className={classnames(
                "title-block",
                side === 'right' ? 'align-lift' : 'align-right'
            )}>{title}({list.length})</h3>
            <ListScroll
                handleClickSkin={handleClick}
                list={list} direction={side === 'right' ? 'ltr' : 'rtl'}/>
            {disabled ? <div className="maskList" onClick={() => handleSwitchList(side)}/> : null}
        </aside>
    )
}

export default Aside