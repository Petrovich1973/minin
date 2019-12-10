import React, {useEffect, useRef} from 'react'
import Skin from "./Skin";

const ListScroll = ({
                        direction = 'ltr',
                        list = [{id: 1}, {id: 2}, {id: 3}],
                        handleClickSkin = () => {
                        },
                        handleRightClickSkin = () => {
                        },
                        onHidePopover = () => {
                        },
                        popoverId = null
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
            {list.map((skin, idx) => <Skin
                key={idx}
                skin={skin}
                onClick={onClickSkin}
                onRightClick={handleRightClickSkin}
                hide={onHidePopover}
                isPopover={popoverId === skin.id}/>)}
        </div>
    )
}

export default ListScroll