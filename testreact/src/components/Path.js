import React, {Component} from 'react'
import {BrowserRouter as Router, NavLink} from 'react-router-dom' //saca BrowserRouter de ese paquete y quiero llamarlo como Router
import Route from 'react-router-dom/Route'

const SlComponent = ({match}) => { //con match obtenemos el numero ":num" en este caso 
    return <h3>Soy un Componente sin estado =( {match.params.num }</h3>
}


class Path extends Component {
    render(){
        return(
            <Router>
                <div>

                  <div>
                    <ul>
                      <li><NavLink activeStyle={{color: 'red'}} exact to="/"> Raiz </NavLink></li>
                      <li><NavLink activeStyle={{color: 'red'}} exact to="/otra"> otra </NavLink></li>
                      <li><NavLink activeStyle={{color: 'red'}} exact to="/otra/params"> params </NavLink></li>
                    </ul>
                  </div>
                    <Route path="/" exact render={
                        () => {return <p>Esta es mi direccion Raiz</p>}
                    }/>
                    <Route path="/otra" exact strict render={
                        () => {return <p>Esta es mi direccion Otra</p>}
                    }/>
                    <Route path="/otra/:num" exact strict component={SlComponent}/>
                </div>
            </Router>
        )
    }

}

export default Path