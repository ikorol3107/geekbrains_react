import React from 'react';
import MessageField from './MessageField';

export default class App extends React.Component {
    state = {
        title: 'title',
    };

    componentWillMount() {
        console.log('WillMountApp');
        setTimeout( ()=> this.setState({ title: 'Updated'}), 1000);
    }
    componentDidMount() {
        console.log('DidMountApp');
    }
    componentDidUpdate() {
        console.log('DidUpdateApp');
        setTimeout( ()=> this.setState({ title: 'Updated'}), 1000);
    // wilAnmount нужен при исчезновении компонента, например, при закрытии страницы
    }
    render() {
        console.log('render');
      return <div>
          <h1>{ this.state.title } </h1>
          < MessageField label={ this.state.title + 'counter'}/>
      </div>;
    }
}