import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {storiesOf, addDecorator} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';
import {withInfo} from '@storybook/addon-info';
import './style.scss';
import '../index.css';
import '../App/App.scss';
import Filter from "../Components/Filter";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import ListScroll from "../Components/ListScroll";
import DialogWindow from "../Components/DialogWindow";
import Modal from "../Components/Modal";

//////////////////////
storiesOf('Модули', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('Header', () => <BrowserRouter>
        <Header {...{
            login: text('login', 'UserLogin'),
            avatar: text('avatar', 'https://www.w3schools.com/images/colorpicker.gif')
        }}/>
    </BrowserRouter>)
    .add('Footer', () => <Footer/>)
    .add('Sidebar', () => <BrowserRouter>
        <div className="main">
            <Sidebar/>
        </div>
    </BrowserRouter>)
    .add('Filter', () => <Filter/>)
    .add('DialogWindow', () => <>
        <div className="inner_post">
            <h4>Agents, Weapons, and More</h4>
            <p>Operation Shattered Web features CS:GO’s first ‘agents,’ characters that can be equipped on the T or
                CT side. In addition to their unique look, Master Agents have special voice lines and
                animations–you’ll get one Master Agent when you earn your final reward. </p>
            <p>Along the way, you’ll earn several Operation Shattered Web Weapon Cases, along with weapons from
                three brand new weapons collections featuring designs from community artists. You’ll also earn
                all-new graffiti and community-designed stickers!</p>
            <h4>Missions Accomplished</h4>
            <p>Each week, you’ll get access to new missions in various CS:GO game modes, including cooperative
                Guardian missions and an all-new Strike mission. Missions are available to all players, but you’ll
                need an Operation Pass to redeem your rewards.</p>
            <p>You may recall that we recently shipped a few changes to bots in Deathmatch. Those bots will be ready
                for action in the Guardian and Strike missions, so watch out!</p>
            <h4>New Maps</h4>
            <p>We’re also shipping a few new maps today in various game modes. Defy gravity in the new Flying
                Scoutsman map Lunacy, and get ready to rumble in the community-made Danger Zone map Jungle. Looking
                for something more competitive? Try Studio, available as a Scrimmage or in the Casual Sigma map
                group!</p>
            <h4>Performance is its own Reward</h4>
            <p>Did you earn the most MVPs? The most enemies flashed? The most… something? Find out with Accolades,
                special call-outs at the end-of-match screen. </p>
            <h4>Parting Shot</h4>
            <p>We’re making adjustments to a few rifles in CS:GO. The SG553’s price has returned to $3000 to bring
                its price more in line with its value, and the FAMAS and Galil have both gotten $200 price cuts and
                buffs to their full-auto spraying accuracy. </p>
        </div>
        <Modal>
            <DialogWindow
                width={number('width', 600)}
                classNameHeader={select('Style name', {
                    Dark: 'box-primary',
                    Success: 'box-green',
                    Danger: 'box-red',
                    Warning: 'box-orange',
                    Info: 'box-blue'
                }, 'box-primary')}
                title={text('title', 'Защита криворуких, или неоговоренные действия админиситрации')}
                content={<div style={{padding: '1rem'}}>
                    {text('content', 'Сегодня после очередной соревновательной игры в которой был в моей команде очень КРИВОРУКИЙ игрок (ссылка на таблицу http://c2n.me/3b5wN3J) , которого естественно пришлось выгнать чтобы не мешался получил наказание - БАН в соревновательных играх, за то, что "много выгнал игроков" вот скрин http://c2n.me/3b5voN3 . А куда деваться если такие есть? что с ними делать? играть только мешают. от БОТов толку больше. и где товарищи администраторы этот виртуальный счетчик выкинутых игроков? Где оговорено наказание за изгнание игроков? Выгоняю лишь тех, кто играть мешает, и что в итоге? наказывают нормальных игроков, а вот эти чудики дальше лазиют и мешают нормальной игре другим.')}
                    <p style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <button className="btn box-blue">Button Action</button>
                    </p>
                </div>}/>
        </Modal></>)
    .add('ListSkins', () => <div className="main">
        <main>
            <section style={{height: '100vh'}}>
                <ListScroll list={[...Array(number('Количество скинов', 5)).keys()]}/>
            </section>
        </main>
    </div>)
storiesOf('Элементы', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('Typography', () => <>
        <div style={{display: 'flex', height: '100vh', overflow: 'auto'}}>
            <div style={{padding: '1rem'}}>
                <h1>H1 HEADING</h1>
                <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will
                    find exactly what he/she is looking for. With advanced features of activating account and new login
                    widgets, you will definitely have a great experience of using our web page.</p>
                <h2>H2 HEADING</h2>
                <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will
                    find exactly what he/she is looking for. With advanced features of activating account and new login
                    widgets, you will definitely have a great experience of using our web page.</p>
                <h3>H3 HEADING</h3>
                <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will
                    find exactly what he/she is looking for. With advanced features of activating account and new login
                    widgets, you will definitely have a great experience of using our web page.</p>
                <h4>H4 HEADING</h4>
                <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will
                    find exactly what he/she is looking for. With advanced features of activating account and new login
                    widgets, you will definitely have a great experience of using our web page.</p>
                <h5>H5 HEADING</h5>
                <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will
                    find exactly what he/she is looking for. With advanced features of activating account and new login
                    widgets, you will definitely have a great experience of using our web page.</p>
                <h6>H6 HEADING</h6>
                <p>Welcome to our wonderful world. We sincerely hope that each and every user entering our website will
                    find exactly what he/she is looking for. With advanced features of activating account and new login
                    widgets, you will definitely have a great experience of using our web page.</p>
            </div>
            <div style={{padding: '1rem', width: '25%', flexShrink: 0}}>
                <h1>H1 HEADING</h1>
                <h2>H2 HEADING</h2>
                <h3>H3 HEADING</h3>
                <h4>H4 HEADING</h4>
                <h5>H5 HEADING</h5>
                <h6>H6 HEADING</h6>
                <div className="storybook-colors-box">
                    <div>
                        <div className="box-light">box-light</div>
                        <div className="box-primary">box-primary</div>
                        <div className="box-green">box-green</div>
                        <div className="box-orange">box-orange</div>
                        <div className="box-red">box-red</div>
                        <div className="box-blue">box-blue</div>
                    </div>
                    <div>
                        <div className="color-light">text-light</div>
                        <div className="color-primary">text-primary</div>
                        <div className="color-green">text-green</div>
                        <div className="color-orange">text-orange</div>
                        <div className="color-red">text-red</div>
                        <div className="color-blue">text-blue</div>
                    </div>
                </div>
            </div>
            <div style={{padding: '1rem', width: '25%', flexShrink: 0}}>
                <h5>H5 HEADING</h5>
                <p>
                    <span>Welcome to our wonderful world. This is a</span><br/>
                    <strong> bold text</strong><br/>
                    <mark>This is a highlighted text</mark>
                    <br/>
                    <span> We sincerely hope<sub>that each and</sub> every user entering our website will find exactly what he/she is looking for.</span>
                    <em>With advanced <sup>features of activating</sup> account and new login</em><br/>
                    <span title="Tooltips">Tooltips</span><br/>
                    <span>widgets, you will definitely have a great experience of using our web page.</span><br/>
                    <span className="text-strike">This is a strickethrough text</span><br/>
                    <span className="text-underline">This is an underlined text.</span><br/>
                    <a className="link" href="#">Link</a><br/>
                    <a className="link-hover" href="#">Hover link</a><br/>
                    <a className="link-active" href="#">Press link</a>
                </p>
                <ul>
                    <li>Consulting</li>
                    <li>Customer Service</li>
                    <li>Innovation</li>
                    <li>Management</li>
                    <li>Ethics</li>
                </ul>
                <ol>
                    <li>Consulting</li>
                    <li>Customer Service</li>
                    <li>Innovation</li>
                    <li>Management</li>
                    <li>Ethics</li>
                </ol>
                <dir>
                    <li>html</li>
                    <li>xhtml</li>
                    <li>css</li>
                </dir>
            </div>
        </div>
    </>)