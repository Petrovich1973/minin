import React from 'react'
import ListScroll from "./ListScroll";
import Filter from "./Filter";

const MainSection = ({list = [], activeList, handleClickSkin}) => {

    const handleClick = () => handleClickSkin(activeList, 'balance')

    return (
        <section>
            <h3 className="title-block row-group">
                <span>$200.00</span>
                <strong>«обмен»</strong>
                <span>$203.00</span>
            </h3>
            <Filter/>
            <ListScroll handleClickSkin={handleClick} list={list}/>
        </section>
    )
}

export default MainSection