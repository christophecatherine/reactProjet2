import React, { Component } from 'react';
import CreateurPersonnge from './containers/CreateurPersonnage/CreateurPersonnage';
import ListePersonnage from "./containers/ListePersonnage/ListePersonnage";

class App extends Component {
  state = {
    refresh: false
  }
  
  handleRefresh = () => {
    this.setState((oldState) => {
      return {
        refresh: !oldState.refresh
      }
    });
  }

  render() {
    return (
      <>
        <CreateurPersonnge refresh={this.handleRefresh} />
        <ListePersonnage refresh={this.state.refresh} />
      </>
    );
  }
}

export default App;
