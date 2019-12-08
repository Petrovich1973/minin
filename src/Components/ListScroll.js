import React, {useEffect, useRef} from 'react'
import Skin from "./Skin";

const ListScroll = ({
                        direction = 'ltr',
                        list = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}],
                        handleClickSkin = () => {
                        },
                        handleRightClickSkin = () => {
                        },
                        popoverId = null
                    }) => {

    const scrollNode = useRef(null)

    const onClickSkin = id => {
        handleClickSkin(id)
    }

    const onRightClickSkin = id => {
        handleRightClickSkin(id)
    }

    const hide = () => {
        handleRightClickSkin(null)
    }

    useEffect(() => {
        const scrollContainer = scrollNode.current
        scrollContainer.addEventListener('scroll', hide, false)
        return () => {
            scrollContainer.removeEventListener('scroll', hide, false)
        }
    })

    return (
        <div className="list-scroll" style={{direction}} ref={scrollNode}>
            {list.map((skin, idx) => <Skin
                key={idx}
                skin={skin}
                onClick={onClickSkin}
                onRightClick={onRightClickSkin}
                hide={hide}
                isPopover={popoverId === skin.id}/>)}
        </div>
    )
}

export default ListScroll