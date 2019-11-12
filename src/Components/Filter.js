import React from 'react'

const Filter = () => (
    <div className="filter">
        <div className="search pointer">
            <i className="fa fa-search"/>
            <input className="input" type="text"/>
        </div>
        <div className="range">
            <div>
                <span>From</span>
                <input className="input" type="text"/>
            </div>
            <div>
                <span>To</span>
                <input className="input" type="text"/>
            </div>
        </div>
        <div className="selected">
            <select className="select">
                <option>Закаленное в боях</option>
                <option>Поношенное</option>
                <option>Прямо с завода</option>
            </select>
        </div>
        <div className="selected">
            <select className="select">
                <option>Закаленное в боях</option>
                <option>Поношенное</option>
                <option>Прямо с завода</option>
            </select>
        </div>
        <div className="sort pointer">
            <i className="fa fa-sort-amount-asc"/>
        </div>
    </div>
)

export default Filter