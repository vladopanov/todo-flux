import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'
import PropTypes from 'prop-types';

class Todo extends Component {
    completeTodo(event) {
        event.preventDefault()
        TodoActions.completeTodo(this.props.id)
    }
    
    render() {
        return (
            <li>
                {this.props.title} - {this.props.completed ? 'DONE' : (
                    <button onClick={this.completeTodo.bind(this)}>PENDING</button>
                )}
            </li>    
        )
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired
}  

export default Todo