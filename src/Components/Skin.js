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
        <Popover
            isOpen={isPopover}
            position={['top', 'bottom', 'left', 'right']} // preferred position
            onClickOutside={hide}
            content={({position, targetRect, popoverRect}) => (
                <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                    position={position}
                    targetRect={targetRect}
                    popoverRect={popoverRect}
                    arrowColor={'white'}
                    arrowSize={12}>
                    <div className="popover">
                        <img
                            alt={''}
                            src={img}/>
                    </div>
                </ArrowContainer>
            )}>
            <div
                className="element"
                onClick={() => onClick(id)}
                onContextMenu={e => {
                    e.preventDefault()
                    onRightClick(id)
                }}>
                <span style={{
                    backgroundImage: `url(${skin})`
                }}>{id}</span>
            </div>
        </Popover>
    )
}

export default Skin