import React from 'react' //hay una 2da forma
import Persona from './Persona'

class MiComponente extends React.Component{
  // LEY UNIVERSAL DE LOS COMPONENTES EN REACT!!!!!!
  render(){
    // return <Persona /><Persona />
    return (
      <React.Fragment> {/*Esto es un DIV de react*/}
        <h1 style={{color: 'blue'}}>Este es el titulo</h1>
        <Persona myName="Carlos"/>
        <Persona myName="Mario"/>
        <Persona className="tipo-persona" myName="Arturo"/>
        <Persona className="tipo-persona" myName="Moises"/>
        <Persona myName="Rogelio"/>
        <Persona myName="Ricardo"/>
      </React.Fragment>
    )
  }

}

export default MiComponente
