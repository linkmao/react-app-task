import TasksLists from './components/TasksLists'
import TasksForm from './components/TasksForm'
import { tasks } from './data/data.js'
import { useEffect, useState } from 'react'

const App = () => {
  const [task, setTask] = useState([])
  // para garantizar que el arreglo de tareas se cargue solamente una vez cuando el componente se renderice se hace use de useEffect
  useEffect(() => { setTask(tasks) }, []) // Garga la información guardada en tasks.js solo una vez

  const addTasks = (title, description) => {
    setTask([...task, {
      title,
      description,
      id: task.length
    }])
  }

  const deleteTasks = (id) => {
    setTask(task.filter(t => t.id != id))
    console.log(task)
  }

  return <div className='bg-zinc-900 h-screen'>
    <div className='container bg-zinc-500 p-10'>
      <TasksForm addTasks={addTasks} />
      <TasksLists task={task} deleteTasks={deleteTasks} />
    </div>
  </div>
}

export default App