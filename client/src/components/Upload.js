import React, { Component } from 'react';

import FileForm from '../containers/FileForm';

// Header: Use the form below to upload JSON to mongo

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 'blank',
      file: 'ok',
    };
    this.handleFile = this.handleFile.bind(this);
  }

  handleFile = (event) => {
    const newFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(newFile);
    reader.onload = () => {
      // The file's text will be printed here
      const arr = reader.result.split(',');
      const newArr = arr.map((team) => {
        return JSON.parse(team);
      });
      this.setState({ file: JSON.stringify(newArr) });
    };
  };

  addTeam = async () => {
    try {
      await fetch('/api/addTeam', {
        method: 'POST',
        body: this.state.file,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleUpload = async () => {
    // upload to mongo here
    try {
      this.addTeam();
    } catch (err) {
      // err;
    }
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        {data && <h1>{data} - cool right?</h1>}
        <FileForm
          val={this.state.file}
          handleFile={this.handleFile}
          handleUpload={this.handleUpload}
        />
        <hr />
      </div>
    );
  }
}
