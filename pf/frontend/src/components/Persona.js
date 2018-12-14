import React from 'react'

class Persona extends React.Component{
  render() {
    return <p>Me llamo {this.props.myName}</p>
  }
}

export default Persona