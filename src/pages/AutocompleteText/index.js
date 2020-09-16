import React from 'react';

import WifiOffIcon from '@material-ui/icons/WifiOff';

import SnackbarContent from '../../components/Snackbar/SnackbarContent';

import { Box } from './styles';

export default class AutocompleteText extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      suggestions: [],
      text: '',
    };
  }

  onTextChanged = (e) => {
    const { countries } = this.props;
    const value = e.target.value;
    let suggestions = [];

    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = countries.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({suggestions, text: value}));
  }

  suggestionSelected (value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }))
  }

  renderSuggestions() {
    const {suggestions} = this.state;
    if (suggestions.lenght === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((city) => 
          <li key={city} 
          onClick={() => this.suggestionSelected(city)}
          >
            {city}
          </li>
        )}
      </ul>
    );
  }


  render () {
    const {text} = this.state;
    return (
      <>
      <Box>
        <input
        value={text}
        placeholder="Você mora em qual país?"
        type="text"
        onChange={this.onTextChanged}
        />
        {this.renderSuggestions()}
      </Box>
      <SnackbarContent
        message={
          <span>
            <b>OFFLINE:</b> Você está offline, verifique sua conexão...
          </span>
        }
        color="warning"
        icon={WifiOffIcon}
      />
      </>
    )
}
}