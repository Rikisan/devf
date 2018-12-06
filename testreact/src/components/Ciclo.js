import React from 'react'

class Ciclo extends React.Component {
    constructor(props){
      console.log("Constructor");
        super(props)

        this.state={
          numero: 0,
          nombre: "Ricardo"
        }
        this.mas = () => {
          this.setState({numero: this.state.numero + 1})
        }
        this.menos = () => {
          this.setState({numero: this.state.numero - 1})
        }
    }

    componentWillMount(){
      console.log(`Compoments Will Mount
      ---------------------------`);
    }

    componentDidMount(){
      console.log(`Compoments Did Mount
      ---------------------------`);
    }

    componentDidUpdate(prevProps, prevState, snapchot){
      // console.log(prevProps);
      // console.log(prevState);
      console.log("Se ha actualizado");
    }

    componentWillUnmount(){
      console.log("El componente ha salido");
    }

    render(){
      console.log('render');
        return(
        <div>
          <button onClick={this.mas}> Mas </button>
          <button onClick={this.menos}> Menos </button>
          <p> Numero = {this.state.numero} </p>
        </div>
        
          )}

}

export default Ciclo