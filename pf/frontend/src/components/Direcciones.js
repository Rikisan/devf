import React from 'react'
import Vinculo from './Vinculos'

class Direcciones extends React.Component{
  render(){
    return (
      <div>
       <Vinculo aDonde="google.com" Texto="amos a gugul"/> <br/>
       <Vinculo aDonde="wikipedia.org" Texto="mejor wiki"/> <br/>
       <Vinculo aDonde=""/> <br/>
       <Vinculo aDonde=""/> <br/>
       <Vinculo aDonde=""/> <br/>

      </div>
    )
  }
}

export default Direcciones