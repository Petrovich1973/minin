import React from 'react'

const Skin = ({idx = 0, onClick}) => (
    <div className="element" onClick={onClick}><span>{idx}</span></div>
)

export default Skin