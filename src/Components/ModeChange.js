import React from 'react'
import Aside from "./Aside";
import MainSection from "./MainSection";

const ModeChange = () => (
    <main>
        <Aside title={'Мои скины'} side={'left'} list={[...Array(20).keys()]}/>
        <MainSection list={[...Array(500).keys()]}/>
        <Aside title={'Скины Бота'} side={'right'} list={[...Array(20).keys()]}/>
    </main>
)

export default ModeChange