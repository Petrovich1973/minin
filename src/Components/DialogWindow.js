import React from 'react'
import classNames from 'classnames'

const DialogWindow = ({
                          width = 600,
                          title = 'Title',
                          icon = '',
                          classNameHeader = '',
                          content = '',
                          onClose = () => {
                              console.log('close DialogWindow')
                          }
                      }) => (
    <div className="DialogWindow" style={{width}}>
        <div
            title={title}
            className={classNames("header", classNameHeader.length ? classNameHeader : 'box-primary')}>
            <h4>{icon}{title}</h4>
            <div className="close" onClick={onClose}>
                <i className="fa fa-close"/>
            </div>
        </div>
        <div className="content">
            {content}
        </div>
    </div>
)

export default DialogWindow