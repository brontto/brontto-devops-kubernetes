const TodoList = ({ todos }) => {
    if(todos?.length <= 0) return

    return (
        <div>
            {todos.map(todo => 
                <p>
                    {todo.content}
                </p>
            )}
        </div>
    )
}

export default TodoList