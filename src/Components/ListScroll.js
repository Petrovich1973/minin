import React from 'react'
import Skin from "./Skin";

const ListScroll = ({direction = 'ltr', list = []}) => (
    <div className="list-scroll" style={{direction}}>
        {list.map((skin, idx) => <Skin key={idx} idx={idx}/>)}
    </div>
)

export default ListScroll