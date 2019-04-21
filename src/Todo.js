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

export default Todo
