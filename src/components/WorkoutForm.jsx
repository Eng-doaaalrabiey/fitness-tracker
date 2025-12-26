import { useState } from "react"

function WorkoutForm({ onAdd }) {
  const [exercise, setExercise] = useState("")
  const [sets, setSets] = useState("")
  const [reps, setReps] = useState("")
  const [weight, setWeight] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!exercise || !sets || !reps || !weight) return

    const newWorkout = {
      id: Date.now(),
      exercise,
      sets,
      reps,
      weight,
      date: new Date().toLocaleString()
    }

    onAdd(newWorkout)
    setExercise("")
    setSets("")
    setReps("")
    setWeight("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Exercise" value={exercise} onChange={(e)=>setExercise(e.target.value)} className="border p-2 rounded w-full"/>
      <input type="number" placeholder="Sets" value={sets} onChange={(e)=>setSets(e.target.value)} className="border p-2 rounded w-full"/>
      <input type="number" placeholder="Reps" value={reps} onChange={(e)=>setReps(e.target.value)} className="border p-2 rounded w-full"/>
      <input type="number" placeholder="Weight (kg)" value={weight} onChange={(e)=>setWeight(e.target.value)} className="border p-2 rounded w-full"/>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Add Workout</button>
    </form>
  )
}

export default WorkoutForm
