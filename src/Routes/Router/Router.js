import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/Pages/Home/Home";

const router = createBrowserRouter([{ path: "/", element: <Home></Home> }]);

export default router;
