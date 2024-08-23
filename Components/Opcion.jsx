import React from 'react'

export default function Opcion (props)  {

  return (
    <div className="card">
        <div className="card-header">
            Opciones
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">esta es la {props.name}</p>
            <a onClick={props.clickHandler} className="btn btn-primary">Activar</a>
        </div>
    </div>
  )
}


