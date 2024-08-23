import React, { Component } from 'react'

export default class Micomponente extends Component {
    
    constructor(props){
        super(props);
        this.state = {Seleccion:''}

      }

    onChangeHandler = (evento) => {
        this.setState( {Seleccion: evento.target.value})
    }

    render() {
        return (
        <div className="container row">
        <div className="form-check">
          <h1>Selecciona una opción</h1>

          <div onChange={this.onChangeHandler}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="seleccion"
                value="1"
              />
              <label className="form-check-label"> Opción 1</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="seleccion"
                value="2"
              />
              <label className="form-check-label"> Opción 2</label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="seleccion"
                value="3"
              />
              <label className="form-check-label"> Opción 3</label>
            </div>
          </div>
        </div>

        <hr />
        {this.state.Seleccion &&(
          <h2> Seleccionaste: {this.state.Seleccion}</h2>
        )}

      </div>
        );
    }
}

