import React from "react";
import {
  BrowserRouter as Router,
  //Routes,
  //Route,
  useRoutes,
} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Reservations from "./routes/Reservations";
import Confirmation from "./routes/Confirmation";
import Menu from "./routes/Menu";
import About from "./routes/About";
import Login from "./routes/Login";
import Order from "./routes/Order";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/reservations", element: <Reservations /> },
    { path: "/confirmation", element: <Confirmation /> },
    { path: "/menu", element: <Menu /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
    { path: "/order", element: <Order /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router basename={window.location.pathname || ''}>
      <App />
    </Router>
  );
};

export default AppWrapper;