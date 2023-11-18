import { createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/pages/Layout";
import GameDetailPage from "./components/pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
