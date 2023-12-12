import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import workoutsReducer, { workoutsContext } from "./context/workoutContext";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
// import { workoutsContextProvider } from "./context/workoutContext";

const App = () => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  return (
    <workoutsContext.Provider value={{ ...state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </workoutsContext.Provider>
  );
};

export default App;
