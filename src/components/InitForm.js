import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

//Componente
const InitForm = (props) => {
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
                />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Enviar</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'initForm'
})(InitForm);
