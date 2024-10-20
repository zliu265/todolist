function TodoItem ({todo, toggleTodo, deleteTodo}: any){
    return(
        <li>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}> 切换</button>
            <button onClick={() => deleteTodo(todo.id)}> 删除</button>
        </li>
    )
}

export default TodoItem;