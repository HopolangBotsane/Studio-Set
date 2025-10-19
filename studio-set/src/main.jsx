import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./Pages/Homepage.jsx";
import Aboutpage from "./Pages/Aboutpage.jsx"
import VendorDashboard from './Pages/VendorDashboard.jsx';
import RenterDashboard from './Pages/RenterDashboard.jsx';
import HelpCenter from './Pages/HelpCenter.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/about",
    element: <Aboutpage/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/help",
    element: <HelpCenter/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/renterdashboard",
    element: <RenterDashboard/>,
    errorElement: <NotFoundPage/>
  },
  {
    path: "/vendordashboard",
    element: <VendorDashboard/>,
    errorElement: <NotFoundPage/>
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
