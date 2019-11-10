import React from 'react'
import ListScroll from "./ListScroll";
import Filter from "./Filter";

const MainSection = ({
                         list = [],
                         activeList,
                         handleClickSkin,
                         handleClickBtn,
                         title = null,
                         btn = null
                     }) => {

    const handleClick = () => handleClickSkin(activeList, 'balance')

    return (
        <section>
            {title}
            {btn}
            <Filter/>
            <ListScroll handleClickSkin={handleClick} list={list}/>
        </section>
    )
}

export default MainSection