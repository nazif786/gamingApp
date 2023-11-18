import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import GameDetailPage from "./components/pages/GameDetailPage";
import ErrorPage from "./components/pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "games/:id",
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
