import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"

function Exercises() {
  const [exercises, setExercises] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://wger.de/api/v2/exercise/?language=2&limit=10")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch exercises")
        return res.json()
      })
      .then(data => {
        setExercises(data.results)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Exercises</h1>

        {loading && <p className="text-gray-500">Loading exercises...</p>}
        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {exercises.map(ex => (
            <div key={ex.id} className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">{ex.name}</h2>
              <p className="text-gray-600">
                {ex.description ? ex.description.replace(/<\/?[^>]+(>|$)/g, "") : "No description"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Exercises
