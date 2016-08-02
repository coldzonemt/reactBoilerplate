 'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  render() {
  	const name = "Kristin";
    return (
      <h1>Hello REACTNESS, It is {name}</h1>
    );  
  }
};

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);