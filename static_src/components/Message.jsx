import React from 'react';
// props - это внешние переменные, которые передаются компоненту
import PropTypes from 'prop-types';

export default class Message extends React.Component {
    
    static propTypes = {
        text: PropTypes.string,
    };
    static defaultProps = {
        text: 'Вот это класс!'
    };
    render() {
      return <div>{ this.props.text }</div>;
    }
}