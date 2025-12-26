function WorkoutHistory({ workouts }) {
  return (
    <div className="space-y-4">
      {workouts.map((workout) => (
        <div key={workout.id} className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold text-lg">{workout.exercise}</h3>
          <p>
            Sets: {workout.sets} | Reps: {workout.reps} | Weight:{" "}
            {workout.weight}kg
          </p>
          <p className="text-gray-500 text-sm">{workout.date}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkoutHistory;
