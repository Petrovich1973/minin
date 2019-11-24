import React, {useState} from 'react'
import ReactSlider from "react-slider";

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
    ],
    skins: [
        {label: 'Релевантные скины', value: 0},
        {label: 'Только скины бота', value: 1},
        {label: 'Только скины пользователей', value: 2},
    ],
    teams: [
        {label: 'не выбрано', value: 0},
        {label: "3DMAX", value: 1},
        {label: "Astralis", value: 2},
        {label: "Bravado Gaming", value: 3},
        {label: "Clan-Mystik", value: 4},
        {label: "Cloud9", value: 5},
        {label: "Cloud9 G2A", value: 6},
        {label: "compLexity Gaming", value: 7},
        {label: "Copenhagen Wolves", value: 8},
        {label: "Counter Logic Gaming", value: 9},
        {label: "dAT team", value: 10},
        {label: "Epsilon eSports", value: 11},
        {label: "ESC Gaming", value: 12},
        {label: "FaZe Clan", value: 13},
        {label: "Flipsid3 Tactics", value: 14},
        {label: "Fnatic", value: 15},
        {label: "G2 Esports", value: 16},
        {label: "Gambit Gaming", value: 17},
        {label: "GODSENT", value: 18},
        {label: "HellRaisers", value: 19},
        {label: "iBUYPOWER", value: 20},
        {label: "Keyd Stars", value: 21},
        {label: "LGB eSports", value: 22},
        {label: "London Conspiracy", value: 23},
        {label: "Luminosity Gaming", value: 24},
        {label: "MIBR", value: 25},
        {label: "mousesports", value: 26},
        {label: "MTS GameGod Wolf", value: 27},
        {label: "myXMG", value: 28},
        {label: "Natus Vincere", value: 29},
        {label: "Ninjas in Pyjamas", value: 30},
        {label: "North", value: 31},
        {label: "OpTic Gaming", value: 32},
        {label: "PENTA Sports", value: 33},
        {label: "Planetkey Dynamics", value: 34},
        {label: "Reason Gaming", value: 35},
        {label: "Renegades", value: 36},
        {label: "SK Gaming", value: 37},
        {label: "Splyce", value: 38},
        {label: "Team Dignitas", value: 39},
        {label: "Team eBettle", value: 40},
        {label: "Team EnVyUs", value: 41},
        {label: "Team Immunity", value: 42},
        {label: "Team Kinguin", value: 43},
        {label: "Team LDLC.com", value: 44},
        {label: "Team Liquid", value: 45},
        {label: "Team SoloMid", value: 46},
        {label: "Titan", value: 47},
        {label: "TSM Kinguin", value: 48},
        {label: "Vexed Gaming", value: 49},
        {label: "Virtus.Pro", value: 50},
        {label: "Vox Eminor", value: 51}
    ],
    collections: [
        {label: 'не выбрано', value: 0},
        {label: "DreamHack 2013", value: 1},
        {label: "Katowice 2014", value: 2},
        {label: "DreamHack 2014", value: 3},
        {label: "Cologne 2014", value: 4},
        {label: "Cologne 2015", value: 5},
        {label: "Katowice 2015", value: 6},
        {label: "Cluj-Napoca 2015", value: 7},
        {label: "Cologne 2016", value: 8},
        {label: "Columbus 2016", value: 9},
        {label: "Atlanta 2017", value: 10},
        {label: "Krakow 2017", value: 11},
        {label: "Boston 2018", value: 12},
        {label: "London 2018", value: 13},
        {label: "Katowice 2019", value: 14},
        {label: "Sticker Capsule", value: 15},
        {label: "Sticker Capsule 2", value: 16},
        {label: "Sugarface Capsule", value: 17},
        {label: "Team Roles Capsule", value: 18},
        {label: "Slid3 Capsule", value: 19},
        {label: "Pinups Capsule", value: 20},
        {label: "Enfu Sticker Capsule", value: 21},
        {label: "Perfect World Sticker Capsule 1", value: 22},
        {label: "Perfect World Sticker Capsule 2", value: 23},
        {label: "Community Capsule 2018", value: 24},
        {label: "Skill Groups Capsule", value: 25},
        {label: "Bestiary Capsule", value: 26},
        {label: "Community Sticker Capsule 1", value: 27}
    ]
}

const Detail = ({
                    price: {from = '', to = ''},
                    type = 0,
                    quality = 0,
                    skins = 0,
                    blocked = true,
                    blockedDays = 8,
                    StatTrak = false,
                    Stickers = false,
                    souvenir = false,
                    nametag = false,
                    teams = 0,
                    collections = 0,
                    handleChangeFieldFilter
                }) => (
    <div className="detail">
        <table>
            <tbody>
            <tr>
                <td colSpan={2}>
                    <h4>Скины</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <small>Скины с блоком</small>
                </td>
                <td>
                    {blocked ?
                        <i
                            className="icon fa fa-toggle-on pointer"
                            onClick={() => handleChangeFieldFilter({
                            blocked: !blocked
                        })}/> :
                        <i
                            className="icon fa fa-toggle-off pointer"
                            onClick={() => handleChangeFieldFilter({
                            blocked: !blocked
                        })}/>}
                    {blocked ? <span>&nbsp;не более&nbsp;
                            <ReactSlider
                                className="horizontal-slider"
                                thumbClassName="example-thumb"
                                trackClassName="example-track"
                                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                                defaultValue={blockedDays}
                                value={blockedDays}
                                max={8}
                                onChange={value => handleChangeFieldFilter({
                                    blockedDays: value
                                })}
                            />&nbsp;
                            <span>дней</span></span> :
                        null}
                </td>
            </tr>
            <tr>
                <td>
                    <small>StatTrak</small>
                </td>
                <td>
                    {StatTrak ?
                        <i
                            className="icon fa fa-toggle-on pointer"
                            onClick={() => handleChangeFieldFilter({
                                StatTrak: !StatTrak
                            })}/> :
                        <i
                            className="icon fa fa-toggle-off pointer"
                            onClick={() => handleChangeFieldFilter({
                                StatTrak: !StatTrak
                            })}/>}
                </td>
            </tr>
            <tr>
                <td>
                    <small>Stickers</small>
                </td>
                <td>
                    {Stickers ?
                        <i
                            className="icon fa fa-toggle-on pointer"
                            onClick={() => handleChangeFieldFilter({
                                Stickers: !Stickers
                            })}/> :
                        <i
                            className="icon fa fa-toggle-off pointer"
                            onClick={() => handleChangeFieldFilter({
                                Stickers: !Stickers
                            })}/>}
                </td>
            </tr>
            <tr>
                <td>
                    <small>Souvenir</small>
                </td>
                <td>
                    {souvenir ?
                        <i
                            className="icon fa fa-toggle-on pointer"
                            onClick={() => handleChangeFieldFilter({
                                souvenir: !souvenir
                            })}/> :
                        <i
                            className="icon fa fa-toggle-off pointer"
                            onClick={() => handleChangeFieldFilter({
                                souvenir: !souvenir
                            })}/>}
                </td>
            </tr>
            <tr>
                <td>
                    <small>Nametag</small>
                </td>
                <td>
                    {nametag ?
                        <i
                            className="icon fa fa-toggle-on pointer"
                            onClick={() => handleChangeFieldFilter({
                                nametag: !nametag
                            })}/> :
                        <i
                            className="icon fa fa-toggle-off pointer"
                            onClick={() => handleChangeFieldFilter({
                                nametag: !nametag
                            })}/>}
                </td>
            </tr>
            <tr>
                <td>
                    <small>По цене</small>
                </td>
                <td>
                    <div className="range">
                        <div>
                            <input
                                className="input"
                                type="text"
                                value={from}
                                placeholder={'from'}
                                onChange={e => handleChangeFieldFilter({
                                    price: {
                                        from: e.target.value,
                                        to
                                    }
                                })}/>
                        </div>
                        <div>
                            <input
                                className="input"
                                type="text"
                                value={to}
                                placeholder={'to'}
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
                <td>
                    <small>Как искать</small>
                </td>
                <td>
                    <div className="type">
                        <select
                            className="select"
                            value={skins}
                            onChange={e => handleChangeFieldFilter({
                                skins: +e.target.value
                            })}>
                            {options.skins
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
                <td>
                    <small>По типу</small>
                </td>
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
                <td>
                    <small>По качеству</small>
                </td>
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
            <tr>
                <td colSpan={2}>
                    <h4>Наклейки</h4>
                </td>
            </tr>
            <tr>
                <td>
                    <small>Команды</small>
                </td>
                <td>
                    <div className="teams">
                        <select
                            className="select"
                            value={teams}
                            onChange={e => handleChangeFieldFilter({
                                teams: +e.target.value
                            })}>
                            {options.teams
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
                <td>
                    <small>Коллекции</small>
                </td>
                <td>
                    <div className="collections">
                        <select
                            className="select"
                            value={collections}
                            onChange={e => handleChangeFieldFilter({
                                collections: +e.target.value
                            })}>
                            {options.collections
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
        blocked: true,
        blockedDays: 8,
        StatTrak: false,
        Stickers: false,
        souvenir: false,
        nametag: false,
        type: 0,
        quality: 0,
        sort: true
    })

    const handleVisible = () => setVisible(!visible)

    const handleChangeFieldFilter = value => setFilter({...filter, ...value})

    return (
        <div className="filter">
            <div className="search" style={{flex: 1, minWidth: '150px'}}>
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
                {filter.price.from.length ? <span><small>от</small>
                    {filter.price.from}</span> : null}
                {filter.price.to.length ? <span><small>до</small>
                    {filter.price.to}</span> : null}
                {filter.type ?
                    <span>{options.type.find(f => f.value === filter.type).label}</span> :
                    null}
                {filter.quality ?
                    <span>{options.quality.find(f => f.value === filter.quality).label}</span> :
                    null}
                {filter.teams ?
                    <span>{options.teams.find(f => f.value === filter.teams).label}</span> :
                    null}
                {filter.collections ?
                    <span>{options.collections.find(f => f.value === filter.collections).label}</span> :
                    null}
                {filter.skins ?
                    <span>{options.skins.find(f => f.value === filter.skins).label}</span> :
                    null}
            </div>
            {visible ? <Detail {...{...filter, handleChangeFieldFilter}}/> : null}
        </div>
    )
}

export default Filter