import React, {useState} from 'react'
import ListScroll from "../ListScroll";

const Step_1 = ({
                    skinsUser = [],
                    handleChangeStep,
                    handleReset
                }) => {
    const [confirm, setConfirm] = useState([])
    const onClickConfirmation = id => setConfirm(confirm.concat(id))
    return (
        <div className="wizard-current">
            <h4>Подтверждение вывода скинов</h4>
            <div style={{width: 800}}>
                <div className="skinsWrapCenter" style={{background: 'rgba(0,0,0,0.06)'}}>
                    {skinsUser.length ? <ListScroll
                        list={skinsUser}
                        isConfirm={true}
                        valueConfirm={confirm}
                        onClickConfirmation={onClickConfirmation}/> : <span>Не выбраны скины</span>}
                </div>
            </div>

            <p className="align-center">Пожалуйста подтвердите вывод</p>
            <p className="align-center"><small>Вы подтвердили вывод {confirm.length} из {skinsUser.length}</small></p>

            <p style={{display: 'inline-flex'}}>
                <button
                    disabled={!confirm.length}
                    className="btn box-primary"
                    onClick={() => handleChangeStep(2)}>
                    <span>Завершить вывод</span>
                </button>
            </p>
            <p
                className="align-center pointer effect_01"
                style={{fontSize: '300%'}}
                onClick={handleReset}><span>&#10005;</span></p>
        </div>
    )
}

export default Step_1