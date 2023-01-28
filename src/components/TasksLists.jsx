import TaskCard from './TaskCard'

const TaskLists = ({task, deleteTasks}) => {

  if (task.length === 0) {
    return <h1 className='text-3xl text-white font-bold text-center'>No hay tareas</h1>
  }

  return <div className='grid grid-cols-4 gap-4'> {
    task.map(t => <TaskCard key={t.id} task={t} deleteTasks={deleteTasks}/>)
  }
  </div>
}

export default TaskLists