import React from 'react'

const Modal = ({
                   children = '',
                   onClose = () => {
                       console.log('close Modal')
                   }
               }) => (
    <div className="Modal">
        <div className="overlay" onClick={onClose}/>
        {children}
    </div>
)

export default Modal