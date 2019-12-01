import React from 'react'
import Popover, {ArrowContainer} from 'react-tiny-popover'
import img from "../skin.png";
import skin from "../skin.jpg";

const Skin = ({idx = 0, onClick, state, show, hide}) => {

    return (
        <Popover
            isOpen={state === idx}
            position={['top', 'bottom', 'left', 'right']} // preferred position
            onClickOutside={() => hide(idx)}
            content={({position, targetRect, popoverRect}) => (
                <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
                    position={position}
                    targetRect={targetRect}
                    popoverRect={popoverRect}
                    arrowColor={'white'}
                    arrowSize={12}
                >
                    <div className="popover">
                        <img
                            alt={''}
                            src={img}/>
                    </div>
                </ArrowContainer>
            )}>
            <div
                onContextMenu={(e) => {
                    e.preventDefault()
                    show(idx)
                }}
                className="element"
                onClick={onClick}>
                <span style={{
                    backgroundImage: `url(${skin})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>{idx}</span>
            </div>
        </Popover>
    )
}

export default Skin