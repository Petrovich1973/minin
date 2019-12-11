import React from "react"
import classnames from 'classnames'
import onClickOutside from "react-onclickoutside"

const Popover = ({
                     position: {x = 0, y = 0},
                     className = null,
                     style = {},
                     content = "",
                     onHide = () => {
                     }
                 }) => {
    Popover.handleClickOutside = () => onHide()
    return (
        <div className={classnames("popover", className)} style={{...style, top: y, left: x}}>
            {content}
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Popover.handleClickOutside
}

export default onClickOutside(Popover, clickOutsideConfig)