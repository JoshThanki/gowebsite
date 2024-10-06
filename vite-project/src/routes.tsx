import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import HistoryPage from "./pages/HistoryPage";
import RegisterPage from "./pages/RegisterPage";
import PlayGo from "./pages/PlayGo";
import RulesPage from "./pages/RulesPage";
import Timetable from "./pages/Timetable";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "history", element: <HistoryPage /> },
      { path: "playgo", element: <PlayGo/> },
      { path: "rules", element: <RulesPage /> },
      { path: "timetable", element: <Timetable /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },


]);

export default router;
