import React from 'react';
import Message from './Message';
import Styles from '../styles/styles.css';

export default class MessageField extends React.Component {
    
    state = {
        messages: [
            'Робот: - Ты уверен? ', 'Робот: - да ладно! ', 'Робот: - А что ты предлагаешь? '
        ]
    };

    handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, 'Я: - "Сообщение пользователя.." ' ] });
    };
    
    componentDidUpdate(prevProps, prevState) {
        function randomElement( array ) {
            return array[ Math.floor( Math.random() * array.length  ) ];
        }
        var botMessage = randomElement( this.state.messages.slice(0, 3) );
        console.log('prevState: ', prevState, 'prevProps: ', prevProps);
        //console.log('thisState: ', this.state, 'thisProps: ', this.props);
       //return  setTimeout( ()=> console.log(botMessage), 1000);

       function drawBotMessage() {
        const div = document.createElement('div');
        div.innerText = botMessage;
        document.getElementById('messageField').insertBefore(div, document.getElementById('button') );
        }
        return setTimeout( ()=> (drawBotMessage()), 1000);
        //return console.log( this.state.messages.slice(0, 3));
    }

    render() {
        const messageElements = this.state.messages.map(( text, index) => (
        <Message key={ index } text={ text } />));
      return <div id='messageField'>
          { messageElements }
          <button id='button' onClick={ this.handleClick }>Отправить сообщение</button>
      </div>;
    }
}