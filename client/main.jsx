import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenido a meteor con react</h1>
      </div>
    )
  }
}

export default App;

/*
 * rect-mounter se encarga ahora de nuestro Meteor.startup ...
Meteor.startup(() => {
  render(<App />, document.getElementById('App'));
});
*/