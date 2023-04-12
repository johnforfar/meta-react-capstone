import React from "react";
import {
  BrowserRouter as Router,
  //Routes,
  //Route,
  useRoutes,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Reservations from "./routes/Reservations";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/reservations", element: <Reservations /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;