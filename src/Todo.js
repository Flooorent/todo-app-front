import React from 'react'

function Todo(props){
    return (
        <li>
            <input
                type="text"
                defaultValue={props.text}
                onKeyUp={props.handleKeyUp}
            />
        </li>
    )
}

function EmptyTodo(props) {
    return (
        <li>
            <input
                type="text"
                placeholder="Add TODO"
                onKeyUp={props.createTodoFromKeyUp}
            />
        </li>
    )
}

export {
    Todo,
    EmptyTodo,
}
