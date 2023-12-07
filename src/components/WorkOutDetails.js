import React from "react";
// import { Link } from "react-router-dom";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
function WorkOutDetails({ workout }) {
  const { dispatch } = useWorkoutContext(); //destructuring the useWorkoutContext() hook........
  const handleDelete = async () => {
    try {
      const response = await fetch("/api/workouts/" + workout._id, {
        method: "DELETE",
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_WORKOUT", payload: json });
        console.log("Succeddfully deleted.");
      }
    } catch (err) {
      console.log("error", err.message);
    }
  };

  return (
    <div className="shadow-lg p-1 mb-2 bg-body-tertiary rounded">
      <div className="card-body bg-light text-start p-2 ">
        <p className="card-title text-success fw-bold fs">{workout.title}</p>

        <div className="card-text mt-1">
          <p className="m-0"> ID: {workout._id}</p>
          <p className="m-0"> Load: {workout.load}</p>
          <p className="m-0"> Reps: {workout.reps}</p>
        </div>
        <div className="card-subtitle ">
          <p>DATE:{new Date(workout.createdAt).toLocaleDateString()}</p>
          <button className="btn btn-success mx-2 fw-semibold text-uppercase">
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-danger mx-2 fw-semibold text-uppercase"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkOutDetails;
