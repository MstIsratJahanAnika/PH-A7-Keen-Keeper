import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'

import { router } from './router/Routes.jsx'
import CommunicationTypeContextProvider from './context/CommunicationTypeContextProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* use of context API */}
    <CommunicationTypeContextProvider>
      <RouterProvider router={router} />
    </CommunicationTypeContextProvider>
  </StrictMode>,
)
