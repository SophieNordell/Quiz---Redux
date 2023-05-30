import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import Admin from "./Admin";
import QuizPage from "./QuizPage";
import Root from "./Root";
import { Provider } from "hooks-for-redux";

const router = createBrowserRouter([
  {
    element: <Root />,
    path: "/",
    children: [
      {
        path: "/",
        element: <QuizPage />,
      },
      {
        path: "/Admin",
        element: <Admin />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    {" "}
    <RouterProvider router={router} />
  </Provider>
);
