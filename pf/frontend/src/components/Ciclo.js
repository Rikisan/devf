import React from 'react'

class Ciclo extends React.Component {
  constructor(props){
    console.log("Constructor")
    super(props)

    this.state={
      numero: 0,
      nombre: "Carlos"
    }

    this.mas = () => {
      this.setState({numero: this.state.numero + 1})
    }
    this.menos = () => {
      this.setState({numero: this.state.numero - 1})
    }

  }

  componentWillMount(){
    console.log(`Component Will Mount\n
---------`)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    // console.log(prevProps)
    // console.log(prevState)
    console.log("Se ha actualizado")
  }

  componentDidMount(){
    console.log('El componente se monto');
  }

  componentWillUnmount(){
    console.log("El componente ha salido del edificio")
  }

  render(){
    console.log("render")
    return (
      <div>
        <button onClick={this.mas}> Mas </button>
        <button onClick={this.menos}> Menos </button>
        <p>Numero = {this.state.numero}</p>
      </div>
    )
  }
}

export default Ciclo