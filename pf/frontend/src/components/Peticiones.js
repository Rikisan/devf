import React from 'react'
import axios from 'axios'
import Card from './Tarjeta'

class Peticiones extends React.Component{

  state = {
    personas: [],
    libros: []
  }

  getLibros = () => {
    axios.get("http://localhost:3000/libros/")
      .then( (resp) => {
        console.log(resp.data)
        this.setState({libros: resp.data})
      })
      .catch( (err) => {
        console.log(`ERROR - ${err}`)
      })  
  }
    
  nuevoLibro = () => {

    const miLibro = {
      titulo: "MKT",
      descripcion: "Esta bn chido ",
      anio: 5000
    }

    axios.post("http://localhost:5000/libros/", miLibro)
      .then((resp) => {
        console.log(resp.data)
      })
      .catch((err) => {
        console.log(`ERROR POST - ${err}`);
      })
  }

  getPersona1 = () => {
    axios.get('https://swapi.co/api/people/1')
      .then( resp => {
        console.log(resp.data.name)
        let newArr = this.state.personas
        newArr.push(resp.data.name)
        this.setState({personas: newArr})
      })
      .catch( err => {
        console.log(`ERROR - ${err}`)
      })
  }

  render(){
    return(
      <div>
        <button onClick={this.getPersona1}> Persona1 </button>
        <button onClick={this.getLibros}> GET a libros </button>
        <button onClick={this.nuevoLibro}> POST a libros </button>

        {
          this.state.libros.map( (libro,index) => {
            return (
                <Card 
                  key = {`libro-${index}`}
                  ind = {index}
                  titulo = {libro.titulo}
                  desc = {libro.descripcion}
                  anio = {libro.anio}
                />
            )
          })
        }

        {
          this.state.personas.map( (personaje, index) => {
            if(personaje === "Luke Skywalker")
              return null
            else
              return <p key={`x${index}`}>{personaje}</p>
          }
          )
        }
      </div>
    )
  }

}

export default Peticiones