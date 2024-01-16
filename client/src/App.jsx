import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import Register from "./Pages/Register"
import Login from "./Pages/Login"
import AddJobPost from "./Pages/AddJobPost"
import JobDetails from "./Pages/JobDetails"
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { useSelector } from "react-redux"
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import HomePageLogin from './components/MainPageLogin'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.withCredentialsth = true

function App() {

  const { loading } = useSelector(store => store.loading)
  return (
    <>
      <BrowserRouter>
        <Toaster position='button-top' toastOptions={{ duration: 4000 }} />
        {loading ? <Spinner /> :
          <Routes>
            <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>}></Route>
            <Route path="/home-login" element={<ProtectedRoute><HomePageLogin /></ProtectedRoute>}></Route>
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>}></Route>
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}></Route>
            <Route path="/add-job-post" element={<ProtectedRoute><AddJobPost /></ProtectedRoute>}></Route>
            <Route path="/job-details/:id" element={<JobDetails />}></Route>
          </Routes>}
      </BrowserRouter>
    </>
  )
}

export default App;