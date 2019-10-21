import React, {useState} from 'react'
import Aside from "./Aside"
import MainSection from "./MainSection"

const ModeChange = () => {

    const [skins, setSkins] = useState({
        left: {
            balance: 50,
            selected: 0
        },
        right: {
            balance: 500,
            selected: 0
        }
    })

    const handleSelectSkin = (name, from) => {

        const obj = {...skins[name]}

        if(from === 'balance') {
            const count = obj.selected < 21 ? 1 : 0
            obj.balance -= count
            obj.selected += count
            if(!count) alert('Это предел!')
        }
        if(from === 'selected') {
            obj.balance += 1
            obj.selected -=1
        }

        setSkins({
            ...skins,
            [name]: {...obj}
        })
    }

    const [activeList, setActiveList] = useState('left')

    const handleSwitchList = value => setActiveList(value)

    return (
        <main>

            <Aside
                disabled={activeList !== 'left'}
                handleSwitchList={handleSwitchList}
                handleClickSkin={handleSelectSkin}
                title={'Мои скины'}
                side={'left'}
                list={[...Array(skins.left.selected).keys()]}/>

            <MainSection
                activeList={activeList}
                handleClickSkin={handleSelectSkin}
                list={[...Array(skins[activeList].balance).keys()]}/>

            <Aside
                disabled={activeList !== 'right'}
                handleSwitchList={handleSwitchList}
                handleClickSkin={handleSelectSkin}
                title={'Скины Бота'}
                side={'right'}
                list={[...Array(skins.right.selected).keys()]}/>

        </main>
    )
}

export default ModeChange