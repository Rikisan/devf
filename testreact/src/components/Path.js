import React, {Component} from 'react'
import {BrowserRouter as Router} from 'react-router-dom' //saca BrowserRouter de ese paquete y quiero llamarlo como Router
import Route from 'react-router-dom/Route'

class Path extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Route path="/" exact render={
                        () => {return <p>Esta es mi direccion Raiz</p>}
                    }/>
                    <Route path="/otra" exact strict render={
                        () => {return <p>Esta es mi direccion Otra</p>}
                    }/>
                

                </div>
            </Router>
        )
    }

}

export default Path