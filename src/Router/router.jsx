import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import CardDetails from "../Layout/Components/CardDetails/CardDetails";
import ErrorPage from "../Layout/Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/cards.json"),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch("/cards.json"),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("/cards.json"),
      },
      {
        path: "/cards/:id",
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/donation/:id",
        element: <CardDetails></CardDetails>,
      },
    ],
  },
]);

export default router;
