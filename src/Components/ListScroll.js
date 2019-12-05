import React, {useState, useEffect, useRef} from 'react'
import Skin from "./Skin";

const ListScroll = ({direction = 'ltr', list = [], handleClickSkin = () => {}}) => {

    const scrollNode = useRef(null)

    const [state, setState] = useState(null)

    const hide = () => {
        setState(null)
    }

    const show = id => {
        setState(id)
    }

    const onClickSkin = () => {
        hide()
        handleClickSkin()
    }

    const onScroll = () => hide()

    useEffect(() => {
        const scr = scrollNode.current
        scr.addEventListener('scroll', onScroll, false)
        return () => {
            scr.removeEventListener('scroll', onScroll, false)
        }
    })

    return (
        <div className="list-scroll" style={{direction}} ref={scrollNode}>
            {list.map((skin, idx) => <Skin
                key={idx}
                idx={idx}
                onClick={onClickSkin}
                state={state}
                show={show}
                hide={hide}/>)}
        </div>
    )
}

export default ListScroll