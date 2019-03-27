import React, { Component } from 'react';
import InitForm from "../components/InitForm";

//Container
class App extends Component {
  render() {
    return (
      <div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <InitForm/>
          </p>
      </div>
    );
  }
}

export default App;
