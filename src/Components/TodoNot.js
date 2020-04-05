import React, {Component} from 'react';


class TodoNot extends Component {
    render() {

        const red = {
            display: 'block',
            color: '#ff0000',
        }
    
        const not = {
            display: 'none',
    
        }

        return (
<div><label style={this.props.item.completed?not:red}><input onChange={() => console.log('done:not done')} type="checkbox" />{this.props.item.text}</label></div>

        )
    }
}

export default TodoNot