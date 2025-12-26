import { useState } from "react";
import Navbar from "../components/Navbar";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutHistory from "../components/WorkoutHistory";
import DashboardSummary from "../components/DashboardSummary";

function Dashboard() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([workout, ...workouts]);
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <DashboardSummary workouts={workouts} />

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Log a Workout</h2>
          <WorkoutForm onAdd={addWorkout} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Workout History</h2>
          {workouts.length === 0 ? (
            <p className="text-gray-500">No workouts logged yet.</p>
          ) : (
            <WorkoutHistory workouts={workouts} />
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
