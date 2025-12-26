import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">Fitness Tracker</h1>
      <div className="space-x-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/exercises">Exercises</Link>
      </div>
    </nav>
  )
}

export default Navbar
