import React from 'react'
import ListScroll from "./ListScroll";
import Filter from "./Filter";

const MainSection = ({list = []}) => (
    <section>
        <h3 className="title-block row-group">
            <span>$200.00</span>
            <span>баланс обмена</span>
            <span>$203.00</span>
        </h3>
        <Filter/>
        <ListScroll list={list}/>
    </section>
)

export default MainSection