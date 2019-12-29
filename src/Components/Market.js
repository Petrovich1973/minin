import React, {useState} from 'react'
import Step0 from "./MarketSteps/Step_0"

const Market = ({
                      handleReset = () => {
                          console.log('handleReset')
                      }
                  }) => {

    const [wizard, setWizard] = useState(0)

    const handleChangeStep = current => {
        setWizard(current)
    }

    return (
        <main>
            <div style={{flex: 1}}>

                <h3 className="title-block row-group">Продажа скинов</h3>

                <div className="container">

                    {wizard === 0 ?
                        <Step0 {...{
                            handleChangeStep,
                            handleReset
                        }}/> : null}

                </div>

            </div>
        </main>
    )
}

export default Market