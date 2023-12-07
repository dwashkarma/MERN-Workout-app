import { useEffect } from "react";
import WorkOutDetails from "../components/WorkOutDetails";
import WorkOutForm from "../components/WorkOutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
// import axios from 'axios'
const Start = () => {
  const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("/api/workouts");
        const json = await response.json();
        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        } else {
          console.error("Error fetching workouts:", response.statusText);
        }
      } catch (error) {
        console.log(error.message, "error");
      }
    };
    fetchApi();
  }, [dispatch]);

  return (
    <div className="row align-items-start my-4 ">
      <div className="col col-8">
        <header className="fw-bold text-uppercase  my-3">your task</header>
        {workouts &&
          workouts.map((workout) => {
            return <WorkOutDetails key={workout._id} workout={workout} />;
          })}
      </div>
      <div className="col col-3 mx-5 ">
        <WorkOutForm />
      </div>
    </div>
  );
};
export default Start;
