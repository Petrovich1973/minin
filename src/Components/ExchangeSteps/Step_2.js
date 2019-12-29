import React, {useEffect, useState} from 'react'

const Step_2 = ({
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
                <p className="align-center">
                    <i className="fa fa-spinner fa-spin fa-3x"/>
                </p> :
                <>
                    <h4>Обмнен произведен</h4>
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

export default Step_2