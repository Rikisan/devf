import React from 'react'
import axios from 'axios' //Request http
import Tarjetas from './Tarjetas'

class Peticiones extends React.Component{
    
  state = { // el estado es inmutable
    personas: [],
    estadolibro: []
  }
  
  getLibros = () => {
    axios.get('https://backendcrb5.herokuapp.com/libros')
    .then( resp =>{
      console.log(resp.data)
      this.setState({estadolibro: resp.data})
    })
    .catch( (err) => {
      console.log(`ERROR - ${err}`)
    } )
  }

  nuevoLibro = () => {

    const miLibro = {
      titulo: "Hacking Grohw",
      descripcion: "esta bien chido",
      anio: 5000
    }



    axios.post("https://backendcrb5.herokuapp.com/libros", miLibro)
    .then( (resp) => {
      console.log(resp.data)
    } )
    .catch( (err) => {
      console.log(`ERROR - ${err}`)
    } )
  }


  getPersona1 = () =>{
    axios.get('https://swapi.co/api/people/1')
      .then( resp =>{
        console.log(resp.data.name)
        let newArr = this.state.personas //por eso declaramos un nuevo arreglo
        newArr.push(resp.data.name)
        this.setState({personas: newArr})
      })
      .catch( err => {
        console.log(`ERROR - ${err}`)
      })
    }

  // getPersona2 = () =>{
    // axios.get('https://swapi.co/api/people/2')
      // .then( resp =>{
        // console.log(resp.data.name)
        // let newArr = this.state.personas //por eso declaramos un nuevo arreglo
        // newArr.push(resp.data.name)
        // this.setState({personas: newArr})
      // })
      // .catch( err => {
        // console.log(`ERROR - ${err}`)
      // })
    // }
  
  render(){
    return(
      <div>
        <button onClick={this.getPersona1} > Persona1 </button>
        <button onClick={this.getLibros} > Get a Libro </button>
        <button onClick={this.nuevoLibro} > POST a Libro </button>
        {
        this.state.personas.map( (personaje, index) =>{
          if (personaje === "Luke Skywalkerll")
          return null
          else
          return <p key={`${index}`} >{personaje}</p>
        })
      }
      {
        this.state.estadolibro.map( (libro, index) =>{
          return(
            <Tarjetas
              key = {`libro-${index}`}
              ind = {index}
              titulo = {libro.titulo}
              anio = {libro.anio}
              desc = {libro.descripcion}
            />
        )
        })
      }
      </div>
    )
  }

}

export default Peticiones