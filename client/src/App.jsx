import React from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import AddJobPost from "./Pages/AddJobPost"
import JobDetails from "./Pages/JobDetails"
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { Provider } from "react-redux"
import appStore from './utility/appStore'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentialsth = true

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
      <Provider store={appStore}>
        <Toaster position='button-top' toastOptions={{ duration: 4000 }} />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  )
}

export default App;