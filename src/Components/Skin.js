import React, {useState} from 'react'
import Popover from 'react-tiny-popover'
import img from "../skin.png";
import skin from "../skin.jpg";

const Skin = ({idx = 0, onClick, state, show, hide}) => {

    return (
        <Popover
            isOpen={state === idx}
            position={['top', 'bottom', 'left', 'right']} // preferred position
            onClickOutside={() => hide(idx)}
            content={(
                <div>
                    <img
                        alt={''}
                        src={img}/>
                </div>
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
                    backgroundRepeat: 'no-repeat'}}>{idx}</span>
            </div>
        </Popover>
    )
}

export default Skin