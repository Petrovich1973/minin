import React from 'react'
import classnames from 'classnames'
import skin from '../skin.jpg'

const size = {
    x: 266,
    y: 437
}

const Skin = ({
                  skin: {id = 0, pic = ''},
                  isPopover = null,
                  onClick = () => {
                  },
                  onRightClick = () => {
                  }
              }) => {

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
                        title: 'StatTrak™ Керамбит',
                        sup: 'Кровавая паутина',
                        exterior: 'Прямо с завода',
                        days_left: 3,
                        float_value: 30.06860896,
                        float_chart: [7, 8, 23, 7, 55],
                        link_inspect: 'https://s.cs.money/afb7Guo_image.jpg',
                        link_on_bot: 'https://s.cs.money/afb7Guo_image.jpg',
                        link_in_steam: 'https://s.cs.money/afb7Guo_image.jpg',
                        price: '$ 200.00',
                        pic: pic || skin
                    }
                }
                onRightClick(popover)
            }}>
                <span style={{
                    backgroundImage: `url(${pic || skin})`
                }}>{id}</span>
        </div>
    )
}

export default Skin