import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

//Componente
const InitForm = ({onClick, onChangeName}) => {
    //const {onClick} = props;
    return(
        <form>
            <div className="form-group">
                <label htmlFor="name">Informe seu Nome:</label>
                <Field
                    name="name"
                    placeholder="Enter your name"
                    type="text"
                    component="input"
                    className="form-control"
                    onChange={onChangeName}
                />
            </div>
            <div className="form-group">
                <button type="button" onClick={onClick} className="btn btn-primary">Enviar</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'initForm'
})(InitForm);
