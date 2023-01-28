import { createBrowserRouter } from "react-router-dom";
import CoverArea from "../../Component/CoverArea/CoverArea";
import Home from "../../Component/Pages/Home/Home";
import Review from "../../Component/Pages/Review/Review";
import Service from "../../Component/Pages/Service/Service";
import Signup from "../../Component/Registration/SignUp/Signup";
import Login from "./../../Component/Registration/Login/Login";
import Allservices from "./../../Component/Pages/Service/Allservices";
import AddReview from "../../Component/Pages/AddReview/AddReview";
import Profile from "../../Component/Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/service",
        loader: () => {
          return fetch(`http://localhost:5001/service`);
        },
        element: <Service></Service>,
      },
      {
        path: "/allservice",
        loader: () => {
          return fetch(`http://localhost:5001/allservices`);
        },
        element: <Allservices></Allservices>,
      },
      {
        path: "/experience",
        loader: () => {
          return fetch(`http://localhost:5001/experience`);
        },
        element: <CoverArea></CoverArea>,
      },
      {
        path: "/review",
        loader: () => {
          return fetch(`http://localhost:5001/review`);
        },
        element: <Review></Review>,
      },
      {
        path: "/addreview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);

export default router;
