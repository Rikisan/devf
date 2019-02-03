import React from 'react' //Esto es un require fresa
import ReactDOM from 'react-dom'
import AppBar from './components/AppBar'
import Grid from './components/Grid'

ReactDOM.render(<AppBar />, document.getElementById('appbardiv'))
ReactDOM.render(<Grid />, document.getElementById('griddiv'))

