import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

//Componente
let InitForm = (props) => {
  return(
      <div>
        <form action="">
          <div>
            <label htmlFor=""></label>
            <Field
                name="name"
                placeholder="Enter your name"
                type="text"
                component="input"
            />
          </div>
        </form>
      </div>
  )
}

InitForm = reduxForm({
  form: 'initForm'
})(InitForm);

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
