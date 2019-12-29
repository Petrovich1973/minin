import React, {useEffect, useState} from 'react'

const Step_0 = ({
                    handleChangeStep,
                    handleReset
                }) => {

    const [state, setState] = useState(false)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setState(true)
        }, 2000)
        return () => {
            clearTimeout(timeId)
        }
    })

    return (
        <div className="wizard-current">
            {!state ?
                <>
                    <h4>Подготовка к продаже</h4>
                    <p className="align-center">
                        <i className="fa fa-spinner fa-spin fa-3x"/>
                    </p>
                </> :
                <>
                    <h4>Скины размещены на площадке продажи</h4>
                    <p
                        className="align-center pointer effect_01"
                        style={{fontSize: '300%'}}
                        onClick={handleReset}>
                        <span>&#10005;</span>
                    </p>
                </>}
        </div>
    )
}

export default Step_0