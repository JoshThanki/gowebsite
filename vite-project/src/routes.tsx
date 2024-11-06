import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import PlayGo from "./pages/PlayGo";
import Events from "./pages/Events";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./hooks/LoginPage";
import SuccessfulSignUp from "./pages/SuccesfulSignUp";
import ImagesPage from "./pages/ImagesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "playgo", element: <PlayGo /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "timetable", element: <Events /> },
      { path: "register", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup-complete", element: <SuccessfulSignUp /> },
      { path: "images", element: <ImagesPage /> },
    ],
  },
]);

export default router;
