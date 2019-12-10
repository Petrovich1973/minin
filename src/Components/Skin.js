import React from 'react'
import Popover, {ArrowContainer} from 'react-tiny-popover'
import img from "../skin.png"
import skin from "../skin.jpg"

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
                    body.scrollWidth > e.clientX + 300 ? e.clientX : e.clientX - 300
                )
                const y = Math.abs(
                    body.scrollHeight > e.clientY + 500 ? e.clientY : e.clientY - 500
                )
                const popover = {
                    isOpen: true,
                    position: {x, y},
                    id,
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