import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// let counter = 1;
// setInterval(() => { counter = counter + 1 }, 1000);
// setInterval(() => { console.log(counter) }, 1000);
//
// const component = (counter) = <ul>
//     <li style={{ color: 'red' }}>Урок 1. Настраиваем среду разработки</li>
//     <li>Урок 2. Погружаемся в React</li>
//     <li>Счётчик: { counter }</li>
// </ul>;
//
// const element = React.createElement(
//     'h1',
//     { className: "element" },
//     'ELEM'
// );
//
// const elementJSX = <h1 className="element">ELEM</h1>;

ReactDOM.render(
    <MuiThemeProvider>
        <Layout />      
    </MuiThemeProvider>,
    document.getElementById('root'),
); 