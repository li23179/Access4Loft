import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Home from '../pages/home.jsx'
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);