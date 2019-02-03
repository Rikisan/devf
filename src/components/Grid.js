import React from 'react';
import axios from 'axios';
import MUIDataTable from 'mui-datatables';

class Grid extends React.Component {

  state = { // el estado es inmutable
    estadoclientes: []
  }
  
  componentWillMount(){
      axios.get('http://localhost:3000/clientes')
      .then( resp =>{
        console.log(resp.data)
        //let newArr = resp.data
        this.setState({estadoclientes: resp.data})
        console.log(this.state.estadoclientes);
      })
      .catch( (err) => {
        console.log(`ERROR - ${err}`)
      } )


}

  


  render() {
    const columns = ["ID", "Empresa", "Contacto", "Puesto Contacto", "Tel1"];

    let clientes = new Array(); 
    
    this.state.estadoclientes.map( (cliente) => {
      let newCliente = [cliente.ID, cliente.Empresa, cliente.Contacto, cliente['Puesto Contacto'], cliente.Tel1];
      clientes.push(newCliente);
    })

    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

    return (
      <MUIDataTable
        title={"Clientes"}
        data={clientes}
        columns={columns}
        options={options}
      />
    );
  }
}

export default Grid