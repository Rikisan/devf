import React from 'react'

class Link extends React.Component{
    render() {
        return <p>Vinculo a -><a href={this.props.myLink}> {this.props.myName} </a></p>
    }
}
    export default Link