import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import ErrorPage from './pages/errorPage/ErrorPage.jsx'
import HomePage from './pages/homePage/HomePage.jsx'
import TimeLinePage from './pages/timeLinePage/TimeLinePage.jsx'
import StatsPage from './pages/statsPage/StatsPage.jsx'

const router = createBrowserRouter([
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
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
