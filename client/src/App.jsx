import React from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import AddJobPost from "./Pages/AddJobPost"
import JobDetails from "./Pages/JobDetails"

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/add-job',
      element: <AddJobPost />
    },
    {
      path: '/job-details',
      element: <JobDetails />
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App;