import React from 'react'
import Ciclo from './Ciclo'

class Preciclo extends React.Component{

    state = { //se puede omitir el constructor
        cargar: false
    }


    agregar = () => {
        this.setState({
            cargar: true
        })
    }
    quitar = () => {
        this.setState({
            cargar: false
        })
    }

    render(){
          return(
          <div>
            <button onClick={this.agregar} disable={this.state.cargar} > Agregar </button>
            <button onClick={this.quitar} disable={this.state.cargar} > Quitar </button>
            {this.state.cargar ? <Ciclo/> : null}
          </div>
          
        )}

}
export default Preciclo