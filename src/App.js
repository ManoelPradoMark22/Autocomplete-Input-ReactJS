import React, { Component } from 'react';
import AutocompleteText from './pages/AutocompleteText';
import GlobalStyle from './styles/global';
import countries from './countries';

class App extends Component{
  render() {
    return (
      <div className="App">
        <AutocompleteText countries={countries} />
        <GlobalStyle />
      </div>
    );
  }
}

export default App;
