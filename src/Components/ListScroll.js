import React, {useState} from 'react'
import Skin from "./Skin";

const ListScroll = ({direction = 'ltr', list = [], handleClickSkin}) => {

    const [state, setState] = useState(null)

    const hide = () => {
        setState(null)
    }

    const show = id => {
        setState(id)
    }

    return (
        <div className="list-scroll" style={{direction}}>
            {list.map((skin, idx) => <Skin
                key={idx}
                idx={idx}
                onClick={handleClickSkin}
                state={state}
                show={show}
                hide={hide}/>)}
        </div>
    )
}

export default ListScroll