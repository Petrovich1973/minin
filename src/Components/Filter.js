import React, {useState} from 'react'

const options = {
    type: [
        {label: 'не выбрано', value: 0},
        {label: 'Ключи', value: 1},
        {label: 'Перчатки', value: 2},
        {label: 'Ножи', value: 3},
        {label: 'Пистолеты', value: 4},
        {label: 'Перчатки', value: 5},
        {label: 'Штурмовые винтовки', value: 6},
        {label: 'Снайперские винтовки', value: 7},
        {label: 'Пистолеты-пулеметы', value: 8},
        {label: 'Дробовики', value: 9},
        {label: 'Пулеметы', value: 10},
        {label: 'Музыка', value: 11},
        {label: 'Значки', value: 12},
        {label: 'Стикеры', value: 13},
        {label: 'Граффити', value: 14},
        {label: 'Кейсы', value: 15}
    ],
    quality: [
        {label: 'не выбрано', value: 0},
        {label: 'Прямо с завода', value: 1},
        {label: 'Немного поношенное', value: 2},
        {label: 'После полевых испытаний', value: 3},
        {label: 'Поношенное', value: 4},
        {label: 'Закаленное в боях', value: 5}
    ]
}

const Detail = ({
                    price: {from = '', to = ''},
                    type = 0,
                    quality = 0,
                    handleChangeFieldFilter
                }) => (
    <div className="detail">
        <table>
            <tbody>
            <tr>
                <td className="align-right">По цене</td>
                <td>
                    <div className="range">
                        <div>
                            <input
                                className="input"
                                type="text"
                                value={from}
                                onChange={e => handleChangeFieldFilter({
                                    price: {
                                        from: e.target.value,
                                        to
                                    }
                                })}/>
                        </div>
                        <div>-</div>
                        <div>
                            <input
                                className="input"
                                type="text"
                                value={to}
                                onChange={e => handleChangeFieldFilter({
                                    price: {
                                        to: e.target.value,
                                        from
                                    }
                                })}/>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-right">По типу</td>
                <td>
                    <div className="type">
                        <select
                            className="select"
                            value={type}
                            onChange={e => handleChangeFieldFilter({
                                type: +e.target.value
                            })}>
                            {options.type
                                .map((option, i) => (
                                        <option
                                            key={i}
                                            value={option.value}>
                                            {option.label}
                                        </option>
                                    )
                                )}
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td className="align-right">По качеству</td>
                <td>
                    <div className="quality">
                        <select
                            className="select"
                            value={quality}
                            onChange={e => handleChangeFieldFilter({
                                quality: +e.target.value
                            })}>
                            {options.quality
                                .map((option, i) => (
                                        <option
                                            key={i}
                                            value={option.value}>
                                            {option.label}
                                        </option>
                                    )
                                )}
                        </select>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>


    </div>
)


const Filter = () => {

    const [visible, setVisible] = useState(false)

    const [filter, setFilter] = useState({
        text: '',
        price: {
            from: '',
            to: ''
        },
        type: 0,
        quality: 0,
        sort: true
    })

    const handleVisible = () => setVisible(!visible)

    const handleChangeFieldFilter = value => setFilter({...filter, ...value})

    console.log(filter)

    return (
        <div className="filter">
            <div className="search" style={{flex: 1}}>
                <i className="fa fa-search"/>
                <input className="input" type="text"/>
            </div>
            <div
                className="pointer"
                title="Настроить фильтр"
                onClick={handleVisible}>
                <i className="fa fa-filter"/>
            </div>
            <div
                className="sort pointer"
                title="Сортировать по цене"
                onClick={() => handleChangeFieldFilter({sort: !filter.sort})}>
                {filter.sort ?
                    <i className="fa fa-sort-amount-asc"/> :
                    <i className="fa fa-sort-amount-desc"/>}
            </div>
            <div className="result">
                {filter.price.from.length ? <span><small>от</small> {filter.price.from}</span> : null}
                {filter.price.to.length ? <span><small>до</small> {filter.price.to}</span> : null}
                {filter.type ?
                    <span>{options.type.find(f => f.value === filter.type).label}</span> :
                    null}
                {filter.quality ?
                    <span>{options.quality.find(f => f.value === filter.quality).label}</span> :
                    null}
            </div>
            {visible ? <Detail {...{...filter, handleChangeFieldFilter}}/> : null}
        </div>
    )
}

export default Filter