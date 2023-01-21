import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router/Router";

function App() {
  return (
    <div className="Apps">
      <header className="Apps-header">
        <RouterProvider router={router}></RouterProvider>
      </header>
    </div>
  );
}

export default App;
