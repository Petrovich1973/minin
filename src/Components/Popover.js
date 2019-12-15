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
                         exterior = 'Прямо с завода',
                         days_left = 3,
                         float_value = 0.06860896,
                         float_chart = [7, 8, 23, 7, 55],
                         link_inspect = '/',
                         link_on_bot = '/',
                         link_in_steam = '/',
                         price = '$ 200.00',
                         pic = 'https://s.cs.money/XKSYtz5_preview.png'
                     },
                     onHide = () => {
                     }
                 }) => {
    Popover.handleClickOutside = () => onHide()

    const chartRender = (arr, current) => {
        const colors = ['blue', 'green', 'yellow', 'orange', 'red']
        return (
            <div className="float_chart">
                {colors.map((el, i) => (
                    <div key={i} style={{width: `${arr[i]}%`, backgroundColor: el}}/>
                ))}
                <div className="current" style={{left: `${current}%`}}/>
            </div>
        )
    }
    return (
        <div className={classnames("popover", className)} style={{...style, top: y, left: x}}>
            <div className="header">
                <div className="title">{title}</div>
                <div className="sup sm">{sup}</div>
                <div className="exterior"><strong>{exterior}</strong></div>
            </div>

            <div className="pic popoverMinin" style={{backgroundImage: `url(${pic})`}}/>

            <div className="footer">
                <div className="days_left sm">Блокировка {days_left} дн.</div>
                <div className="float">
                    <div className="float_label">
                        <span>Float</span>
                        <span>{float_value}</span>
                    </div>
                    {chartRender(float_chart, float_value)}
                </div>
                <div className="links sm">
                    <a href={link_inspect} target="_blank">Inspect</a>
                    <a href={link_on_bot} target="_blank">On bot</a>
                    <a href={link_in_steam} target="_blank">in steam</a>
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