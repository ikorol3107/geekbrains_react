import React from 'react';
import MessageField from './MessageField';
import Header from './Header';
import Chatlist from './Chatlist';
import Styles from '../styles/styles.css';

export default class Layout extends React.Component {
    render() {

        return <div id="layout">
           <div> 
               <Header />
            </div>
            <div id="main">
            <Chatlist />
            <MessageField />
            </div>
        </div>
    }
};