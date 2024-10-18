import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Create_trip from './components/create-trip/Create_trip.tsx'
import Header from './components/custom/Header.tsx'
// import { Toaster } from 'sonner'
import { Toaster } from "@/components/ui/toaster"
import ViewTrip from './components/view-trip/[tripId]/Index.tsx'
import Mytrips from './components/my-trips/Mytrips.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-trip",
    element: <Create_trip />, 
  },
  {
    path: "/view-trip/:tripId",
    element: <ViewTrip />
  },
  {
    path: "/my-trips",
    element : <Mytrips />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Toaster />
    <RouterProvider router={router} />
  </StrictMode>,
)
