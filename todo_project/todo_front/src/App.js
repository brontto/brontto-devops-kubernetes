import { useState } from 'react'
import DailyPicture from './components/DailyPicture'
import TodoList from './components/TodoList'


const App = () => {
  const [todos, setTodos] = useState(['TODO 1', 'TODO2'])
  const [newTodo, setNewTodo] = useState('')

  console.log(todos)

  const addNewTodo = (event) => {
    event.preventDefault()
    setTodos(todos.concat(newTodo))
    setNewTodo('')
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
