import React from 'react';
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";


class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        messageCounter: PropTypes.number.isRequired,
    };

    static defaultProps = {
        chatId: 1,
    };

    render() {
        //console.log(this.props.chatId);
        return (
            <div className="header">
                <span>Чат { this.props.chatId }</span>
                <span>Число собщений: { this.props.messageCounter }</span>
            </div>
        )
    }
}

const mapStateToProps = ({ messageReducer , chatReducer }) => ({
    messageCounter: Object.keys(messageReducer.messages).length,
    chatId: chatReducer.chatId,
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);