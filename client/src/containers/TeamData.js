import React, { Component } from 'react';

export default class TeamData extends Component {
  componentDidMount() {
    const { pass } = this.props;
    console.log('Mounted!');
  }

  render() {
    const { val } = this.props;
    console.log('rendering');
    return <h1>Hi TeamData</h1>;
  }
}
