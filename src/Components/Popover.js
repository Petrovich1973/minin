import React from "react"
import onClickOutside from "react-onclickoutside"

const Popover = ({
                     position: { x = 0, y = 0 },
                     content = "content",
                     onHide = () => {}
                 }) => {
    Popover.handleClickOutside = () => onHide()
    return (
        <div className="popover" style={{ top: y, left: x }}>
            {content}
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Popover.handleClickOutside
}

export default onClickOutside(Popover, clickOutsideConfig)