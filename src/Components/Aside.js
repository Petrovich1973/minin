import React from 'react'
import classnames from 'classnames'
import ListScroll from "./ListScroll";

const Aside = ({side = '', title = 'Title aside', list = []}) => (
    <aside className={classnames(side === 'right' ? 'side-right' : 'side-left')}>
        <h3 className={classnames(
            "title-block",
            side === 'right' ? 'align-lift' : 'align-right'
        )}>{title}</h3>
        <ListScroll list={list} direction={side === 'right' ? 'ltr' : 'rtl'}/>
    </aside>
)

export default Aside