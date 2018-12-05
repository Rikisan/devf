import React from 'react' //hay una segunda forma
import Link from './Link'

class MiComponente extends React.Component{
    render(){
        return (
            <React.Fragment> {/**Esto es un DIV de react */}
            <h1 style={{color: 'blue'}}>Componentes Direcciones</h1>
            <Link myName="Youtube Mexico" myLink="http://www.youtube.com.mx" />
            <Link myName="Google Mexico" myLink="http://www.google.com.mx" />
            <Link myName="Yahoo en Español" myLink="http://www.yahoo.com.mx" />
            <Link myName="Bing Mexico" myLink="http://www.bing.com.mx" />
            <Link myName="Wikipedia" myLink="https://es.wikipedia.org/wiki/" />
            </React.Fragment>
        )
    }
}

export default MiComponente