import { useEffect, useState } from 'react'
import DailyPicture from './components/DailyPicture'
import TodoList from './components/TodoList'
import todoService from './services/todos'

const App = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    todoService
      .getAll()
      .then(initialTodos => {
        setTodos(initialTodos)
        console.log(initialTodos)
      })
  }, [])

  const addNewTodo = (event) => {
    event.preventDefault()
    const todoObject = {
        content: newTodo,
        done: false
    }

    todoService
      .create(todoObject)
      .then(returnedTodo => {
        setTodos(todos.concat(returnedTodo))
        setNewTodo('')
      })

  }

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value)
  }

  return (
    <div>
      <DailyPicture />
      <div>
        <form onSubmit={addNewTodo}>
          <input
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <button type='submit'>Create Todo</button>
        </form>
      </div>
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
