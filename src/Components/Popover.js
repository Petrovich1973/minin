import React from "react"
import classnames from 'classnames'
import onClickOutside from "react-onclickoutside"

const Popover = ({
                     position: {x = 0, y = 0},
                     className = null,
                     style = {},
                     content: {
                         title = 'StatTrak™ Керамбит',
                         sup = 'Кровавая паутина',
                         days_left = 3,
                         float_value = 0.01,
                         star = false,
                         link_inspect = '/',
                         link_on_bot = '/',
                         link_in_steam = '/',
                         price = '$ 200.00',
                         pic = 'https://s.cs.money/XKSYtz5_preview.png',
                         stickers = []
                     },
                     onHide = () => {
                     }
                 }) => {
    Popover.handleClickOutside = () => onHide()

    const floatConfig = [
        {value: [0, 7], chart: 7, color: 'blue', label: 'FN', exterior: 'Прямо с завода'},
        {value: [8, 15], chart: 8, color: 'green', label: 'MW', exterior: 'Немного поношенное'},
        {value: [16, 38], chart: 23, color: 'yellow', label: 'FT', exterior: 'После полевых испытаний'},
        {value: [39, 45], chart: 7, color: 'orange', label: 'WW', exterior: 'Поношенное'},
        {value: [46, 100], chart: 55, color: 'red', label: 'BS', exterior: 'Закалённое в боях'}
    ]

    const chartRender = (current) => {
        return (
            <div className="float_chart">
                {floatConfig.map((el, i) => (
                    <div key={i} style={{width: `${el.chart}%`, backgroundColor: el.color}}/>
                ))}
                <div className="current" style={{left: `${current * 100}%`}}/>
            </div>
        )
    }

    const exteriorRender = (current = 0, name = 'exterior') => {
        const _current = Math.floor(current * 100)
        return floatConfig.find(s => (s.value[0] <= _current && s.value[1] >= _current))[name]
    }

    return (
        <div className={classnames("popover", className)} style={{...style, top: y, left: x}}>
            <div className="header">
                <div className="title">{star && <i className="fa fa-star" title="StatTrak"/>} {title}</div>
                <div className="sup sm">{sup}</div>
                <div className="exterior">
                    <strong>{exteriorRender(float_value, 'exterior')}</strong>
                </div>
            </div>

            <div className="pic popoverMinin" style={{backgroundImage: `url(${pic})`}}/>

            <div className="stickers">
                {stickers.map((st, i) => <img alt="" key={i} src={st} width={40}/>)}
            </div>

            <div className="footer">
                <div className="days_left sm">Блокировка {days_left} дн.</div>
                <div className="float">
                    <div className="float_label">
                        <span>Float</span>
                        <span>{float_value}</span>
                    </div>
                    {chartRender(float_value)}
                </div>
                <div className="links sm">
                    <a href={link_inspect} target="_blank" rel="noreferrer noopener">Inspect</a>
                    <a href={link_on_bot} target="_blank" rel="noreferrer noopener">On bot</a>
                    <a href={link_in_steam} target="_blank" rel="noreferrer noopener">in steam</a>
                </div>
                <div className="price">{price}</div>
            </div>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Popover.handleClickOutside
}

export default onClickOutside(Popover, clickOutsideConfig)