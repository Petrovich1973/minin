import React from 'react'
import ListScroll from "./ListScroll";
import Filter from "./Filter";

const MainSection = ({list = [], activeList, handleClickSkin, handleClickBtn, btn: {label = '', isDisabled = false}}) => {

    const handleClick = () => handleClickSkin(activeList, 'balance')

    // console.log(handleClickBtn)

    return (
        <section>
            <h3 className="title-block row-group">
                <span>$200.00</span>
                <button
                    className="btn box-primary"
                    disabled={isDisabled}
                    onClick={handleClickBtn}>{label}</button>
                <span>$203.00</span>
            </h3>
            <Filter/>
            <ListScroll handleClickSkin={handleClick} list={list}/>
        </section>
    )
}

export default MainSection