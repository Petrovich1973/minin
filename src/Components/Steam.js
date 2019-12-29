import React, {useState} from 'react'
import Step0 from "./SteamSteps/Step_0"
import Step1 from "./SteamSteps/Step_1"
import Step2 from "./SteamSteps/Step_2"

const Exchange = ({
                      skinsUser = [],
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

                <h3 className="title-block row-group">Вывод скинов в Steam</h3>

                <div className="container">

                    {wizard === 0 ?
                        <Step0 {...{
                            handleChangeStep,
                            handleReset
                        }}/> : null}

                    {wizard === 1 ?
                        <Step1 {...{
                            skinsUser,
                            handleChangeStep,
                            handleReset
                        }}/> : null}

                    {wizard === 2 ?
                        <Step2 {...{
                            handleChangeStep,
                            handleReset
                        }}/> : null}

                </div>

            </div>
        </main>
    )
}

export default Exchange