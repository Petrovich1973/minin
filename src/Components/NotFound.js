import React, {useEffect} from 'react'

const NotFound = () => {

    useEffect(() => {

        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">Not Found</h3>
                <p className="align-center" style={{fontSize: '200%'}}>Ошибка 404</p>

            </div>
        </main>
    )
}

export default NotFound