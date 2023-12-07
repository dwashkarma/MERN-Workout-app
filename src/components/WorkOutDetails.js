import React from "react";
// import { Link } from "react-router-dom";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
function WorkOutDetails({ workout }) {
  const { dispatch } = useWorkoutContext(); //destructuring the useWorkoutContext() hook........
  const handleDelete = async () => {
    let a=window.confirm("Do you really want to delete this task?")
    if (a){
    try {
      const response = await fetch("/api/workouts/" + workout._id, {
        method: "DELETE",
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "DELETE_WORKOUT", payload: json });
        console.log("Successfully deleted.");
      }
    } catch (err) {
      console.log("error", err.message);
    }
  }
  
  };

  return (
    // <div className="shadow-lg p-1 mb-2 bg-body-tertiary rounded">
    //   <div className="card-body bg-light text-start p-2 ">
    //     <p className="card-title text-success fw-bold fs">{workout.title}</p>

    //     <div className="card-text mt-1">
    //       <p className="m-0"> ID: {workout._id}</p>
    //       <p className="m-0"> Load: {workout.load}</p>
    //       <p className="m-0"> Reps: {workout.reps}</p>
    //     </div>
    //     <div className="card-subtitle ">
    //       {/* <p>DATE:{new Date(workout.createdAt).toLocaleDateString()}</p> */}

    //       {/* gives the time distance from formatDistanceToNow and addSuffix gives ago  */}
    //      <p className="text-secondary">{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
    //       <button
    //         onClick={handleDelete}
    //         className="btn btn-danger rounded-circle mx-2  fw-semibold text-uppercase"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           fill="currentColor"
    //           class="bi bi-trash3-fill m-0 my-1"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
    //         </svg>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="box">
      <div className="row border rounded-pill p-4 my-3">
        <div className="col-8  ">
          <p className="card-title text-success fw-bold fs">{workout.title}</p>
          <p className="m-0"> ID: {workout._id}</p>
          <p className="m-0"> Load: {workout.load}</p>
          <p className="m-0"> Reps: {workout.reps}</p>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          {" "}
          <button
            onClick={handleDelete}
            className="btn btn-danger rounded-circle mx-2  fw-semibold text-uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash3-fill m-0 my-1"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkOutDetails;
