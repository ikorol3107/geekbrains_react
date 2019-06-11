import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import MessageField from './components/MessageField';

const component = <p>Hello, world!</p>;

ReactDOM.render(
    < MessageField />,
    document.getElementById('root'),
);