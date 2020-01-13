import React from 'react';

// import { Container } from './styles';

export default class AutocompleteText extends React.Component {

  constructor (props) {
    super(props);
    this.cities = [
      'Manaus',
      'Maceió',
      'Arapiraca',
    ];
    this.state = {
      suggestions: [],
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.cities.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({suggestions}));
  }

  renderSuggestions() {
    const {suggestions} = this.state;
    if (suggestions.lenght === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((city) => <li>{city}</li>)}
      </ul>
    );
  }


  render () {
    return (
      <div>
        <input 
        placeholder="Onde você mora?"
        type="text"
        onChange={this.onTextChanged}
        />
        {this.renderSuggestions()}
      </div>
    )
}
}
