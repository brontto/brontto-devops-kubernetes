const TodoList = ({ todos }) => {
    console.log(todos)
    return (
        <div>
            {todos.map(todo => 
                <p>
                    {todo}
                </p>
            )}
        </div>
    )
}

export default TodoList