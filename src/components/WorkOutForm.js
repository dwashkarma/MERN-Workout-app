import React from "react";
import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
function WorkOutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useWorkoutContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !load || !reps) {
      setError("Please fill in all fields.");
      return;
    }
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUTS", payload: json });
      console.log("Added", response);
    }
  };
  return (
    <div className="text-start position-sticky ">
      <form className="my-4 " onSubmit={handleSubmit}>
        <h3 className="my-4 fw-semibold">Add your Workouts</h3>
        <div>
          <label className="text-uppercase   fw-semibold">Title</label>
          <br />
          <input
            className={`form-control ${!title && "input-error"}`}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className=" my-4">
          <label className="text-uppercase  fw-semibold">Load (in kg)</label>
          <br />
          <input
            className={`form-control ${!load && "input-error"}`}
            onChange={(e) => setLoad(e.target.value)}
            value={load}
          />
        </div>

        <div>
          <label className="text-uppercase  fw-semibold">Reps (no.)</label>
          <br />
          <input
            className={`form-control ${!reps && "input-error"}`}
            onChange={(e) => setReps(e.target.value)}
            value={reps}
          />
        </div>
        <button className="btn btn-success my-4" value="submit">
          ADD WORKOUT
        </button>
        {error && (
          <div className=" fw-semibold text-danger rounded-pill border  border-danger p-3 ">
            {error}
          </div>
        )}
      </form>
    </div>
  );
}

export default WorkOutForm;
