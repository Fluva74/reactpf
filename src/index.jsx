import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
// import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Future from "./routes/Future";
import Logo from "./components/Logo";
import Hamburger from "./components/Hamburger";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/future",
    element: <Future />,
  },
  {
    path: "/resume",
    element: <Contact />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Logo />
    {/* <Hamburger /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);