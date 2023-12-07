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
    <div className="row  align-items-start mx-0 my-4 ">
      <div className=" col-10 col-md-5 col-lg-4 mx-3 ">
        <WorkOutForm />
      </div>
      <div className="col-12 col-md-6 col-lg-7 ">
        <header className="fw-bold text-uppercase h3  my-3"> workouts</header>
        {workouts &&
          workouts.map((workout) => {
            return <WorkOutDetails key={workout._id} workout={workout} />;
          })}
      </div>
    </div>
  );
};
export default Start;
