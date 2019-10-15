import React from 'react';
import './App.scss';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Aside from "./Components/Aside";
import MainSection from "./Components/MainSection";

const App = () => (
    <React.Fragment>
        <Header/>
        <main>
            <Aside title={'Мои скины'} side={'left'} list={[...Array(20).keys()]}/>
            <MainSection list={[...Array(500).keys()]}/>
            <Aside title={'Скины Бота'} side={'right'} list={[...Array(20).keys()]}/>
        </main>
        <Footer/>
    </React.Fragment>
)

export default App;
