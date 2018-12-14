import React from 'react'
import Ciclo from './Ciclo'

class Preciclo extends React.Component{

  state = {
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
        <button onClick={this.agregar} disabled={this.state.cargar}> Agregar </button>
        <button onClick={this.quitar} disabled={!this.state.cargar}> Quitar </button>
        {this.state.cargar ? <Ciclo /> : null}
      </div>
    )
  }

}

export default Preciclo