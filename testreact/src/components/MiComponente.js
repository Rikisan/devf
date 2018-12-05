import React from 'react' //hay una segunda forma
import Persona from './Persona'

class MiComponente extends React.Component{
// LEY UNIVERSAL DE LOS COMPONENTES EN REACT!!!, clases siempre en mayuscula al inicio
    render(){
    return (
        <React.Fragment> {/**Esto es un DIV de react */}
        <h1 style={{color: 'blue'}}>Este es el titulo</h1>
        <Persona  ClassName="" myName="Carlos" />
        <Persona myName="Ricardo" />
        <Persona myName="Arturo" />
        <Persona myName="Rogelio" />
        <Persona myName="Moises" />
        </React.Fragment>
    )
   }
}

export default MiComponente