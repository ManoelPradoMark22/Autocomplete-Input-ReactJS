import React, { useState } from 'react';

// import { Container } from './styles';

export default function AutocompleteText() {

  const [cities] = useState(['Manaus', 'Maceió', 'Arapiraca']);

  return (
    <div>
      <input placeholder="Onde você mora?" type="text"/>
      <ul>
        {cities.map(city => 
          (<li key={city}>{city}</li>)
        )}
      </ul>
    </div>
  );
}
