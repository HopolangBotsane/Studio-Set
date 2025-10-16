import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "./Pages/Homepage.jsx";
import Aboutpage from "./Pages/Aboutpage.jsx"
import Dashboardpage from './Pages/Dashboardpage.jsx';
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
    element: <Aboutpage/>
  },
  {
    path: "/dashboard",
    element: <Dashboardpage/>,
    errorElement: <NotFoundPage/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
