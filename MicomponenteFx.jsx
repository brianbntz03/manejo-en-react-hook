import React , {useState} from 'react';
import Opcion from './Opcion';

export default function MicomponenteFx() {


  const [ nombre, setNombre] = useState("1");

  const [direccion, setDireccion] = useState({
    pais: "USA",
    estado: "Arizona",
    ciudad: "Springfield",
  });

  const [opciones, setOpciones] = useState([
    {
      name: "opcion 1",
      value: 1,
    },
    {
      name: "opcion 2",
      value: 1,
    },
    {
      name: "opcion 3",
      value: 1,
    }
  ]);

  const cambio = () => {

    // setNombre('2');

    // setDireccion({ ...direccion, estado:'Ohio'})

    // const nuevoItem = {
    // name:"Nueva Opcion",
    // value: 3,
    // }

    // const actualizado = opciones.map ((item) => item.value === 1 ? nuevoItem: item);
    // setOpciones( actualizado)

    // setOpciones ( [...opciones ,{
    //  name: `Opción ${opciones.length + 1}`,
    //  value: opciones.length + 1,
    // }
    // ])

    const actualizado = opciones.filter(item => item.value !== 1)
    setOpciones( actualizado)
  };

  const listaOpciones = opciones.map(( {name, value}) => (
    <div key={name.replace("","").toLowerCase()} className="col-md-4">
      <Opcion name={name} clickHandler={cambio}/>
    </div>
  ));

return (   
      <div className="container row">

      <Opcion name={opciones[0].name}/>

      {listaOpciones}

      </div>
        );
}
