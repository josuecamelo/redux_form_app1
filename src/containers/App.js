import React, {Component} from 'react';
import InitForm from "../components/InitForm";

//Container
class App extends Component {
    onClick = (e) => {
        e.preventDefault();
        console.log('Clicked in Redux Form');
    }
    onChangeName = ({ target }) => {
        const { name, value } = target;
        console.log('Target Input', name, value);
    }
    render() {
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">Formulário</div>
                    <div className="card-body">
                        <div className="card-title">
                            Titulo
                        </div>
                        <InitForm
                            onClick={this.onClick}
                            onChangeName={this.onChangeName} />
                    </div>
                    <div className="card-footer">
                        <p>Rodapé</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
