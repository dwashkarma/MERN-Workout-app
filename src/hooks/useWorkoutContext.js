import { WorkoutContext } from "../context/WorkoutContext";
import { useContext } from "react"; //using useContext to use the createContext 

export const useWorkoutContext =()=>{
    const context=useContext(WorkoutContext) // This is a useContext() to use createContext()
    if(!context){
        throw Error('useWorkoutContext must be used inside an WorkoutContextProvider')
    }
    return context
}