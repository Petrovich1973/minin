import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import '../index.css';
import '../App.scss';
import Filter from "../Components/Filter";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import ListScroll from "../Components/ListScroll";

//////////////////////
storiesOf('Модули', module)
    .addDecorator(withKnobs)
    .add('Header', withInfo()(() => <BrowserRouter>
        <Header {...{
            user: {
                auth: boolean('isAuthorization', true),
                login: text('login', 'UserLogin'),
                password: 'password',
                avatar_img: 'https://cdn.pixabay.com/photo/2016/11/24/21/39/sexy-1857310_960_720.jpg'
            }
        }}/>
    </BrowserRouter>))
    .add('Footer', withInfo()(() => <Footer/>))
    .add('Sidebar', withInfo()(() => <BrowserRouter>
        <div className="main">
            <Sidebar/>
        </div>
    </BrowserRouter>))
    .add('Filter', withInfo()(() => <Filter/>))
    .add('ListSkins', withInfo()(() => <div className="main">
        <main>
            <section style={{height: '100vh'}}>
                <ListScroll list={[...Array(number('Количество скинов', 50)).keys()]}/>
            </section>
        </main>
    </div>));