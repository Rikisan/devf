import React, {Component} from 'react'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'

const SlComponent = ({match}) => {
  return <h3>Soy un componente {match.params.num}</h3>
}

class Path extends Component{
  render(){
    return(
      <Router>
        <div>

        <div>
          <ul>
            <li><NavLink activeStyle={{color: 'red'}} exact to="/"> Raiz </NavLink></li>
            <li><NavLink activeStyle={{color: 'red'}} exact to="/otra"> Otra </NavLink></li>
            <li><NavLink activeStyle={{color: 'red'}} exact to="/otra/miparam"> Params </NavLink></li>
          </ul>
        </div>


          <Route path="/" exact component={SlComponent}/>
          <Route path="/otra" exact strict render={() => {return <p> Este es otra</p>}}/>
          <Route path="/otra/:num" exact strict component={SlComponent}/>

        </div>
      </Router>
    )
  }
}

export default Path