import React from 'react'
import classnames from 'classnames'
import skin from '../skin.jpg'

const size = {
    x: 266,
    y: 437
}

const Skin = ({
                  skin: {
                      id = 0,
                      title = 'StatTrak™ M9 Bayonet',
                      float = 0.01,
                      star = false,
                      price = 3000,
                      pic = ''
                  },
                  isPopover = null,
                  onClick = () => {
                  },
                  onRightClick = () => {
                  }
              }) => {

    const floatConfig = [
        {value: [0, 7], chart: 7, color: 'blue', label: 'FN', exterior: 'Прямо с завода'},
        {value: [8, 15], chart: 8, color: 'green', label: 'MW', exterior: 'Немного поношенное'},
        {value: [16, 38], chart: 23, color: 'yellow', label: 'FT', exterior: 'После полевых испытаний'},
        {value: [39, 45], chart: 7, color: 'orange', label: 'WW', exterior: 'Поношенное'},
        {value: [46, 100], chart: 55, color: 'red', label: 'BS', exterior: 'Закалённое в боях'}
    ]


    const floatRender = (current = 0.01, name = 'label') => {
        const _current = Math.floor(current * 100)
        return floatConfig.find(s => (s.value[0] <= _current && s.value[1] >= _current))[name]
    }

    return (
        <div
            className={classnames("element", isPopover && 'light')}
            onClick={() => onClick(id)}
            onContextMenu={e => {
                e.preventDefault()
                const body = document.querySelector("body")
                const x = Math.abs(
                    body.scrollWidth > e.clientX + size.x ? e.clientX : e.clientX - size.x
                )
                const y = Math.abs(
                    body.scrollHeight > e.clientY + size.y ? e.clientY : e.clientY - size.y
                )
                const popover = {
                    isOpen: true,
                    position: {x, y},
                    id,
                    className: 'popoverMinin',
                    style: {
                        width: size.x,
                        height: size.y
                    },
                    content: {
                        title: title,
                        sup: 'Кровавая паутина',
                        exterior: 'Прямо с завода',
                        days_left: 3,
                        float_value: float,
                        star,
                        link_inspect: 'https://s.cs.money/afb7Guo_image.jpg',
                        link_on_bot: 'https://s.cs.money/afb7Guo_image.jpg',
                        link_in_steam: 'https://s.cs.money/afb7Guo_image.jpg',
                        price: `$ ${price}.00`,
                        pic: pic || skin
                    }
                }
                onRightClick(popover)
            }}>
                <span style={{backgroundImage: `url(${pic || skin})`}}>
                    <span className="title">{star && <i className="fa fa-star" title="StatTrak"/>} {title}</span>
                    <span className="foot">
                        <span className="price">$ {price}.00</span>
                        <span className="exterior">{floatRender(float, 'label')}</span>
                    </span>
                </span>
        </div>
    )
}

export default Skin