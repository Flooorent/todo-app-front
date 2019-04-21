import React from 'react'

function Todo(props){
    return (
        <li>
            <input
                type="text"
                defaultValue={props.text}
                onKeyUp={props.handleKeyUp}
            />
            <button type="submit" onClick={props.handleClick}></button>
        </li>
    )
}

function EmptyTodo(props) {
    return (
        <li>
            <input
                type="text"
                placeholder="Add TODO"
                onKeyUp={props.handleKeyUp}
            />
        </li>
    )
}

export {
    Todo,
    EmptyTodo,
}
