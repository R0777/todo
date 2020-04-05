import React, {Component} from 'react'




class todoDone extends Component {

       
    render() {
    const green = {
        display: 'block',
        color: '#00ff00',
    }

    const not = {
        display: 'none',

    }



    return(
    <div><label style={this.props.item.completed?green:not}><input onChange={() => this.props.handChange(this.props.tdo.id)} checked={this.props.item.completed} type="checkbox" />{this.props.item.text}</label></div>

    )
    }
}
export default todoDone