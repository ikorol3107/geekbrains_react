import React from 'react';
import Message from './Message';
import { TextField, FloatingActionButton  } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import '../styles/messages.css';
import PropTypes from "prop-types";

export default class MessageField extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        messageElements: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    handleSendMessage = () => {
        this.props.sendMessage(this.state.input)
    };

    handleType = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) { // Enter
            this.handleSendMessage();
        }
    };

    render() {
        const { chatId } = this.props;

        return <div>
            <div className="message-field">
                { this.props.messageElements }
            </div>
            <TextField
                name="input"
                value={ this.state.input }
                onChange={ this.handleType }
                onKeyUp={ this.handleKeyUp }
                hintText="Напишите сообщение"
            />
            <FloatingActionButton onClick={ this.handleSendMessage }>
                <SendIcon />
            </FloatingActionButton>
        </div>
    }
}