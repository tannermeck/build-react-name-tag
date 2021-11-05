import React, { Component } from 'react';
import Controls from '../components/name-tag/Controls.jsx';
import Display from '../components/name-tag/Display.jsx';

export default class NameTag extends Component {
    state = {
      greeting: '',
      name: ''
    }
    onchangeGreeting = ({ target }) => {
      this.setState({ greeting: target.value });
    }
    onchangeName = ({ target }) => {
      this.setState({ name: target.value });
    }
    render(){
      const { greeting, name } = this.state;
      return (
        <>
          <Controls changeGreeting={this.onchangeGreeting} 
            greeting={greeting} 
            changeName={this.onchangeName}
            name={name}/>
          <Display greeting={greeting} name={name} />
        </>
      );
    }
}
