import React, { Component } from 'react';
import AutocompleteText from './pages/AutocompleteText';
import GlobalStyle from './styles/global';

class App extends Component{
  render() {
    return (
      <div className="App">
        <AutocompleteText />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
