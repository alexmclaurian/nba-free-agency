import React, { Component } from 'react';

const PlayerTable = (props) => {
  if (props.obj) {
    //
    const mapped = props.obj.map((player, i) => {
      return (
        <div key={i}>
          <h3>{player.playername}</h3>
          <div>Points per game: {player.pts}</div>
        </div>
      );
    });
    return mapped;
  }
  return '';
};

export default class Players extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };

    this.getPlayers = this.getPlayers.bind(this);
  }

  getPlayers = async () => {
    const result = await fetch('/api/allPlayers');
    const resToJson = await result.json();
    this.setState({ data: resToJson });
  };

  componentDidMount = () => {
    this.getPlayers();
  };

  render() {
    return <PlayerTable obj={this.state.data} />;
  }
}
