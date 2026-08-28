import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <h1>404 not found</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "owner", element: <Owner /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
