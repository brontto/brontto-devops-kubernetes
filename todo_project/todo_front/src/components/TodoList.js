const TodoList = ({ todos }) => {
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