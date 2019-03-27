import React, { Component } from 'react';
import InitForm from "../components/InitForm";

//Container
class App extends Component {
  render() {
    return (
      <div className="col">
          <p>
              <div className="card">
                  <div className="card-header">Formulário</div>
                  <div className="card-body">
                      <div className="card-title">
                            Titulo
                      </div>
                      <InitForm/>
                  </div>
                  <div className="card-footer">
                      <p>Rodapé</p>
                  </div>
              </div>
          </p>
      </div>
    );
  }
}

export default App;
