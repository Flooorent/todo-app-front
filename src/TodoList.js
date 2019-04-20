import React, { Component } from 'react'
import axios from 'axios'

import Todo from './Todo'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            error: null
        }
    }

    componentDidMount() {
        axios.get('/api/todos')
            .then(response => {
                this.setState({ todos: response.data })
            })
            .catch(error => this.setState({ error }))
    }

    render() {
        if(!this.state.todos.length) {
            return (
                <p>Vous n'avez pas de TODO pour le moment</p>
            )
        }

        return (
            <ul>
                {this.state.todos.map(todo => <Todo key={todo._id} text={todo.text}/>)}
            </ul>
        )
    }
}

export default TodoList
