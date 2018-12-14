import React from 'react' //Esto es un require fresa
import ReactDOM from 'react-dom'
import AppBar from './components/AppBar'
import Preciclo from './components/Preciclo'
import Grid from './components/Grid'

ReactDOM.render(<AppBar />, document.getElementById('appbardiv'))
ReactDOM.render(<Preciclo />, document.getElementById('maindiv'))
ReactDOM.render(<Grid />, document.getElementById('griddiv'))

