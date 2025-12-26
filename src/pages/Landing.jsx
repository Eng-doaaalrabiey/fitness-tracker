import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Fitness Tracker</h1>
      <Link
        to="/dashboard"
        className="bg-green-600 text-white px-6 py-3 rounded"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Landing;
