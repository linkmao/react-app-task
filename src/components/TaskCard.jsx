const TaskCard = ({task, deleteTasks})=>{
// deleteTasks(task.id)
  return <div className="bg-slate-700 text-white p-4 rounded-lg ">
  <h3>Tarea {task.id}</h3>
  <h2 className="text-2xl font-bold">{task.title}</h2>
  <p className="text-gray-400">{task.description}</p>
  <button className="bg-red-700 rounded-md p-2 mt-2 hover:bg-red-400"  onClick={()=>deleteTasks(task.id)}>Eliminar task</button>
</div>
}

export default TaskCard 