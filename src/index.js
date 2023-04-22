import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Home } from "./views/Home";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { MovieDetail } from "./views/MovieDatails";
import { Provider } from "react-redux";
import store from "./store/store";
import { Favoritos } from "./views/Favoritos";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/favoritos",
        element: <Favoritos />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
