import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from '../pages/home.jsx'
import Supplies_List from '../pages/supplies_list.jsx'
import Calculation from '../pages/supplies_calculation.jsx'
import User from '../pages/user.jsx'
import './index.css'

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/supplies",
      element: <Supplies_List />
    },
    {
      path: "/calculation",
      element: <Calculation />
    },
    {
      path: "/user",
      element: <User />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);