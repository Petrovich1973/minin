import React from 'react'
import Skin from "./Skin";

const ListScroll = ({direction = 'ltr', list = [], handleClickSkin}) => (
    <div className="list-scroll" style={{direction}}>
        {list.map((skin, idx) => <Skin key={idx} idx={idx} onClick={handleClickSkin}/>)}
    </div>
)

export default ListScroll