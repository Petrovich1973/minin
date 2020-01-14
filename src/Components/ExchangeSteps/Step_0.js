import React, {useEffect} from 'react'

const Step_0 = ({
                    handleChangeStep,
                    handleReset
                }) => {
    useEffect(() => {
        const timeId = setTimeout(() => {
            handleChangeStep(1)
        }, 2000)
        return () => {
            clearTimeout(timeId)
        }
    })
    return (
        <div className="wizard-current">
            <h4>Подготовка к обмену</h4>
            <p className="align-center">
                <i className="fa fa-spinner fa-spin fa-3x"/>
            </p>
            <p
                className="align-center pointer effect_01"
                style={{fontSize: '300%'}}
                onClick={handleReset}><span>&#10005;</span></p>
        </div>
    )
}

export default Step_0