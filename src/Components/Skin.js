import React from 'react'
import img from "../skin.png"
import skin from "../skin.jpg"

const size = {
    x: 266,
    y: 437
}

const Skin = ({
                  skin: {id = 0},
                  isPopover = null,
                  onClick = () => {
                  },
                  onRightClick = () => {
                  },
                  hide = () => {
                  }
              }) => {

    return (
        <div
            className="element"
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
                        height: size.y,
                        backgroundImage: `url(${img})`
                    },
                    content: 'Content Popover'
                }
                onRightClick(popover)
            }}>
                <span style={{
                    backgroundImage: `url(${skin})`
                }}>{id}</span>
        </div>
    )
}

export default Skin

// <Popover
// isOpen={isPopover}
// position={['top', 'bottom', 'left', 'right']} // preferred position
// onClickOutside={hide}
// content={({position, targetRect, popoverRect}) => (
//     <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
//         position={position}
//         targetRect={targetRect}
//         popoverRect={popoverRect}
//         arrowColor={'white'}
//         arrowSize={12}>
//         <div className="popover">
//             <img
//                 alt={''}
//                 src={img}/>
//         </div>
//     </ArrowContainer>
// )}>
// <div
// className="element"
// onClick={() => onClick(id)}
// onContextMenu={e => {
//     e.preventDefault()
//     onRightClick(id)
// }}>
// <span style={{
//     backgroundImage: `url(${skin})`
// }}>{id}</span>
// </div>
// </Popover>