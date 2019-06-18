import React from 'react';
import PropTypes from "prop-types";


export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        messagesSum: PropTypes.func.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        this.props.messagesSum();
        return (
            <h1 className="header">Чат { this.props.chatId }</h1>,
            <div> { this.props.messagesSum } </div>
        )
    }
}