import React, { Component } from 'react'
import axios from 'axios'

import Todo from './Todo'
import './TodoList.css'

const ENTER_KEY_CODE = 13

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            error: null
        }

        this.handleKeyUp = this.handleKeyUp.bind(this)
    }

    componentDidMount() {
        axios.get('/api/todos')
            .then(response => {
                this.setState({ todos: response.data })
            })
            .catch(error => this.setState({ error }))
    }

    // TODO: add event that does the same thing when mouse clicks on something else
    handleKeyUp(todoId) {
        return (event) => {
            if(event.keyCode === ENTER_KEY_CODE) {
                event.preventDefault()

                const newData = {
                    id: todoId,
                    text: event.target.value
                }

                axios.put('/api/todo', newData)
                    .then(response => this.setState({ todos: response.data }))
                    .catch(error => this.setState({ error }))
            }
        }
    }

    render() {
        if(!this.state.todos.length) {
            return (
                <p>Vous n'avez pas de TODO pour le moment</p>
            )
        }

        return (
            <ul>
                {this.state.todos.map(todo => (
                    <Todo
                        key={todo._id}
                        text={todo.text}
                        handleKeyUp={this.handleKeyUp(todo._id)}
                    />
                ))}
            </ul>
        )
    }
}

export default TodoList
