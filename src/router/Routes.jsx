import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/rootLayout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import TimeLinePage from "../pages/timeLinePage/TimeLinePage";
import StatsPage from "../pages/statsPage/StatsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import DetailPage from "../pages/homePage/DetailPage";

export const router = createBrowserRouter([
  {
    path: '/', // index: true, eta same kaj korbe, hompage indicate kore 
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: '/timeLine',
        Component: TimeLinePage
      },
      {
        path: '/stats',
        Component: StatsPage
      },
      {
        path: '/friends/:id',
        Component: DetailPage
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])