import { useContext } from "react";
import { workoutsContext } from "../context/workoutContext";

export const useWorkoutsContext = () => {
  const context = useContext(workoutsContext);

  if (!context) {
    throw Error(
      "useworkoutsContext must be used inside a workoutsContextProvider"
    );
  } else {
    return context;
  }
};
