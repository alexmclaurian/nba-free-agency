import React, { Component } from 'react';

const TeamTable = (props) => {
  if (props.obj) {
    //
    const mapped = props.obj.map((team, i) => {
      return (
        <div key={i}>
          <h4>{team.name}</h4>
        </div>
      );
    });
    return mapped;
  }
  return '';
};

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.getTeams = this.getTeams.bind(this);
  }

  getTeams = async () => {
    const result = await fetch('/api/allTeams');
    const resToJson = await result.json();
    this.setState({ data: resToJson });
  };

  componentDidMount = () => {
    this.getTeams();
  };

  render() {
    return <TeamTable obj={this.state.data} />;
  }
}
