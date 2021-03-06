import React, {useEffect, useRef} from 'react'
import Skin from "./Skin";

const ListScroll = ({
                        direction = 'ltr',
                        list = [],
                        handleClickSkin = () => {
                        },
                        handleRightClickSkin = () => {
                        },
                        onHidePopover = () => {
                        },
                        popoverId = null,
                        isConfirm = false,
                        valueConfirm = [],
                        onClickConfirmation = () => {
                        }
                    }) => {

    const scrollNode = useRef(null)

    const onClickSkin = id => {
        handleClickSkin(id)
    }

    useEffect(() => {
        const scrollContainer = scrollNode.current
        scrollContainer.addEventListener('scroll', onHidePopover, false)
        return () => {
            scrollContainer.removeEventListener('scroll', onHidePopover, false)
        }
    })

    return (
        <div className="list-scroll" style={{direction}} ref={scrollNode}>
            {list.map((skin, idx) => {
                const checkConfirm = valueConfirm.includes(skin.id)
                return (
                    <Skin
                        key={idx}
                        skin={skin}
                        onClick={onClickSkin}
                        onRightClick={handleRightClickSkin}
                        hide={onHidePopover}
                        isPopover={popoverId === skin.id}
                        isConfirm={isConfirm}
                        valueConfirm={checkConfirm}
                        onClickConfirmation={onClickConfirmation}/>
                )
            })}
        </div>
    )
}

export default ListScroll