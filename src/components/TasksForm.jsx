import { useState } from 'react'

const TasksForm = ({ addTasks }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    addTasks(title, description)
    setTitle("")
    setDescription("")
  }

  return <div className='max-w-md mx-auto'>
    <h1 className='text-3xl text-white font-bold text-center mb-4'>Agrega una tarea</h1>
    <form onSubmit={handleSubmit} className="bg-zinc-700 p-6 mb-4" >
      <input placeholder="Nombre de tu tarea" onChange={e => setTitle(e.target.value)} value={title} autoFocus className='bg-slate-300 w-full p-3 mb-2'/>
      <input placeholder="Descripcion de tu tarea" onChange={e => setDescription(e.target.value)} value={description} className='bg-slate-300 w-full p-3 mb-2'/>
      <button className='bg-indigo-500 hover:bg-indigo-200 p-2 rounded-md text-white'>Guardar</button>
    </form>
  </div>
}

export default TasksForm