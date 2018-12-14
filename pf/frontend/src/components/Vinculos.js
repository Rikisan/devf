import React from 'react'

class Vinculo extends React.Component{
  render(){
    return <a href={"https://www." + this.props.aDonde}>{this.props.Texto}</a>
  }
}

export default Vinculo