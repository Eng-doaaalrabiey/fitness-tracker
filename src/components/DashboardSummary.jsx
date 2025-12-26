function DashboardSummary({ workouts }) {
  const totalWorkouts = workouts.length;
  const totalWeight = workouts.reduce(
    (acc, w) => acc + w.weight * w.reps * w.sets,
    0
  );
  const avgReps = workouts.length
    ? Math.round(
        workouts.reduce((acc, w) => acc + parseInt(w.reps), 0) / workouts.length
      )
    : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div className="bg-green-100 p-4 rounded shadow text-center">
        <h3 className="font-bold text-lg">Total Workouts</h3>
        <p className="text-2xl">{totalWorkouts}</p>
      </div>
      <div className="bg-green-100 p-4 rounded shadow text-center">
        <h3 className="font-bold text-lg">Total Weight Lifted</h3>
        <p className="text-2xl">{totalWeight} kg</p>
      </div>
      <div className="bg-green-100 p-4 rounded shadow text-center">
        <h3 className="font-bold text-lg">Average Reps</h3>
        <p className="text-2xl">{avgReps}</p>
      </div>
    </div>
  );
}

export default DashboardSummary;
